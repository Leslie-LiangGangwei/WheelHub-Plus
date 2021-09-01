<demo>基本</demo>

<template>
  <Button @click="toggle" level="main">Button</Button>
  <Dialog
      v-model:visible="dialogStatus"
      :onClickOverlay="isOnClickOverlay"
      :ok="okFunction"
      :cancel="cancelFunction"
  >
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hi</strong>
      <div>Hello World</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref} from "vue";
// @ts-ignore
import {Button, Dialog} from "wheelhub-plus"

export default {
  name: "DialogNormal",
  components: {Button, Dialog},
  setup() {
    const dialogStatus = ref(false)
    const isOnClickOverlay = ref(true)
    const okFunction = () => {}
    const cancelFunction = () => {}
    const toggle = () => {
      dialogStatus.value = !dialogStatus.value
    }
    return {toggle, dialogStatus, isOnClickOverlay, okFunction, cancelFunction}
  }
}
</script>