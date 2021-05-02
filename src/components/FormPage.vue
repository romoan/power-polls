<template>
  <div class="content-wrapper">
    <div class="title">
      Create your own form
    </div>
    <div>
      <div
        v-for="(type, idx) in formTypes"
        :key="idx"
        class="type-line d-flex justify-between w-33">
        <div class="">{{ type.name }}</div>
        <div
          class="icon pl-2"
          @click="() => addField(type)">➕</div>
      </div>
    </div>
    <div class="separator"></div>
    <div
      v-for="(field, idx) in formFields"
      :key="idx">
      <!-- EXAMPLE_BAD -->
      <component
        :is="field.component"
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
          component: CheckBox
        },
        {
          name: 'Radio Button',
          component: RadioButton
        },
      ],
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
    }
  }
}
</script>

<style lang="scss" scoped>
.type-line {
  padding: 0.7rem;
}
.icon {
  cursor: pointer;
}
</style>
