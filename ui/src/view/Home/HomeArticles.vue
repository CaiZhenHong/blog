<template>
  <div class>
    <div class="article mt25 border bg-white">
      <ul>
        <li class="border_b pb25 pt20 item" v-for="({ title, content, img, comment, like, liked }, index) in articleList" :key="index">
          <div class="f18 black blod">{{ title }}</div>
          <div>
            <!-- <img src="" alt=""> -->
            <p class="mt15 f16">{{ content }}</p>
          </div>
          <div class="flex flex-items-center mt10 f14">
            <div class="pl10 pr10 like theme" :class="{ liked: isLike }" @click="isLike = !isLike">赞同 {{ like }}</div>
            <div iconfont class="dislike ml5 theme">&#xe602;</div>
            <div button iconfont class="ml25 blue">
              <span class="f16">&#xe626;</span>
              <span class="f14">{{ comment }} 条评论</span>
            </div>
            <div button iconfont class="ml25 blue">
              <span class="f16">&#xe600;</span>
              <span class="f14">分享</span>
            </div>
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
      articleList: [
        { title: '标题', content: 'sdsadsad', img: '', comment: 15, like: 2, liked: true },
        { title: '标题', content: 'sdsadsad', img: '', comment: 15, like: 2, liked: true }
      ],
      isLike: true
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  width: 680px;
  padding: 20px;
  border-radius: 3px;
  letter-spacing: 0.5px;
}
.item {
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border: none;
    padding-bottom: 0;
  }
}
.like {
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  background-color: #379bff52;
  cursor: pointer;
  &::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 5px;
    border-left: 7px solid transparent;
    border-top: 7px solid transparent;
    border-bottom: 10px solid #379bff;
    border-right: 7px solid transparent;
    border-radius: 3px;
  }
  &:hover {
    background-color: #379bff67;
  }
}
.liked {
  color: #fff;
  background-color: #379bff;
  cursor: pointer;
  &::before {
    border-bottom-color: #fff;
  }
  &:hover {
    background-color: #379bff;
  }
}
.dislike {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #379bff52;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #379bff67;
  }
}
.disliked {
  color: #fff;
  background-color: #379bff;
}
</style>