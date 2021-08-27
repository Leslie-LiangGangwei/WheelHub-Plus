<demo>Click 触发</demo>

<template>
  <Popover trigger="click">
    <Button level="main">Top</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
  <Popover trigger="click" position="bottom">
    <Button level="main">Bottom</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
  <Popover trigger="click" position="left">
    <Button level="main">Left</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
  <Popover trigger="click" position="right">
    <Button level="main">Right</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
</template>

<script lang="ts">
import Button from '../../../lib/Button/Button.vue'
import Popover from '../../../lib/Popover.vue'

export default {
  name: "PopoverClick",
  components: {Button, Popover}
}
</script>

<style scoped lang="scss">
.g-popover {
  padding-right: 16px;
}
</style>