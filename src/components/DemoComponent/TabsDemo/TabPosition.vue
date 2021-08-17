<demo>垂直布局</demo>

<template>
  <Tabs v-model:selected="itemSelected" tab-position="left">
    <TabsItem title="Title 1">Panel 1</TabsItem>
    <TabsItem title="Title 2" disabled>Panel 2</TabsItem>
    <TabsItem title="Title 3">Panel 3</TabsItem>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../../lib/Tab/Tabs.vue'
import TabsItem from '../../../lib/Tab/TabsItem.vue'
import {ref} from "vue";

export default {
  name: "TabPosition",
  components: {Tabs, TabsItem},
  setup() {
    const itemSelected = ref('Title 1')
    return {itemSelected}
  }
}
</script>

