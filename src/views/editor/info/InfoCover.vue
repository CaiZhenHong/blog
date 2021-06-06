 <!--
 * @desc: 文章封面
 * @Date: 2021年6月5日
 -->
<template>
  <div class="cover">
    <div class="name">添加封面：</div>
    <input
      type="file"
      name=""
      style="display: none"
      @change="upload"
      ref="uploadCover"
    />
    <div class="iconfont cover-add" @click="uploadCover">
      <img class="cover-img" v-if="cover" :src="cover" alt="" />
      &#xe612;
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      cover: '',
    };
  },

  methods: {
    uploadCover: function () {
      this.$refs.uploadCover.click();
    },

    upload: function (e) {
      let self = this;
      let file = e.target.files[0];
      let read = new FileReader();
      read.readAsDataURL(file);
      read.onload = function (e) {
        self.cover = e.target.result;
        self.$emit('input', e.target.result);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';

.name {
  font-size: 15px;
}

.cover-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.cover {
  margin-top: 30px;
}
.cover-add {
  position: relative;
  width: 160px;
  height: 100px;
  background: #fff;
  border: 1px solid $bdc;
  margin-top: 10px;
  margin-left: 100px;
  color: rgb(173, 171, 171);
  text-align: center;
  line-height: 100px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 2px;
  @include _hover($themec);
  &:hover {
    border-color: rgb(192, 192, 192);
    box-shadow: 0 0 3px 0 $bdc;
  }
}
</style>