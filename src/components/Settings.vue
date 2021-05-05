<template>
  <div>
    {{ settings.body }}
    <br>
    {{ getModulePermissionsByField('status') }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      settings: null,
    }
  },
  computed: {
    ...mapGetters([
      'getModulePermissions',
      'getModulePermissionsByField',
    ]),
  },
  created () {
    this.fetchModulePermissions().then((result) => {
      this.settings = result
    })
  },
  methods: {
    ...mapActions([
      'fetchModulePermissions',
    ]),
  },
}
</script>
