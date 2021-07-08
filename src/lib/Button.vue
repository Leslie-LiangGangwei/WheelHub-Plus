<template>
  <div :size="size">
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Button",
  inheritAttrs: false,
  setup(props, context) {
    const {size, ...rest} = context.attrs
    return {size, rest}
  }
}
</script>

<style scoped lang="scss">

</style>