<template>
  <template v-if="visible">
    <div class="g-dialog-overlay" @click="overlayClose"></div>
    <div class="g-dialog-wrapper">
      <div class="g-dialog">
        <header>标题
          <span class="g-dialog-close" @click="closeDialog"></span>
        </header>
        <main>
          <p>第一行</p>
          <p>第二行</p>
        </main>
        <footer>
          <Button level="main" @click="ok">yes</Button>
          <Button @click="cancel">Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import './g.scss'
import Button from '../lib/Button.vue'

export default {
  name: "Dialog",
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    onClickOverlay: {
      type: [Boolean, String],
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit('update:visible', false)
    }
    const overlayClose = () => {
      if (props.onClickOverlay) {
        closeDialog()
      }
    }
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        closeDialog()
      }
    }
    const cancel = () => {
      if (props.cancel && props.cancel() !== false) {
        closeDialog()
      }
    }
    return {closeDialog, overlayClose, ok, cancel}
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.g-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    font-size: 20px;
  }
  main {
    padding: 12px 16px;
  }
  footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px; height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>