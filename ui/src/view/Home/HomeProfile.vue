<template>
  <div class="flex-1 ml10 mt25 flex flex-column flex-items-center">
    <div class="fit-width bg-white border radius flex flex-column flex-items-center">
      <div class="fit-width bg h130"></div>
      <img class="photo bg-white" src alt />
      <div class="mt30 mb15 fw500 f18">{{ user.name }}</div>
      <div class="blue f16">{{ user.bio }}</div>
      <hr class="fit-width cut-line mt30 mb15" />
      <ul class="ml25 fit-width flex flex-items-start unselected">
        <li class="mr20" v-for="({ name, img }, index) in links" :key="index">
          <img class="mb10 link-img" src alt />
          <div class="f12">{{ name }}</div>
        </li>
      </ul>
      <hr class="fit-width cut-line mb30" />
      <my-button class="f14 focus-me">关注我</my-button>
      <div iconfont class="fit-width pl25 mt30 f18 gray">
        &#xe603;
        <span class="f14 ml5">{{ user.address }}</span>
      </div>
      <div iconfont class="fit-width pl25 mt20 mb20 gray">
        &#xe650;
        <span class="f14 ml5">{{ user.job }}</span>
      </div>
    </div>

    <div class="fit-width mt20 bg-white border unselected">
      <ul class="article-info flex flex-between">
        <li class="f12 flex flex-column flex-items-center flex-1" :class="{ border_l: index }" v-for="({ today, yesterday }, index) in user.read_info" :key="index">
          <div>今日阅读数</div>
          <div class="f18 black mt15 mb15">{{ today }}</div>
          <div>
            <span>昨日数据</span>
            <span class="f13 ml5 black">{{ yesterday }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { name: 'GitHub', img: '' },
        { name: 'WeChat', img: '' }
      ],
      count: [
        { name: '今日阅读数', today: 12, yestoday: 13 },
        { name: '今日赞同数', today: 2, yestoday: 25 }
      ]
    }
  },
  computed: {
    user: function () {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss" scoped>
.h130 {
  height: 130px;
}
.photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-top: -80px;
  background: forestgreen;
}
.link-img {
  width: 40px;
  height: 40px;
  background: forestgreen;
  border-radius: 50%;
}
.article-info {
  box-sizing: border-box;
  margin: 17px;
  padding: 14px;
  background-color: rgba(133, 144, 166, 0.05);
  color: rgb(133, 144, 166);
}
.focus-me {
  width: 220px;
  text-align: center;
}
</style>
