 <!--
 * @desc: 文章目录
 * @author czh996.top
 * @Date: 2021年5月9日
 -->
<template>
  <div class="catalog">
    <div class="left">
      <profile>
        <base-button
          class="edit-profile"
          :to="{ name: 'user-setting-basic-info' }"
        >
          编辑资料
        </base-button>
      </profile>
    </div>

    <div class="right">
      <div class="tab">
        <div
          class="tab-item"
          v-for="({ classI }, key) in articles"
          :key="key"
          @click="tabItemClick(key)"
          :class="{ 'tab-item_active': key === tabItemIsActive }"
        >
          {{ classI }}
        </div>
      </div>

      <div class="tab-view">
        <div class="name">目录</div>
        <div class="content">
          <div class="classI">第一章 JavaScript 的历史</div>
          <div class="classII">
            <div class="classII-left">1.1 JavaScript 前世今生</div>
            <div class="classII-line"></div>
            <div class="classII-right">1</div>
          </div>
          <div class="classII">
            <div class="classII-left">1.2 网景公司和微软公司</div>
            <div class="classII-line"></div>
            <div class="classII-right">8</div>
          </div>
          <div class="classII">
            <div class="classII-left">1.3 EcmaScript 的诞生</div>
            <div class="classII-line"></div>
            <div class="classII-right">15</div>
          </div>
          <div class="classI">第二章 基础语法</div>
          <div class="classII">
            <div class="classII-left">1.1 基本类型</div>
            <div class="classII-line"></div>
            <div class="classII-right">18</div>
          </div>
          <div class="classII">
            <div class="classII-left">1.2 引用类型</div>
            <div class="classII-line"></div>
            <div class="classII-right">25</div>
          </div>
          <div class="classII">
            <div class="classII-left">1.3 操作符</div>
            <div class="classII-line"></div>
            <div class="classII-right">29</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/base';
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('user');
export default {
  components: {
    BaseButton,
  },

  data: function () {
    return {
      tabItemIsActive: 0,
    };
  },

  methods: {
    tabItemClick: function (index) {
      this.tabItemIsActive = index;
    },
  },

  computed: {
    ...mapState(['articles']),
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.catalog {
  display: flex;
  width: 100%;
}

.left {
  width: 325px;
  .edit-profile {
    width: 250px;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
}

.right {
  @include _box();
  flex: 1;
  margin-left: 50px;
  display: flex;
  .tab {
    height: 100%;
    border-right: 1px solid $bdc;
  }
  .tab-item {
    color: #646464;
    :hover {
      color: #333;
    }
    width: 280px;
    height: 54px;
    line-height: 54px;
    padding-left: 40px;
    font-size: 16px;
    border-bottom: 1px solid $bdc;
    border-left: 2px solid #00000000;
    cursor: pointer;
  }
  .tab-item_active {
    color: #000;
    border-left-color: $themec;
    background-color: #c9c9c905;
  }

  .tab-view {
    flex: 1;
    padding: 40px 80px;
    letter-spacing: 1px;
    .name {
      text-align: center;
      font-size: 18px;
    }
    .content {
      margin-top: 40px;
    }
    .classI {
      margin-bottom: 20px;
      font-size: 16px;
      margin-top: 35px;
    }
    .classII {
      width: 100%;
      margin-left: 28px;
      margin-bottom: 15px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      color: rgb(99, 99, 99);
    }
    .classII-left {
      padding-right: 40px;
      @include _hover(#000000);
    }
    .classII-right {
      padding-left: 30px;
    }
    .classII-line {
      height: 9px;
      flex: 1;
      padding-top: -10px;
      border-bottom: 1px dashed #c5c5c5;
    }
  }
}
</style>