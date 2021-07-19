<template>
  <p>示例一</p>
  <Tabs>
    <TabsItem title="Title 1">panel 1</TabsItem>
    <TabsItem title="Title 2">panel 2</TabsItem>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import TabsItem from '../lib/TabsItem.vue'

export default {
  name: "TabsDoc",
  components: {Tabs, TabsItem}
}
</script>

<style scoped lang="scss">

</style>