import Vue from 'vue'

const MOCK_URL = 'https://jsonplaceholder.typicode.com/posts/1'

const stateObj = {
  modulePermissions: [],
}

const getters = {
  getModulePermissions (state) {
    return state.modulePermissions
  },
  getModulePermissionsByType: (state) => (type, include_children=false) => {
    return state.modulePermissions.filter(perm => (!perm.parent || include_children) && perm.module_type === type)
  },
  getModulePermissionsByParent: (state) => (parent) => {
    return state.modulePermissions.filter(perm => perm.parent === parent)
  },
}

const mutations = {
  setModulePermissions (state, permissions) {
    state.modulePermissions = permissions
  },
}

const actions = {
  fetchModulePermissions ({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.http.get(MOCK_URL)
        .then((modulePermissions) => {
          commit('setModulePermissions', modulePermissions)
          resolve(modulePermissions)
        })
        .catch(e => reject(e))
    })
  },
}

export default {
  state: stateObj,
  getters,
  mutations,
  actions,
}
