<template>
  <div>我是 Button 文档</div>
  <Button
      @click="onClick" @foucs="onClick" @mouseover="onClick"
      size="small"
  >按钮</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  name: "ButtonDoc",
  components: {Button},
  setup() {
    const onClick = () => {
    }
    return { onClick }
  }
}
</script>

<style scoped lang="scss">

</style>