<demo>Hover 触发</demo>

<template>
  <Popover>
    <Button>Top</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
  <Popover position="bottom">
    <Button>Bottom</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
  <Popover position="left">
    <Button>Left</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
  <Popover position="right">
    <Button>Right</Button>
    <template v-slot:content>这是 popover 弹出的内容</template>
  </Popover>
</template>

<script lang="ts">
// @ts-ignore
import {Button, Popover} from "wheelhub-plus"

export default {
  name: "PopoverNormal",
  components: {Button, Popover}
}
</script>

<style scoped lang="scss">
.g-popover {
  padding-right: 16px;
}
</style>