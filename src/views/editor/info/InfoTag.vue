 <!--
 * @desc: 文章标签
 * @Date: 2021年6月5日
 -->
<template>
  <div class="tag">
    <div class="title">{{ title }}</div>
    <div class="tag-select">
      <base-select :options="tags" v-model="currentTag" />
    </div>

    <div
      class="iconfont add-tag__button"
      v-if="!tagInputShow"
      @click="showTagInput"
    >
      增加分类
    </div>

    <div class="tag-add" v-else>
      <input
        class="tag-input"
        v-model="newTag"
        type="text"
        name=""
        placeholder="请输入新分类"
      />
      <base-button class="iconfont add-finish" :shade="shade" @click="addTag">
        <div v-if="!isLoadding">&#xe633;</div>
        <base-loader :text="false" v-else></base-loader>
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentTag: '',
      tagInputShow: false,
      isLoadding: false,
      newTag: '',
    };
  },

  props: {
    tags: {
      type: Array,
    },
    title: {
      type: String,
      default: '标题',
    },
  },

  watch: {
    // 当前选中分类发送给父组件
    currentTag: function (value) {
      this.$emit('input', value);
    },

    tags: function () {
      if (this.isLoadding) {
        this.currentTag = this.newTag;
        this.isLoadding = false;
        this.newTag = '';
        this.tagInputShow = false;
      } else {
        this.currentTag = this.tags ? this.tags[0] : '';
      }
    },
  },

  computed: {
    shade: function () {
      return !this.newTag || this.isLoadding;
    },
  },

  methods: {
    // 数据初始化
    init: function () {
      this.currentTag = this.tags ? this.tags[0] : '';
    },

    showTagInput: function () {
      this.tagInputShow = true;
    },

    // 添加分类
    addTag: function () {
      this.$emit('add', this.newTag);
      this.isLoadding = true;
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

.tag {
  width: 100%;
  height: 32px;
  margin: 20px 0;

  display: flex;
  align-items: center;

  .title {
    font-size: 15px;
  }

  .tag-select {
    width: 160px;
    height: 100%;

    margin-left: 20px;
    padding: 0 10px;

    border: 1px solid #c0c0c0;
    border-radius: 2px;

    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      border-color: #9c9c9c;
    }
  }

  .add-tag__button {
    height: 100%;

    margin-left: 20px;
    padding: 7px 10px;

    border-radius: 4px;
    border: 1px solid $bdc;

    font-size: 12px;

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

  .tag-input {
    height: 100%;

    margin-left: 20px;
    padding-left: 10px;

    border: 1px solid #c0c0c0;
    border-radius: 4px;
    outline: none;

    letter-spacing: 1px;
    font-size: 12px;

    animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) both;

    &::placeholder {
      font-size: 12px;
    }

    &:focus {
      border-color: #9c9c9c;
    }
  }

  .tag-add {
    width: 240px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .add-finish {
    width: 45px;
    height: 26px;
    margin-left: 15px;
  }
}

@keyframes flip-horizontal-bottom {
  0% {
    width: 0;
  }
  100% {
    width: 160px;
  }
}
</style>