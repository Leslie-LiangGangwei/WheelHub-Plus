<template>
  <Button @click="toggle">Dialog</Button>
  <Dialog
      v-model:visible="dialogStatus"
      :onClickOverlay="false"
      :ok="okFunction"
      :cancel="cancelFunction"
  >
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

export default {
  name: "DialogDoc",
  components: {Button, Dialog},
  setup() {
    const dialogStatus = ref(false)
    const onClickOverlay = ref(false)
    const okFunction = () => {}
    const cancelFunction = () => {}
    const toggle = () => {
      dialogStatus.value = !dialogStatus.value
    }
    return {dialogStatus, onClickOverlay, toggle, okFunction, cancelFunction}
  }
}
</script>

<style scoped lang="scss">

</style>