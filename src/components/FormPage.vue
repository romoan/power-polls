<template>
  <div class="content-wrapper">
    <div class="title">
      Create your own form
    </div>
    <div>
      <div
        v-for="(type, idx) in formTypes"
        :key="idx"
        class="d-flex justify-between w-50 p-3">
        <div>{{ type.name }}</div>
        <input
          v-if="type.inputToConfig !== undefined"
          v-model="type.inputToConfig"
          type="text"/>
        <div
          class="icon pl-2"
          @click="() => addField(type)">➕</div>
      </div>
      <div class="d-flex justify-between w-50 p-3">
        <div>{{ radioButton.name }}</div>
        <input
          v-model="radioButton.inputToConfig"
          type="text"/>
        <div
          class="icon pl-2"
          @click="addRadioButton">➕</div>
      </div>
    </div>
    <div class="separator"></div>
    <div
      v-for="(field, idx) in formFields"
      :key="idx">
      <!-- EXAMPLE_BAD idx -->
      <component
        :is="field.component"
        :element="field.inputToConfig"
        :elements="field.elements"
        :name="field.name"
        v-model="field.value"/>
    </div>
  </div>
</template>

<script>
import CheckBox from 'frontend/components/Checkbox.vue'
import RadioButton from 'frontend/components/Radiobutton.vue'
import TextArea from 'frontend/components/Textarea.vue'
import TextField from 'frontend/components/Textfield.vue'

export default {
  components: {
    CheckBox,
    RadioButton,
    TextArea,
    TextField
  },
  data () {
    return {
      formTypes: [
        {
          name: 'Text Field',
          component: TextField
        },
        {
          name: 'Text Area',
          component: TextArea
        },
        {
          name: 'Check Box',
          component: CheckBox,
          inputToConfig: ''
        },
      ],
      radioButton: {
        name: 'Radio Button',
        component: RadioButton,
        inputToConfig: '',
        elements: [],
        value: null
      },
      formFields: []
    }
  },
  computed: {
  },
  methods: {
    addField (component) {
      const newComponent = {
        ...component,
        value: null
      }
      this.formFields.push(newComponent)
    },
    addRadioButton () {
      if (this.radioButton.elements.length === 0) {
        this.formFields.push(this.radioButton)
      }
      this.radioButton.elements.push(this.radioButton.inputToConfig)
    },
  }
}
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
