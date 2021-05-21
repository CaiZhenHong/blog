<template>
  <div>
    <div class="top-bar">
      <div class="article-info">
        / 前端 / JavaScript / let、var、const 的区别
      </div>

      <div class="public-article">
        <base-button @click="submit">发布</base-button>
      </div>
    </div>
    <div id="tool-bar" class="iconfont">
      <!-- 居中方式 -->
      <span class="ql-formats">
        <div class="iconfont color">
          <div class="ql-item"></div>
          <base-select
            class="focus-color ql-item iconfont title"
            :value="headerValue"
          >
            <div class="title-select">
              <div class="title-select-option" @click="headerClick(0)">
                正文
              </div>
              <div
                class="title-select-option"
                v-for="(option, index) in 5"
                :key="index"
                @click="headerClick(index + 1)"
              >
                标题 {{ index + 1 }}
              </div>
            </div>
          </base-select>
        </div>
      </span>

      <span class="ql-formats">
        <!-- 加粗 -->
        <button class="ql-bold ql-item iconfont">&#xe61d;</button>
        <!-- 斜体 -->
        <button class="ql-italic ql-item iconfont">&#xe61f;</button>
        <!-- 下划线 -->
        <button class="ql-underline ql-item iconfont">&#xe620;</button>
        <!-- 删除线 -->
        <button class="ql-strike ql-item iconfont">&#xe622;</button>
      </span>

      <!-- 字体颜色 -->
      <span class="ql-formats">
        <div class="iconfont color">
          <div class="focus-color ql-item">&#xe623;</div>
          <div class="select-color ql-item">&#xe63f;</div>
        </div>

        <!-- 背景颜色 -->
        <div class="iconfont color">
          <div class="focus-color ql-item">&#xe624;</div>
          <div class="select-color ql-item">&#xe63f;</div>
        </div>
      </span>

      <!-- 居中方式 -->
      <span class="ql-formats">
        <div class="iconfont color">
          <div class="focus-color ql-item">&#xe62e;</div>
          <base-select class="select-color ql-item iconfont">
            <div class="title-select">
              <button class="title-select-option">居中对齐</button>
              <div class="title-select-option">左对齐</div>
              <div class="title-select-option">右对齐</div>
              <div class="title-select-option">两端对齐</div>
            </div>
          </base-select>
        </div>
      </span>

      <!-- 无序列表 -->
      <span class="ql-formats">
        <button class="ql-list ql-item iconfont" value="ordered">
          &#xe637;
        </button>

        <!-- 有序列表 -->
        <button class="ql-item iconfont" value="bullet">&#xe636;</button>

        <!-- 增加缩进 -->
        <div class="iconfont color">
          <div class="focus-color ql-item">&#xe62b;</div>
          <div class="select-color ql-item">&#xe63f;</div>
        </div>
      </span>
      <span class="ql-formats">
        <!-- 代码 -->
        <div class="ql-item iconfont">&#xe621;</div>
        <!-- 图片 -->
        <div class="ql-item iconfont">&#xe63c;</div>
        <!-- 链接 -->
        <div class="ql-item iconfont">&#xe619;</div>
        <!-- 视频 -->
        <div class="ql-item iconfont">&#xe63d;</div>
      </span>
    </div>
    <div id="editor" @click="editorClick"></div>
  </div>
</template>

<script>
import 'quill/dist/quill.core';
import hljs from 'highlight.js';
import 'highlight.js/styles/xcode.css';
import { BaseButton, BaseSelect } from '@/components/base';
import Quill from 'quill';
import { post_article } from '@/services/article';

export default {
  components: {
    BaseButton,
    BaseSelect,
  },

  data: function () {
    return {
      quill: null,
      headerValue: '正文',
    };
  },

  methods: {
    initEditor: function () {
      hljs.configure({
        // optionally configure hljs
        languages: ['javascript', 'ruby', 'python'],
      });

      this.quill = new Quill('#editor', {
        //  theme: 'snow',
        modules: {
          toolbar: {
            container: '#tool-bar',
          },
        },
      });
    },

    submit: function () {
      let content = this.quill.getContents();
      post_article({
        title: 'let,const,var 的区别',
        classI: '前端',
        classII: 'JavaScript',
        content,
      }).then((v) => {
        console.log(v);
      });
    },

    headerClick: function (index) {
      this.quill.format('header', index);

      this.headerValue = index === 0 ? `正文` : `标题 ${index}`;
    },

    editorClick: function () {
      let { header } = this.quill.getFormat();
      if (header) {
        this.headerValue = `标题 ${header}`;
      } else {
        this.headerValue = `正文`;
      }
    },
  },

  mounted: function () {
    this.$nextTick(() => {
      this.initEditor();
    });
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.editor {
  background: $bg;
}
.top-bar {
  padding: 0 40px;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .article-info {
    font-size: 14px;
  }
  .public-article {
    height: 30px;
    width: 70px;
  }
}

.ql-formats {
  @include _flex(rvc);
  line-height: 32px;
  height: 100%;
  padding: 0 14px;
  border-right: 1px solid $bdc;
}
.ql-item {
  height: 32px;
  width: 32px;

  font-size: 12px;
  color: #595959;

  background: none;
  @include _hover($background: #f1f1f1, $time: 0.1s);
}

.color {
  display: flex;

  margin-left: 5px;
  .focus-color {
    width: 22px;
  }
  .select-color {
    width: 14px;
  }
  .title {
    width: 80px;
    padding-right: 10px;
    padding-left: 10px;
    text-align: left;
  }
  .title-select {
    width: 80px;
    @include _box();
    box-shadow: 0 0 10px 0 $bdc;
  }
  .title-select-option {
    text-align: center;
    @include _hover($background: #f1f1f1, $time: 0.1s);
  }
}
</style>


<style lang="scss">
@import '@app';
@import '@theme';

#tool-bar {
  text-align: center;
  height: 40px;
  @include _flex(rvc);
  justify-content: center;
  border-top: 1px solid $bdc;
  border-bottom: 1px solid $bdc;
}

.ql-container {
  box-sizing: border-box;
  width: 870px;
  height: 1230px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px 40px;
  @include _box();
  box-shadow: 0 0 6px 0 rgb(218, 218, 218);
}
.ql-editor {
  width: 100%;
  height: 100%;
  outline: none;
}

.ql-clipboard {
  display: none;
}
</style>