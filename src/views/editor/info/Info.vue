<template>
  <div class="info">
    <div class="info-inner">
      <div class="title">文章发布</div>

      <info-tag
        title="一级分类："
        :tags="tagArr1"
        v-model="tag1"
        @add="addTag(1, $event)"
      />

      <info-tag
        title="二级分类："
        :tags="tagArr2"
        v-model="tag2"
        @add="addTag(2, $event)"
      />

      <info-desc v-model="description" />

      <info-cover v-model="cover" />

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
import InfoTag from './InfoTag.vue';
import InfoDesc from './InfoDesc.vue';
import InfoCover from './InfoCover.vue';
import { put_user_basic } from '@/services/user';
import { UPDATE_USER_INFO, SHOW_MSG } from '@/store/type';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('user');

export default {
  components: {
    InfoTag,
    InfoDesc,
    InfoCover,
  },

  data: function () {
    return {
      cover: '',

      description: '',

      tag1: '',

      tag2: '',

      tags: JSON.parse(window.localStorage.getItem('tags')),
    };
  },

  computed: {
    // 一级分类数组
    tagArr1: function () {
      let arr = [];
      for (const key in this.tags) {
        arr.push(key);
      }
      return arr;
    },

    // 二级分类数组
    tagArr2: function () {
      let tag = this.tag1;
      return this.tags[tag];
    },

    shade: function () {
      return !this.tag1 || !this.tag2;
    },
  },

  methods: {
    ...mapMutations([UPDATE_USER_INFO]),

    cancel: function () {
      this.$emit('cancel');
    },

    publish: function () {
      this.$emit('publish', {
        tag1: this.tag1,
        tag2: this.tag2,
        cover: this.cover,
        description: this.description,
      });
    },

    // 添加分类
    addTag: function (index, tag) {
      let tagArr = [];

      if (index === 1) {
        this.tags[tag] = [];
      } else {
        this.tags[this.tag1].push(tag);
      }

      for (const key in this.tags) {
        tagArr.push({ tag1: key, tag2: this.tags[key] });
      }

      put_user_basic({ tags: tagArr })
        .then(() => {
          this[UPDATE_USER_INFO]({ tags: tagArr });
        })
        .then(() => {
          this.$store.commit(SHOW_MSG, { type: 'succeed', text: '添加成功' });
        })
        .then(() => {
          if (index === 1) {
            this.tags = Object.assign({}, this.tags);
          }
        });
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