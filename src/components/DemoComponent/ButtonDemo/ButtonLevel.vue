<demo>不同等级</demo>

<template>
  <Button level="main">重要按钮</Button>
  <Button level="primary">次重要按钮</Button>
  <Button>普通按钮</Button>
  <Button level="danger">危险按钮</Button>
</template>

<script lang="ts">
import Button from "../../../lib/Button/Button.vue"

export default {
  name: "ButtonLevel",
  components: {Button}
}
</script>