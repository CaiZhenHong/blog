 <!--
 * @description 模板
 * @Date 2021年6月14日
 -->
<template>
  <div @click="triggerInput">
    <slot></slot>
    <input
      :ref="imageRef"
      type="file"
      style="display: none"
      @change="getImage"
    />
  </div>
</template>

<script>
import Jimp from 'jimp/es';
import cos from '@/utils/cos';
import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    // 用于标志元素的字符串
    imageRef: {
      type: String,
      require: true,
    },

    size: {
      type: String,
      require: true,
    },
  },

  data: function () {
    return {
      imageData: '', // base64 格式的图片
      formatImageFile: '', // 处理后的 File 格式的图片
    };
  },

  computed: {
    limitW: function () {
      return Number(this.size.split(',')[0]);
    },

    limitH: function () {
      return Number(this.size.split(',')[1]);
    },
  },

  watch: {
    imageData: function (base64) {
      if (!base64) return;
      this.formatImage(base64);
    },

    formatImageFile: function (file) {
      this.uploadImage(file);
    },
  },

  methods: {
    /* 通过点击 div 触发 input */
    triggerInput: function () {
      if (!this.imageRef) return;
      this.$refs[this.imageRef].click();
    },

    /* 获取图片(BASE64 格式) */
    getImage: function (e) {
      let __this = this;
      let imageFile = e.target.files[0]; // 获取文件

      let read = new FileReader(); // 使用 base64 读取图片
      read.readAsDataURL(imageFile);

      read.onload = function (e) {
        __this.imageData = e.target.result; // 读取 base64 并赋给 image
      };
    },

    /* 处理图片 */
    formatImage: function (image) {
      Jimp.read(image)
        .then((img) => {
          let resizeH = this.limitH,
            resizeW = this.limitW;

          if (!resizeH || img.getWidth < img.getHeight) {
            resizeH = Jimp.AUTO;
          } else {
            resizeW = Jimp.AUTO;
          }

          return Promise.resolve(img.resize(resizeW, resizeH)); // 缩放
        })
        .then((img) => {
          return this.limitH
            ? Promise.resolve(img.crop(0, 0, this.limitW, this.limitH)) // 裁剪
            : Promise.resolve(img);
        })
        .then((img) => {
          img.getBuffer(Jimp.MIME_PNG, (err, image) => {
            if (err) return;
            const file = new window.File([image], uuidv4(), {
              type: Jimp.MIME_PNG,
            });

            this.formatImageFile = file;
          });
        });
    },

    /* 上传图片 */
    uploadImage: function (file) {
      cos(uuidv4() + '.png', file, (err, res) => {
        if (err) return;
        this.$emit('change', `https://${res.Location}`);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';
</style>