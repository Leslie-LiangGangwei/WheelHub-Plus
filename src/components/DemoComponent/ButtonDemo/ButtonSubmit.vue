<demo>提交按钮</demo>

<template>
  <Button loading>加载中</Button>
  <Button loading level="main">加载中</Button>
</template>

<script lang="ts">
import Button from "../../../lib/Button/Button.vue"

export default {
  name: "ButtonSubmit",
  components: {Button}
}
</script>