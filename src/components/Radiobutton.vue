<template>
  <div>
    <div 
      v-for="(element, idx) in elements"
      :key="idx"
      class="d-flex justify-between w-50">
      <input
        v-model="internalValue"
        :id="cleanString(element)"
        :value="element"
        type="radio"/>
      <label :for="cleanString(element)">{{ element }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    elements: {
      type: Array
    }
  },
  data () {
    return {
      internalValue: null
    }
  },
  methods: {
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
