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
    <Button>普通按钮</Button>
    <Button theme="text">普通按钮</Button>
    <Button theme="link">普通按钮</Button>
    <p></p>
    <Button size="big">大型按钮</Button>
    <Button size="big" theme="text">大型按钮</Button>
    <Button size="big" theme="link">大型按钮</Button>
  </div>
  <div>
    <p>示例三</p>
    <Button level="main">重要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
    <p></p>
    <Button level="main" theme="text">重要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button level="danger" theme="text">危险文字按钮</Button>
    <p></p>
    <Button level="main" theme="link">重要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button level="danger" theme="link">危险链接按钮</Button>
  </div>
  <div>
    <p>示例四</p>
    <Button disabled>按钮</Button>
    <Button theme="text" disabled>文字按钮</Button>
    <Button theme="link" disabled>链接按钮</Button>
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