<demo>提交按钮</demo>

<template>
  <Button loading>加载中</Button>
  <Button loading level="main">加载中</Button>
</template>

<script lang="ts">
// @ts-ignore
import {Button} from "wheelhub-plus"

export default {
  name: "ButtonSubmit",
  components: {Button}
}
</script>