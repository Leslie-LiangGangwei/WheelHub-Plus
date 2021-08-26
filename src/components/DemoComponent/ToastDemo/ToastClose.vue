<demo>可关闭</demo>

<template>
  <Button @click="showToast">消息提示</Button>
</template>

<script lang="ts">
import {toastPlugin} from '../../../lib/Toast/toastPlugin.ts'
import Button from '../../../lib/Button/Button.vue'

export default {
  name: "ToastNormal",
  components: { Button},
  setup(){
    const showToast = () => {
      toastPlugin({
        message: '只是一条消息提示',
        autoClose: false,
        showClose: true
      })
    }
    return {showToast}
  }
}
</script>
