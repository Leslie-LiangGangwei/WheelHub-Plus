<template>
  <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
  <component v-for="(d, index) in defaults" :is="d" :key="index"></component>
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
    const titles = defaults.map((tag) => {
      // @ts-ignore
      return tag.props.title
    })
    return {defaults, titles}
  }
}
</script>

<style lang="scss">

</style>