<template>
  <div
    v-if="dialog.open"
    class="mlui-core-dialog">
    <div class="mlui-core-dialog-overlay"/>
    <div class="mlui-core-dialog-pop-up p-5">
      <div class="mlui-core-dialog-pop-up-header p-2">
        <div :class="'mlui-core-dialog-title' + dialog.template">
          {{ data.title }}
        </div>
      </div>
      <div class="separator" />
      <div
        class="mlui-core-dialog-pop-up-body p-4"
        v-html="dialog.body"/>
      <div class="separator" />
      <div class="mlui-core-dialog-pop-up-footer p-3">
        <button
          v-if="dialog.secondButton !== ''"
          class="m-2"
          type="button"
          @click="onReject"
        >
          {{ dialog.secondButton.text }}
        </button>
        <button
          v-if="dialog.firstButton !== ''"
          class="m-2"
          type="button"
          @click="onConfirm"
        >
          {{ dialog.firstButton.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      dialog: this.data,
    }
  },
  watch: {
    data (newValue) {
      this.dialog = newValue
    },
  },
  methods: {
    onConfirm () {
      this.dialog.open = false
      if (this.dialog.onConfirmCallback) this.dialog.onConfirmCallback(this.dialog.payload)
    },
    onReject () {
      this.dialog.open = false
      if (this.dialog.onRejectCallback) this.dialog.onRejectCallback(this.dialog.payload)
    },
  },
}
</script>

<style lang="scss" scope>
@media only screen and (max-device-width: 768px) {
  .mlui-core-dialog .mlui-core-dialog-pop-up {
    width: 80% !important;
    min-height: 200px;
  }
}

.mlui-core-dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1041;
  display: flex;
  align-items: center;
  justify-content: center;
  border: gray 1px solid;

  .mlui-core-dialog-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background-color: #29343a;
  }

  .mlui-core-dialog-pop-up {
    background: #fff;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .mlui-core-dialog-pop-up-header {
      display: flex;
      font-size: 1.5rem;

      .mlui-core-dialog-icon {
        margin-right: 0.65rem;

        &.mlui-dialog-info {
          color: blue;
        }

        &.mlui-dialog-warning, &.mlui-dialog-delete {
          color: red;
        }
      }
    }

    .mlui-core-dialog-pop-up-body {
      font-size: 1rem;
    }

    .mlui-core-dialog-pop-up-footer {
      display: flex;
      justify-content: flex-end;
      font-size: 1rem;

      .mlui-core-button-container {
        width: auto;
      }

      .mlui-core-button-container + .mlui-core-button-container {
        margin-left: 0.65rem;
      }
    }
  }
  .separator {
    width: inherit;
    color: gray;
  }
}
</style>
