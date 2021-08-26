<demo>使用 HTML 片段</demo>

<template>
  <Button @click="showToast">使用 HTML 片段</Button>
</template>

<script lang="ts">
import {toastPlugin} from '../../../lib/Toast/toastPlugin.ts'
import Button from '../../../lib/Button/Button.vue'

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
