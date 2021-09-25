<template>
  <div class="flex flex-column fit-height">
    <div class="h64 fit-width fit-height flex flex-items-center pl30 pr30 bg-white_1 bdb">
      <TopBarLogo class="mr20"/>
      <input class="f28 bdl pl20 fit-height flex-1" type="text" placeholder="输入文章标题..." v-model="title">
      <my-button class="theme_1 mr30" @click="onSaveDraft">保存草稿</my-button>
      <my-button primary class="mr30" @click="onPublish">发布</my-button>
      <div class="gray_1 f14 mr10">{{saved?'已保存':'未保存'}}</div>
      <TopBarProfile class="mr50" />
    </div>
    <div class="h35 bg-gray_2 fit-width bdb"></div>
    <div class="flex-1 flex">
      <ArticleEditorArea class="flex-1 bg-gray_4 bdr page-padding f14" />
      <ArticleEditorView  class="flex-1 bg-white_1 page-padding" />
    </div>
      <ArticlePublishView :show='publishShow' />
  </div>
</template>

<script>
import ArticleEditorArea from './ArticleEditorArea.vue'
import ArticleEditorView from './ArticleEditorView.vue'
import ArticlePublishView from './ArticlePublish.vue'

export default {
  components:{ArticleEditorArea,ArticleEditorView,ArticlePublishView},

  data: function(){
    return { publishShow:0, title:''}
  },

  methods: {
    onSaveDraft: function(){
      this.$store.commit('article/updateDraft')
      this.$store.state.article.saved = true
    },
    onPublish: function () {
      if(!this.title) return this.$toast({msg:'请输入标题',type:'warnning'},)
      if(!this.$store.state.article.content) return this.$toast({msg:'内容不能为空',type:'warnning'})
      this.publishShow=!this.publishShow
    }
  },

  computed: {
    saved: function(){return this.$store.state.article.saved},
  },

  watch:{
      title:function(title){
          this.$store.commit('article/updateArticle',{title} )
      },
  },

  mounted: function(){
    document.onkeydown = (e) => {
      const key = window.event.keyCode ? window.event.keyCode : window.event.which
      key === 83 && e.ctrlKey && (this.onSaveDraft(),e.preventDefault())
    }
    this.title = this.$store.state.article.draft.title
  },

  destroyed: function(){
    document.onkeydown = null
  }
}
</script>

<style lang="scss" scoped>
.editor{
  letter-spacing: 1px;
}
#toolbar {
  ::v-deep .w-e-toolbar {
    background-color: $gray_4;
    height: 32px;
    & .w-e-menu i {  color: $black_1; font-size: 13px;height: 32px;line-height: 32px;}
    & .w-e-menu { 
      height: 32px;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
       &:hover{ background-color: $gray_3; }
    }
  }
}

#edit-area {
  ::v-deep .w-e-text-container {
    padding: 0 24px;
  }
}
</style>
