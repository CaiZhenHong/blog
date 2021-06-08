 <!--
 * @description 内容层级
 * @Date 日期
 -->
<template>
  <div>
    <div
      v-for="({ tag2, articles, isloading }, index) in catlogData"
      :key="index"
    >
      <div class="tag-warpper">
        <div
          class="tag"
          :class="[{ 'tag-show': articles.length }]"
          @click="getArticles(tag2, index)"
        >
          {{ tag2 }}
        </div>
        <base-loader
          v-if="isloading"
          class="tag-loader"
          :text="false"
        ></base-loader>
      </div>

      <div>
        <div
          class="article"
          v-for="({ title, time }, index) in articles"
          :key="index"
        >
          <div class="name">{{ title }}</div>
          <div class="line"></div>
          <div class="time">{{ time.substring(0, 10) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get_articles_catlog } from '@/services/article';
export default {
  data: function () {
    return {
      articles: {
        index: 0,
        data: [],
      },
      catlogData: [],
    };
  },

  props: {
    tags: {
      type: Array,
      default: function () {
        return [];
      },
    },
    tag1: {
      type: String,
    },
  },

  watch: {
    tags: function () {
      this.init();
    },
  },

  methods: {
    getArticles: function (tag2, index) {
      if (this.catlogData[index].articles.length) {
        this.catlogData[index].articles = [];
      } else {
        this.catlogData[index].isloading = true;
        get_articles_catlog({
          tag1: this.tag1,
          tag2,
          email: this.$store.state.user.email,
        }).then(({ data }) => {
          this.catlogData[index].articles = data;
          this.catlogData[index].isloading = false;
        });
      }
    },

    init: function () {
      this.catlogData = this.tags.map((tag2) => {
        return { tag2, articles: [], isloading: false };
      });
    },
  },

  mounted: function () {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
@import '@app';
@import '@theme';

.tag-warpper {
  display: flex;
}
.tag-loader {
  line-height: 48px;
  font-size: 12px;
  transform: scale(0.7);
  margin-left: 20px;
}

.tag {
  font-size: 14px;
  line-height: 48px;
  font-weight: 900;
  letter-spacing: 1.2px;
  border-color: rgb(119, 119, 119);
  &:hover {
    border-color: #000;
    color: #000;
  }
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::before {
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: inline-block;
    content: '';
    border-top: 6.5px solid #00000000;
    border-right: 7px solid #00000000;
    border-bottom: 6.5px solid #00000000;
    border-left: 8px solid #00000000;
    border-left-color: inherit;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}

.tag-show {
  &::before {
    transition: all 0.2s linear;
    display: inline-block;
    content: '';
    border-top: 6.5px solid #00000000;
    border-right: 7px solid #00000000;
    border-bottom: 6.5px solid #00000000;
    border-left: 8px solid #00000000;
    border-left-color: inherit;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    transform: rotate(90deg) translate(3.5px, 4px);
  }
}
.article {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  line-height: 36px;
  text-indent: 24px;
  font-weight: 400;
  color: #000;
  .name {
    font-size: 14px;
    @include _hover($themec);
    padding-right: 20px;
    color: #333;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    word-break: break-all;
  }
  .line {
    flex: 1;
    border-bottom: 1px dashed $bdc;
  }
  .time {
    font-size: 12px;
    color: #9b9b9b;
  }
}
</style>