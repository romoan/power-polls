<template>
  <div>
    <router-view />
    <Dialog :data="dialog" />
  </div>
</template>

<script>
import Dialog from 'frontend/components/Dialog.vue'
import { eventBus } from 'frontend/communications/eventBus.js'

export default {
  components: {
    Dialog,
  },
  data () {
    return {
      dialog: {
        open: false,
        title: '',
        body: '',
        firstButton: '',
        secondButton: '',
        onConfirmCallback: null,
        onRejectCallback: null,
      },
    }
  },
  created () {
    eventBus.$on('openDialog', (state) => {
      this.dialog = state
    })
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
