<demo>不同尺寸</demo>

<template>
  <Button size="small">小型按钮</Button>
  <Button>普通按钮</Button>
  <Button size="big">大型按钮</Button>
</template>

<script lang="ts">
import Button from "../../../lib/Button/Button.vue"

export default {
  name: "ButtonSize",
  components: {Button}
}
</script>