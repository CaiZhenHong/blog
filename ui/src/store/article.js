import toast from "@/assets/js/toast"
import { get_articles_catlogue, put_articles_catlogue } from '@/api'

export default {

  namespaced: true,

  state: {
      content:'',
      title:'',
      draft: JSON.parse(localStorage.getItem('draft')) || {content:'',title:''},
      saved:true,
      catlogue:[]
  },

  mutations: {
    updateArticle: function(state, {content, title}) {
      content && (state.content = content)
      title && (state.title = title)
      state.saved = false
    },

    updateDraft: function(state) {
      const content = state.content
      const title = state.title
      const draft = {content, title}
      state.draft = draft
      localStorage.setItem('draft', JSON.stringify(draft))
      toast({msg:'保存至草稿成功',type:'succeed'})
    },

    updateCatlogue: function(state, catlogue) {
      state.catlogue = state.catlogue.concat(catlogue)
    }
  },

  actions: {
    getCatlogue: function({commit, state}) {
      if(state.catlogue.length) return Promise.resolve(state.catlogue)
      return get_articles_catlogue().then(({ data }) => {
        commit('updateCatlogue', data)
        return Promise.resolve(data)
      })
    },

    putCatlogue: function({commit, state},newCatlogue ){
      return put_articles_catlogue(newCatlogue).then(() => {
        commit('updateCatlogue', {title: newCatlogue})
        return Promise.resolve(state.catlogue)
      })
    }
  },
}
