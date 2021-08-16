<template>
  <div class="g-layout"
       :class="{'hasSider': hasSider}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "Layout",
  setup(props, context) {
    const defaults = context.slots.default()
    const hasSider = ref<Boolean>(false)
    defaults.forEach((tag) => {
      if (tag.type.name == 'Sider') {
        hasSider.value = true
      }
    })
    return {hasSider}
  }
}
</script>

<style lang="scss">
.g-layout {
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  flex: 1;
  &.hasSider {flex-direction: row;}
}
</style>