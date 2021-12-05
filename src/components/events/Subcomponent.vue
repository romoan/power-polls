<template>
  <input
    v-model="internalValue"
    :placeholder="placeholder"
    type="text"
    @input="onInput"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      internalValue: null,
    }
  },
  methods: {
    onInput (event) {
      this.$emit('input', event.srcElement.value)
    },
  },
}
</script>
