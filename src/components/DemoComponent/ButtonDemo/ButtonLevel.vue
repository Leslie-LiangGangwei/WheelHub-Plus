<demo>不同等级</demo>

<template>
  <Button level="main">重要按钮</Button>
  <Button level="primary">次重要按钮</Button>
  <Button>普通按钮</Button>
  <Button level="danger">危险按钮</Button>
</template>

<script lang="ts">
// @ts-ignore
import {Button} from "wheelhub-plus"

export default {
  name: "ButtonLevel",
  components: {Button}
}
</script>