<template>
  <div class="editor">
    <div class="top-bar iconfont">
      <div>
        <base-link class="iconfont icon__left profile" to="/profile">
          个人中心
        </base-link>
      </div>
      <base-input
        class="title"
        placeholder="请在此输入文章标题"
        v-model="title"
      ></base-input>
      <base-button class="publish" :shade="shade" @click="showInfo"
        >发布文章</base-button
      >

      <base-popover>
        <template #head>
          <img class="right__profile" :src="photo" alt="" />
        </template>
        <template #body>
          <base-link to="/setting">
            <div class="right__profile-item icon__profile">个人主页</div>
          </base-link>

          <base-link to="/setting">
            <div class="right__profile-item icon__setting">账户设置</div>
          </base-link>
          <div class="right__profile-item icon__exit">退出登录</div>
        </template>
      </base-popover>
    </div>
    <div class="content">
      <textarea
        class="edit"
        v-model="content"
        placeholder="在此输入正文"
      ></textarea>
      <div class="view" v-html="view" v-highlight></div>
    </div>
    <editor-info
      v-if="infoVisible"
      @publish="pub"
      @cancel="cancel"
    ></editor-info>
  </div>
</template>

<script>
import {
  BaseInput,
  BaseButton,
  BaseLink,
  BasePopover,
} from '@/components/base';
import marked from 'marked';
import hljs from 'highlight.js';
import EditorInfo from './Info';
import { post_article } from '@/services/article';
import { SHOW_MSG } from '@/store/type';

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseLink,
    BasePopover,
    EditorInfo,
  },

  data: function () {
    return {
      content: '',
      view: '',
      title: '',
      infoVisible: false,
    };
  },

  computed: {
    photo: function () {
      return window.localStorage.getItem('photo');
    },

    shade: function () {
      return !(Boolean(this.content.trim()) && Boolean(this.title.trim()));
    },
  },

  methods: {
    showInfo: function () {
      this.infoVisible = true;
    },

    pub: function (info) {
      info.content = this.content;
      info.title = this.title;
      if (!info.description) {
        info.description = this.content.replace(/\s/, '').substring(0, 200);
      }
      post_article(info)
        .then(() => {
          this.$store.commit(SHOW_MSG, {
            text: '文章发布成功',
            type: 'succeed',
          });
          this.$router.replace('/profile');
        })
        .catch(() => {
          this.$store.commit(SHOW_MSG, { text: '文章发布失败', type: 'error' });
        });
    },

    cancel: function () {
      this.infoVisible = false;
    },
  },

  watch: {
    content: function (v) {
      this.view = marked(v);
    },
  },

  mounted: function () {
    hljs.highlightAll();
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.editor {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.top-bar {
  box-sizing: border-box;

  width: 100%;
  height: 70px;

  padding: 0 80px;

  margin-bottom: 40px;
  border-bottom: 1px solid $bdc;

  background: #fff;

  display: flex;
  align-items: center;

  .profile {
    font-size: 16px;
    width: 100px;
    display: flex;
    align-items: center;
    @include _hover(#000);
  }

  .title {
    flex: 1;
    height: 40px;
    margin: 0 50px;
  }

  .publish {
    font-size: 16px;
    height: 40px;
    width: 80px;
    margin-right: 40px;
  }

  .right__profile {
    vertical-align: middle;
    cursor: pointer;
    width: 35px;
    border: 1px solid $bdc;
    border-radius: 50%;
    margin-right: 80px;
  }
  .right__profile-item {
    color: #808080;
    padding: 15px 30px;
    @include _hover($background: #dbdada79, $time: 0s);
  }
  .icon__profile:before {
    content: '\e663';
    margin-right: 8px;
  }
}

.content {
  width: 100%;
  height: 100%;

  flex: 1;

  border-top: 1px solid $bdc;

  display: flex;

  overflow: auto;
  .edit {
    flex: 1;
    padding: 24px;

    font-size: 18px;

    font-family: 'Chinese Quote', 'Segoe UI', Roboto, 'PingFang SC',
      'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;

    outline: none;
    border: none;

    overflow: auto;

    background: #00000000;

    resize: none;
  }

  .view {
    flex: 1;
    height: 100%;
    padding: 24px;

    background: #fff;
    border-left: 1px solid $bdc;

    overflow: auto;
  }
}
</style>