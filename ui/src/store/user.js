import get_user from '@/api'

export default {
    namespaced: false,
    state: {},
    mutations: {
        updateUserState: (state, payload) => {
            Object.assign(state, payload)
            localStorage.user = JSON.stringify(payload)
        }
    },
    actions: {
        getUserInfo: async ({ commit }, inited) => {
            let userInfo = JSON.parse(localStorage.getItem('user'))
            if (!userInfo) {
                const { data } = await get_user()
                userInfo = data
            }
            commit('updateUserState', userInfo)
        }
    }
}
