 <!--
 * @desc: 文章操作及信息
 * @author czh996.top
 * @Date: 2021年4月7日
 * @props: [Obejct] ations - 用于渲染操作列表的数据
 * @props: [Boolean] shareBtnShow - 控制分享按钮隐藏显示
 * @example
 *  <article-item-comment-button :actions="actions" :shareBtnShow="shareBtnShow"></article-item-comment-button>
 -->
<template>
  <div class="basic-info iconfont">
    <div class="left">
      <div
        class="profile-item"
        v-for="({ name, icon }, key) in profile"
        :key="key"
      >
        <div class="profile-name">{{ name }}</div>
        <base-input class="profile-input" v-model="value[key]">
          <template #pre>
            <div :class="icon"></div>
          </template>
        </base-input>
      </div>

      <div>
        <base-button class="profile-button" @click="updateBasicInfo">
          更新资料
        </base-button>
      </div>
    </div>

    <div class="right">
      <div class="photo-shade">
        <img class="photo" :src="photo" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseInput, BaseButton } from '@/components/base';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('user');
import { UPDATE_USER } from '@/store/type';

export default {
  components: {
    BaseInput,
    BaseButton,
  },

  data: function () {
    return {
      profile: [
        {
          name: '昵称',
          icon: 'icon__name',
        },
        {
          name: '简介',
          icon: 'icon__bio',
        },
        {
          name: ' 当前职业',
          icon: 'icon__occupation',
        },
        {
          name: '居住的城市',
          icon: 'icon__address',
        },
        {
          name: '教育背景',
          icon: 'icon__school',
        },
      ],
    };
  },

  computed: {
    ...mapState(['name', 'info', 'photo']),

    value: function () {
      let { bio, occupation, city, edc } = this.info;
      return [this.name, bio, occupation, city, edc, this.photo];
    },
  },

  methods: {
    ...mapMutations([UPDATE_USER]),
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.basic-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left {
  flex: 1;
  letter-spacing: 1px;
  .profile-item {
    margin-bottom: 45px;
  }
  .profile-name {
    padding-left: 2px;
    letter-spacing: 2px;
    font-size: 14px;
    margin-bottom: 15px;
  }
  .profile-input {
    height: 35px;
  }
  .profile-button {
    margin-top: 100px;
    height: 35px;
    width: 80px;
  }
}

.right {
  position: relative;
  margin-left: 75px;
  width: 200px;
  height: 200px;
  .photo-shade {
    z-index: 10;
    top: 0;
    width: 200px;
    height: 200px;
    background: #000;
    position: absolute;
  }
  .photo {
    width: 200px;
    border: 1px solid $bdc;
    vertical-align: middle;
  }
}
</style>