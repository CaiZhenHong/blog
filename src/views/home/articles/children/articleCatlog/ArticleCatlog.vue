<template>
  <div class="articles-catlog">
    <div class="catlog" v-if="tags1">
      <div class="content">
        <div class="title">{{ tags1[currentItem] }}</div>
        <div class="catlog-content">
          <catlog-tag :tags="tags2" :tag1="tags1[currentItem]" />
        </div>
      </div>
      <div class="tab">
        <div
          class="tab-item"
          v-for="(tag, index) in tags1"
          :class="[{ 'tab-item-active': index === currentItem }]"
          :key="index"
          @click="cilckItem(index)"
        >
          {{ tag }}
        </div>
      </div>
    </div>

    <div v-else class="iconfont none-articles">
      <div class="icon">&#xe60e;</div>

      <div class="text">暂无文章</div>
    </div>
  </div>
</template>

<script>
import CatlogTag from '@/views/home/articles/children/articleCatlog/CatlogTag.vue';

export default {
  components: { CatlogTag },

  data: function () {
    return {
      currentItem: 0,
    };
  },

  computed: {
    tags: function () {
      return this.$store.state.user.tags;
    },

    tags1: function () {
      return this.tags.map((obj) => {
        return obj.tag1;
      });
    },

    tags2: function () {
      let tags = this.tags[this.currentItem];
      if (tags) {
        tags = this.tags[this.currentItem].tag2;
      }
      return tags;
    },
  },

  methods: {
    cilckItem: function (index) {
      this.currentItem = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';

.articles-catlog {
  width: 100%;
  height: 100%;
}

.catlog-content {
  padding: 40px 80px;
}

.catlog {
  display: flex;
  height: 100%;
  width: 100%;
  .tab {
    flex: 2;
    height: 100%;
    min-height: 500px;
    border-left: 1px solid $bdc;
  }
  .tab-item {
    box-sizing: border-box;
    border-right: 3px solid #00000000;
    text-indent: 24px;
    line-height: 42px;
    font-size: 15px;
    letter-spacing: 1px;
    @include _hover($background: #f3f2f24f);
  }
  .tab-item-active {
    background: #f3f2f2af;
    border-right-color: $themec;
    @include _hover($background: #f3f2f2af);
  }
  .content {
    flex: 8;
    padding: 80px 0 60px 0;
    .title {
      text-align: center;
      font-size: 24px;
      line-height: 36px;
    }
  }
}

.none-articles {
  padding: 24px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 150px;
    color: #e7e7e7;
  }

  .text {
    color: #a0a0a0;
    width: 160px;
    height: 40px;
    text-align: center;
    letter-spacing: 1px;
    line-height: 40px;

    margin-top: 20px;
  }
}
</style>