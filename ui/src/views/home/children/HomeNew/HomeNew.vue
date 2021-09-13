 <!--
 * @description 模板
 * @Date 日期
 -->
<template>
  <div>
    <home-new-item
      class="new-item"
      v-for="(data, index) in dataList"
      :key="index"
      :data="data"
    ></home-new-item>
    <base-load-icon class="loading"></base-load-icon>
  </div>
</template>

<script>
import HomeNewItem from './HomeNewItem.vue';
import { getArticleNew } from '@/api/article';
import BaseLoadIcon from '@/components/Base/BaseLoadIcon.vue';
import * as util from '@/util';

export default {
  name: 'HomeNew',
  components: { HomeNewItem, BaseLoadIcon },
  data() {
    return {
      dataList: [],
      addNewDataFlag: true,
    };
  },

  methods: {
    addNewData() {
      let flag = 1;
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio < 0.8 || !this.addNewDataFlag) return;
        this.addNewDataFlag = false;

        getArticleNew(1).then((value) => {
          this.dataList = this.dataList.concat(value);
          this.addNewDataFlag = true;
        });

        observer.disconnect();
      });
      observer.observe(document.querySelector('#HOME_FOOTER'));
    },
  },

  created() {
    getArticleNew(1).then((value) => {
      this.$nextTick(() => {
        this.dataList = value;
      });
    });
  },

  mounted() {
    document.addEventListener(
      'scroll',
      util.throttle(this.addNewData, 1000, { end: true })
    );
  },
};
</script>

<style lang="scss" scoped>
@import '@theme';
.new-item {
  padding: 20px;
  border-bottom: 1px solid $border-color;
  &:last-child {
    border: none;
  }
  @media screen and (max-width: 700px) {
    padding: 10px 15px 0 15px;
  }
}

.loading {
  margin: 20px 0;
}
</style>