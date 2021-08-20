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
  <p>---</p>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button/Button.vue'
import { openDialog } from "../lib/openDialog";

export default {
  name: "DialogDoc",
  components: {Button, Dialog},
  setup() {
    const dialogStatus = ref<Boolean>(false)
    const onClickOverlay = ref<Boolean>(false)
    const okFunction = () => {}
    const cancelFunction = () => {}
    const toggle = () => {
      dialogStatus.value = !dialogStatus.value
    }
    // 使用 openDialog 方法 render Dialog
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: 'Hello World',
        ok: ()=>{},
        cancel: ()=>{},
      })
    }
    return {dialogStatus, onClickOverlay, toggle, okFunction, cancelFunction, showDialog}
  }
}
</script>

<style scoped lang="scss">

</style>