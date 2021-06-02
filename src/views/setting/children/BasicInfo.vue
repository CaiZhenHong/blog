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
  <div class="basic-info iconfont" @keyup.enter="updateBasicInfo">
    <div class="left">
      <div
        class="profile-item"
        v-for="({ type, icon, key }, index) in profile"
        :key="index"
      >
        <div class="profile-name">{{ type }}</div>
        <base-input class="profile-input" v-model="value[key]">
          <template #pre>
            <div :class="icon"></div>
          </template>
        </base-input>
      </div>

      <div>
        <base-button
          class="profile-button"
          @click="updateBasicInfo"
          :shade="loaderShow"
        >
          <base-loader v-if="loaderShow"></base-loader>
          <span v-else>更新资料</span>
        </base-button>
      </div>
    </div>

    <div class="right">
      <img class="photo" :src="value.photo" alt="" />
      <div class="photo-shade">
        <base-button class="photo-up" type="grey" @click="uploadImg">
          <input
            class="photo-input"
            ref="uploadImg"
            type="file"
            @change="upload"
            name=""
            id=""
          />
          上传照片
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseInput, BaseButton, BaseLoader } from '@/components/base';
import { put_user_basic } from '@/services/user';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('user');
import { UPDATE_USER_INFO, SHOW_MSG } from '@/store/type';

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseLoader,
  },

  data: function () {
    return {
      loaderShow: false,

      value: {
        name: '',
        bio: '',
        occupation: '',
        city: '',
        edc: '',
        photo: '',
      },

      profile: [
        {
          type: '昵称',
          icon: 'icon__name',
          key: 'name',
        },
        {
          type: '简介',
          icon: 'icon__bio',
          key: 'bio',
        },
        {
          type: ' 当前职业',
          icon: 'icon__occupation',
          key: 'occupation',
        },
        {
          type: '居住的城市',
          icon: 'icon__address',
          key: 'city',
        },
        {
          type: '教育背景',
          icon: 'icon__school',
          key: 'edc',
        },
      ],
    };
  },

  computed: {
    ...mapState(['name', 'bio', 'photo', 'edc', 'occupation', 'city']),

    store: function () {
      return {
        name: this.name,
        bio: this.bio,
        occupation: this.occupation,
        city: this.city,
        edc: this.edc,
        photo: this.photo,
      };
    },
  },

  beforeMount: function () {
    this.$nextTick(() => {
      for (const key in this.store) {
        this.value[key] = this.store[key];
      }
    });
  },

  watch: {
    name: function () {
      for (const key in this.store) {
        this.value[key] = this.store[key];
      }
    },
  },

  methods: {
    ...mapMutations([UPDATE_USER_INFO]),

    updateBasicInfo: function () {
      let update = {};

      for (const key in this.store) {
        if (!(this.value[key] === this.store[key])) {
          update[key] = this.value[key];
        }
      }

      this.loaderShow = true;
      put_user_basic(update).then(() => {
        this.loaderShow = false;
        this[UPDATE_USER_INFO](update);
        this.$store.commit(SHOW_MSG, { text: '修改信息成功', type: 'succeed' });
      });
    },

    uploadImg: function () {
      this.$refs.uploadImg.click();
    },
    upload: function (e) {
      let self = this;
      let file = e.target.files[0];
      let read = new FileReader();
      read.readAsDataURL(file);
      read.onload = function (e) {
        self.value.photo = e.target.result;
      };
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
  border: 1px solid $bdc;
  .photo-shade {
    top: 0;
    width: 200px;
    height: 200px;
    background: rgba(53, 53, 53, 0.205);
    position: absolute;
  }
  .photo {
    margin: 0;
    width: 200px;
    height: 200px;

    vertical-align: middle;
  }
  .photo-input {
    display: none;
  }
  .photo-up {
    height: 32px;
    width: 80px;
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
}
</style>