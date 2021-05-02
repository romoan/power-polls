<template>
  <div class="d-flex justify-between w-50">
    <input
      v-model="internalValue"
      :id="cleanString(element)"
      type="checkbox"/>
    <label :for="cleanString(element)">{{ element }}</label>
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
    },
    elementValue: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      internalValue: null
    }
  },
  methods: {
    // EXAMPLE_BAD
    cleanString (string) {
      return string.replace(/[ |&;$%@"<>()+,]/g, "")
    }
  },
  watch: {
    internalValue (internalValue) {
      this.$emit('input', internalValue)
    }
  }
}
</script>
