<template>
  <div class="info">
    <div class="info-inner">
      <div class="title">文章发布</div>

      <div
        class="tag"
        v-for="({ title, inputType, options }, key) in tags"
        :key="key"
      >
        <div class="name">{{ title }}</div>
        <div class="select" v-if="inputType === '添加分类'">
          <base-select :value="tagNames[key]">
            <div class="options">
              <div
                class="option"
                v-for="(option, index) in key ? options[tagNames[0]] : options"
                :key="index"
                @click="selectOption(key, option)"
              >
                {{ option }}
              </div>
            </div>
          </base-select>
        </div>
        <input
          class="select tag-input"
          style="cursor: text"
          v-else
          placeholder="请输入分类"
          v-model="tagNames[key]"
        />
        <div class="iconfont add" @click="changeInputType(key)">
          {{ inputType }}
        </div>
      </div>

      <div class="outline">
        <div class="name">文章简介：</div>
        <textarea class="outline-editor" v-model="description"></textarea>
      </div>

      <div class="cover">
        <div class="name">添加封面：</div>
        <input
          type="file"
          name=""
          id=""
          style="display: none"
          @change="upload"
          ref="uploadCover"
        />
        <div class="iconfont cover-add" @click="uploadCover">
          <img class="cover-img" v-if="cover" :src="cover" alt="" />
          &#xe612;
        </div>
      </div>
      <div class="action">
        <base-button class="cancel" type="grey" @click="cancel"
          >取消</base-button
        >
        <base-button class="pub" @click="publish" :shade="shade">
          发布</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { BaseSelect, BaseButton } from '@/components/base';

export default {
  components: {
    BaseSelect,
    BaseButton,
  },

  data: function () {
    return {
      tags: [
        {
          title: '一级分类：',
          inputType: '添加分类',
          options: ['前端', '后端'],
        },
        {
          title: '二级分类：',
          inputType: '添加分类',
          options: {
            前端: ['JavaScript', 'HTML'],
            后端: ['的撒', 'TML', 'JavaScript', 'HTML'],
          },
        },
      ],

      tagNames: ['前端', ''],

      cover: '',

      description: '',
    };
  },

  computed: {
    shade: function () {
      return Boolean(!(this.tagNames[0] && this.tagNames[1]));
    },
  },

  methods: {
    changeInputType: function (index) {
      this.tags[index].inputType =
        this.tags[index].inputType === '添加分类' ? '选择分类' : '添加分类';
    },

    selectOption: function (index, option) {
      console.log(index, option);
      this.tagNames.splice(index, 1, option);
    },

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
      };
    },

    publish: function () {
      this.$emit('publish', {
        tag1: this.tagNames[0],
        tag2: this.tagNames[1],
        description: this.description,
        cover: this.cover,
      });
    },
    cancel: function () {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.info {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(226, 226, 226, 0.527);

  display: flex;
  justify-content: center;
  align-items: center;
}

.info-inner {
  box-sizing: border-box;
  width: 600px;
  height: 600px;
  background: #fff;
  box-shadow: 0 0 6px 0 rgb(223, 222, 222);
  padding: 32px;
}

.title {
  font-size: 18px;
  margin-bottom: 40px;
}

.tag {
  display: flex;
  align-items: center;
  height: 32px;
  margin: 20px 0;
}
.name {
  font-size: 15px;
}
.select {
  padding: 0 10px;
  width: 160px;
  height: 28px;
  border: 1px solid $bdc;
  margin-left: 20px;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  .options {
    border: 1px solid $bdc;
    width: 160px;
    margin-left: -11px;
    background: #fff;
    transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      border-color: rgb(192, 192, 192);
    }
  }
  .option {
    @include _hover($background: $themec, $color: #ffffff);
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
  }
  &:hover {
    border-color: rgb(192, 192, 192);
  }
}

.tag-input {
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: rgb(192, 192, 192);
  }
}
.cover-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.add {
  border-radius: 2px;
  padding: 7px 10px;
  font-size: 12px;
  margin-left: 40px;
  border: 1px solid $bdc;

  @include _hover($themec);
  &:hover {
    border-color: $themec;
  }

  &::before {
    content: '\e612';
    margin-right: 5px;
    font-size: 12px;
  }
}

.outline {
  display: flex;
  margin-top: 30px;
  .outline-editor {
    box-sizing: border-box;
    padding: 12px;
    width: 320px;
    height: 160px;
    margin-left: 20px;
    resize: none;
    outline: none;
    border: 1px solid rgb(202, 200, 200);
    border-radius: 5px;
    &:focus {
      border-color: rgb(160, 160, 160);
    }
  }
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

.action {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  .pub,
  .cancel {
    margin-left: 20px;
    width: 65px;
    height: 32px;
  }
}
</style>