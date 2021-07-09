<template>
  <div>
    <p>示例一</p>
    <Button>按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button theme="link">链接按钮</Button>
  </div>
  <div>
    <p>示例二</p>
    <Button size="small">小型按钮</Button>
    <Button size="small" theme="text">小型按钮</Button>
    <Button size="small" theme="link">小型按钮</Button>
    <p></p>
    <Button>按钮</Button>
    <Button theme="text">按钮</Button>
    <Button theme="link">链接按钮</Button>
    <p></p>
    <Button size="big">大型按钮</Button>
    <Button size="big" theme="text">大型按钮</Button>
    <Button size="big" theme="link">大型按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  name: "ButtonDoc",
  components: {Button}
}
</script>

<style scoped lang="scss">
p {
  margin: 20px 0;
}
</style>