import Vue from 'vue'

export const eventBus = new Vue({
  methods: {
    openDialog (payload) {
      this.$emit('openDialog', payload)
    },
  },
})
