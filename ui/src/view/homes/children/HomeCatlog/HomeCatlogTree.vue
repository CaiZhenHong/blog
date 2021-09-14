 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div class="tree">
    <dl class="tree-node" v-for="({ dt, dd }, index) in dataList" :key="index">
      <dt class="tree-node-level1" @click="controlHidden(index)">
        <div :class="['icon', { 'icon-show': hiddenFlag[index] }]">
          &#xe63f;
        </div>
        {{ dt }}
      </dt>

      <dd v-show="!hiddenFlag[index]">
        <ul
          class="tree-node-level2"
          v-for="({ id, name, time }, index) in dd"
          :key="index"
        >
          <router-link :to="{ path: 'article', query: { id } }"
            >{{ name }}
          </router-link>
          <div class="line"></div>
          <div class="time">{{ time | dateFormat }}</div>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hiddenFlag: [],
    };
  },
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    controlHidden(index) {
      this.hiddenFlag[index] = this.hiddenFlag[index];
      this.hiddenFlag.splice(index, 1, !this.hiddenFlag[index]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';

.tree {
  padding: 24px 48px;
  padding-bottom: 80px;
  @media screen and (max-width: 700px) {
    padding: 12px 24px;
  }

  .tree-node {
    font-size: 14px;
  }
  .tree-node-level1 {
    font-weight: 700;
    color: #000;
    line-height: 35px;
    height: 35px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;

    .icon {
      font-family: iconfont;
      font-size: 18px;
      margin-right: 10px;
      transition: all 0.2s ease-in-out;
    }
    .icon-show {
      transition: all 0.2s ease-in-out;
      transform: rotate(-90deg);
    }
  }
  .tree-node-level2 {
    color: #333;
    height: 35px;
    text-indent: 24px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    align-items: center;
    .name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      &:hover {
        color: $theme-color;
      }
    }
    .line {
      flex: 1;
      border-bottom: 1px dashed $border-color;
      margin-left: 24px;
    }
    .time {
      color: #bfbfbf;
      flex-shrink: 0;
    }
  }
}
</style>