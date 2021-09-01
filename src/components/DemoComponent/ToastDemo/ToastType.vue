<demo>不同状态</demo>

<template>
  <Button @click="showSuccessToast">成功</Button>
  <Button @click="showWarningToast">警告</Button>
  <Button @click="showToast">消息</Button>
  <Button @click="showErrorToast">错误</Button>
</template>

<script lang="ts">
// @ts-ignore
import {Button, toastPlugin} from "wheelhub-plus"

export default {
  name: "ToastType",
  components: {Button},
  setup() {
    const showSuccessToast = () => {
      toastPlugin({
        message: '恭喜你，这是一条成功提示',
        type: 'success',
      })
    }
    const showWarningToast = () => {
      toastPlugin({
        message: '警告哦，这是一条警告提示',
        type: 'warning',
      })
    }
    const showToast = () => {
      toastPlugin({
        message: '这是一条消息提示'
      })
    }
    const showErrorToast = () => {
      toastPlugin({
        message: '错了哦，这是一条错误提示',
        type: 'error',
      })
    }
    return {showSuccessToast, showWarningToast, showToast, showErrorToast}
  }
}
</script>