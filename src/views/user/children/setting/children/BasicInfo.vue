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
        v-for="({ name, icon, color }, key) in profileList"
        :key="key"
      >
        <div class="profile-name">{{ name }}</div>
        <base-input class="profile-input" v-model="profileInput[key]">
          <template #pre>
            <div v-if="!color" v-html="icon"></div>
            <base-select
              class="link-select"
              :color="color"
              v-else
            ></base-select>
          </template>
        </base-input>
      </div>

      <div>
        <base-button class="profile-button">更新资料</base-button>
      </div>
    </div>

    <div class="right">
      <div class="photo-shade">
        <img
          class="photo"
          src="http://resource.czh996.top/default/photo.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseInput, BaseButton, BaseSelect } from '@/components/base';

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseSelect,
  },

  data: function () {
    return {
      profileInput: ['', '', '', '', '', '', ''],
      profileList: [
        {
          name: '昵称',
          icon: '&#xe60a;',
        },
        {
          name: '性别',
          icon: '&#xe63e;',
        },
        {
          name: '一句话描述你自己',
          icon: '&#xe6df;',
        },
        {
          name: ' 当前职业',
          icon: '&#xe661;',
        },
        {
          name: '居住的城市',
          icon: '&#xe610;',
        },
        {
          name: '教育背景',
          icon: '&#xe61e;',
        },
        {
          name: '外链',
          icon: '&#xe600;',
          select: true,
          color: '#181617',
        },
      ],
    };
  },

  watch: {
    profileInput: function (v) {
      console.log(v);
    },
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
    margin-bottom: 25px;
  }
  .profile-name {
    padding-left: 2px;
    letter-spacing: 2px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .profile-input {
    height: 35px;
  }
  .profile-button {
    margin-top: 160px;
    height: 35px;
    width: 80px;
  }

  .link-select {
    padding-right: 5px;
    height: 100%;
    line-height: 35px;
    font-size: 12px;
    border-right: 1px solid $bdc;
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