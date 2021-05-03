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
          @click="testFunction">➕</div>
      </div>
    </div>
    <div
      v-if="formFields.length"
      class="separator"/>
    <div
      v-for="(field, idx) in formFields"
      :key="idx"
      class="d-flex justify-between w-50 p-3">
      <!-- EXAMPLE_BAD idx -->
      <component
        :is="field.component"
        :element="field.inputToConfig"
        :elements="field.elements"
        :name="field.name"
        v-model="field.value"/>
        <div
          class="icon pl-2"
          @click="() => removeInput(idx)">✖</div>
    </div>
    <div
      v-if="output.length" 
      class="separator"/>
    <div v-html="output"/>
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
      formFields: [],
      a: Array(10000000)
    }
  },
  computed: {
    output () {
      return this.formFields.map(
        f => f.value
      ).filter(f => f).join('<br/>')
    }
  },
  methods: {
    addField (component) {
      if (!this.checkInputToConfig(component)) return
      const newComponent = {
        ...component,
        value: null
      }
      this.formFields.push(newComponent)
      this.cleanInputFields()
    },
    addRadioButton () {
      if (!this.checkInputToConfig(this.radioButton)) return
      if (this.radioButton.elements.length === 0) {
        this.formFields.push(this.radioButton)
      }
      this.radioButton.elements.push(this.radioButton.inputToConfig)
      this.cleanInputFields()
    },
    cleanInputFields () {
      this.radioButton.inputToConfig = ''
      this.formTypes.find(e => e.inputToConfig !== undefined).inputToConfig = ''
    },
    checkInputToConfig (component) {
      if (component.inputToConfig === '') {
        alert('You have to enter a name')
        return false
      }
      return true
    },
    removeInput (idx) {
      this.formFields.splice(idx, 1)
    },
    testFunction () {
      const b = Array(10000000)
      this.a.fill(2)
      b.fill(2)
      const t0 = performance.now()

      // this.a.reduce((x,y) => x * y, 2)
      b.reduce((x,y) => x * y, 2)

      const t1 = performance.now()
      console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
}
</style>
