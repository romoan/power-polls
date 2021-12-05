<template>
  <div>
    <Subcomponent
      v-model="textValue"
      placeholder="Introduzca su texto aquí"
    />
    <div @click="onclick">Pulsa aquí</div>
  </div>
</template>

<script>
import Subcomponent from 'frontend/components/events/Subcomponent.vue'
import { eventBus } from 'frontend/communications/eventBus.js'

export default ({
  components: {
    Subcomponent,
  },
  data () {
    return {
      textValue: null,
    }
  },
  methods:
  {
    onclick () {
      const dialog = {
        open: true,
        title: 'Ventana Emergente',
        body: "Aquí es donde va el texto explicativo",
        firstButton: { text: 'Confirmar'},
        secondButton: { text: 'Cancelar'},
        onConfirmCallback: () => {
          console.log('CONFIRMAR')
        },
      }
      eventBus.openDialog(dialog)
    },
  },
})
</script>

