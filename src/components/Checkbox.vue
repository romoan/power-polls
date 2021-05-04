<template>
  <div class="d-flex justify-between w-50">
    <input
      v-model="internalValue"
      :id="cleanElementString"
      type="checkbox"/>
    <label :for="cleanElementString">{{ element }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    element: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      internalValue: null
    }
  },
  computed: {
    cleanElementString () {
      return this.element.replace(/[ |&;$%@"<>()+,]/g, "")
    }
  },
  watch: {
    internalValue () {
      // EXAMPLE_BAD this.internalValue
      this.$emit('input', this.internalValue ? this.element : null)
    }
  }
}
</script>
