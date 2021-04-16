import { getColumn } from '@/services/column'

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    upDateColumn() {
      getColumn({
        user: 'czh'
      }).then(v => {
        console.log(v.columnList);
      });
    }
  },
}
