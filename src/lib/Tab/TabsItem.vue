<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "TabsItem",
  inheritAttrs: false,
  disabled: {
    type: Boolean,
    default: false
  }
}
</script>

<style lang="scss">

</style>