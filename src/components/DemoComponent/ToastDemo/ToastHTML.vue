<demo>使用 HTML 片段</demo>

<template>
  <Button @click="showToast">使用 HTML 片段</Button>
</template>

<script lang="ts">
// @ts-ignore
import {Button, toastPlugin} from "wheelhub-plus"

export default {
  name: "ToastHTML",
  components: { Button},
  setup(){
    const showToast = () => {
      toastPlugin({
        message: '<strong>我是 HTML 片段</strong>',
      })
    }
    return {showToast}
  }
}
</script>
