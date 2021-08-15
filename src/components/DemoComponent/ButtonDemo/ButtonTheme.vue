<demo>不同类型</demo>

<template>
  <Button>基础按钮</Button>
  <Button theme="text">文字按钮</Button>
  <Button theme="link">链接按钮</Button>
</template>

<script lang="ts">
import Button from "../../../lib/Button/Button.vue"

export default {
  name: "ButtonType",
  components: {Button}
}
</script>