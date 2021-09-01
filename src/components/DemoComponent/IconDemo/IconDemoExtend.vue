<demo>扩展用法</demo>

<template>
  <Icon name="loading"></Icon>
</template>

<script lang="ts">
// @ts-ignore
import {Icon} from "wheelhub-plus"

export default {
  name: "IconDemoExtend",
  components: {Icon}
}
</script>

<style lang="scss" scoped>
@keyframes g-spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}

.g-icon {
  animation: g-spin 1s infinite linear;
  width: 30px; height: 30px;
  fill: #2973f5;
}
</style>