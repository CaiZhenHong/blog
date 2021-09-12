<template>
  <div class="f13 gray unselected bg-white">

    <div class="h60 border_b flex flex-center">
      <div class="w1024 flex flex-between">
        <div class="fit-height flex flex-items-center">
          <h1 class="bg fit-height w150"></h1>
          <my-input class="h35 search" />
          <ul class="fit-height flex">
            <li button class="fit-height flex flex-center flex-items-center pl15 pr15" v-for="({name}, index) in linkList" :key="index">{{ $t(name) }}</li>
          </ul>
        </div>

        <div class="fit-height flex flex-items-center">
          <my-button class="mr30" v-if="!login" placeholder="a">登录</my-button>
          <div v-if="login" button class="ml20 flex flex-items-center" @click="newArticle">
            <div iconfont class="f18 theme" v-html="newBtn.icon">&#xe62f;</div>
            <div class="ml5">{{ $t(newBtn.name) }}</div>
          </div>
          <div button class="ml20 flex flex-items-center" @click="changeLang">
            <div iconfont class="f18 theme" v-html="langBtn.icon">&#xe62f;</div>
            <div class="ml5">{{ $t(langBtn.name) }}</div>
          </div>
          <div v-if="login"><img class="ml25 border photo" src="" alt="头像"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import model from '@/assets/model/topbar'
import i18n from '@/i18n'

export default {
  data: model,
  methods: {
    changeLang: function () {
      this.lang = this.lang == 'zh' ? 'en' : 'zh'
      localStorage.lang = this.lang
    },

    newArticle: function () {}
  },

  watch: {
    lang: {
      handler: function (lang) {
        i18n.locale = lang
        this.langBtn.icon = lang == 'en' ? '&#xe64d' : '&#xe64e'
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.photo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.search {
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 200px;
  margin-right: 25px;
  &:focus {
    width: 290px;
  }
}
</style>
