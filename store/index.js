
export const state = () => ({
  
  userId: '',
})


export const mutations = {
  ...require('./info').mutations,
  update(state, payload) {
    Object.keys(payload).forEach(k => {
      state[k] = payload[k]
    })
  }
}


export const actions = {
  ...require('./info').actions,
}
