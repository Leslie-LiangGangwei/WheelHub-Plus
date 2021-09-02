<demo>基本用法</demo>

<template>
  <Button @click="showToast">消息提示</Button>
</template>

<script lang="ts">
// @ts-ignore
import {Button, toastPlugin} from "wheelhub-plus"

export default {
  name: "ToastNormal",
  components: { Button},
  setup(){
    const showToast = () => {
      toastPlugin({
        message: '只是一条消息提示',
      })
    }
    return {showToast}
  }
}
</script>
