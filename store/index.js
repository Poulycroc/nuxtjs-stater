const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

const actions = {
  nuxtClientInit() {
    //   if (!getters['auth/loggedIn']) return
    //   dispatch('companies/fetchCompany')
    //   dispatch('companies/getAuthCompanies')
  },
}

export default {
  getters,
  actions,
}
