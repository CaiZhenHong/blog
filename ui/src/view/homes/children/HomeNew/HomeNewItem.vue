 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="c_home-new-item">
    <router-link :to="{ path: 'article', query: { id: data.id } }">
      <div class="title">{{ data.title }}</div>
    </router-link>
    <div class="content">
      <div class="left" v-if="data.cover">
        <img class="cover" :src="data.cover" alt="" />
      </div>
      <div class="right">
        <router-link :to="{ path: 'article', query: { id: data.id } }">
          {{ data.summary }}
        </router-link>
      </div>
    </div>
    <div class="actions">
      <div :class="['like', { 'like-active': data.liked }]" @click="clickLike">
        <div class="item-name">{{ data.liked ? '已赞同' : '赞同' }}</div>
        <div class="count">{{ data.like | countFormat }}</div>
      </div>

      <div class="comment">
        <router-link :to="{ path: 'article', query: { id: data.id } }">
          {{ data.comment | countFormat }}
        </router-link>
      </div>

      <div class="share">分享</div>

      <router-link
        :to="{ path: 'catlog', query: { title: data.tag } }"
        tag="div"
      >
        <div class="tag">{{ data.tag }}</div>
      </router-link>
      <div class="time">发布于 {{ data.time | dateFormat }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return null;
      },
    },
  },

  methods: {
    clickLike() {
      if (!this.data.liked) {
        this.data.like += 1;
        this.data.liked = true;
      } else {
        this.data.liked = false;
        this.data.like -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';
.c_home-new-item {
  .title {
    line-height: 1.6;
    font-size: 18px;
    color: #121212;
  }
  .content {
    display: flex;
    margin-top: 20px;
    .left {
      width: 190px;
      height: 105px;
      margin-right: 16px;
    }
    .cover {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .right {
      flex: 1;
      font-size: 15px;
      color: #121212;
      line-height: 1.67;
      letter-spacing: 0.5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
  }
  .actions {
    box-sizing: content-box;
    display: flex;
    align-items: center;
    text-align: center;

    letter-spacing: 0.5px;
    padding: 10px 0;
    font-size: 14px;
    color: #8590a6;
    & > div {
      margin-left: 25px;
    }
    .like {
      height: 100%;
      width: 100px;
      height: 30px;
      margin: 0;
      border-radius: 4px;
      line-height: 32px;
      color: $theme-color;
      background: #0070c52f;
      cursor: pointer;
      display: flex;
      font-size: 13px;
      align-items: center;
      justify-content: center;
      .item-name {
        margin-right: 5px;
      }
    }
    .like-active {
      background: $theme-color;
      color: #fff;
    }
    .comment {
      font-size: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #8590a6;
      &::before {
        margin-right: 5px;
        font-size: 18px;
        content: '\e60d';
        font-family: 'iconfont';
        cursor: pointer;
      }
      &::after {
        cursor: pointer;
        margin-left: 4px;
        content: '条评论';
      }
      &:hover {
        cursor: pointer;
        color: $theme-color;
      }
    }
    .share {
      font-size: 14px;
      cursor: pointer;
      color: #8590a6;
      &::before {
        margin-right: 5px;
        font-size: 16px;
        content: '\e675';
        font-family: 'iconfont';
      }
      &:hover {
        color: $theme-color;
      }
    }
    .tag {
      cursor: pointer;
      color: #8590a6;
      &:hover {
        color: $theme-color;
      }
    }
    .time {
      @media screen and (max-width: 825px) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .title {
      font-size: 14px;
      font-weight: 700;
    }
    .content {
      margin-top: 3px;
      .left {
        width: 80px;
        height: 55px;
        margin-right: 8px;
      }
      .right {
        font-size: 12px;
        -webkit-line-clamp: 3;
      }
    }

    .actions {
      height: 22px;
      .like {
        background: #00000000;
        color: #8590a6;
        font-size: 12px;
        line-height: 22px;
        text-align: left;
        width: fit-content;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        &::before {
          display: none;
        }
      }
      .comment {
        font-size: 12px;
        &::before {
          display: none;
        }
      }
      .share,
      .tag,
      .time {
        display: none;
      }
    }
  }
}
</style>