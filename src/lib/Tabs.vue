<template>
</template>

<script lang="ts">
import TabsItem from './TabsItem.vue'

export default {
  name: "Tabs",
  setup: function (props, context) {
    // @ts-ignore
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type.name !== 'TabsItem') {
        throw new Error('Tabs 子标签必须是 TabsItem')
      }
    })
    return {defaults}
  }
}
</script>

<style lang="scss">

</style>