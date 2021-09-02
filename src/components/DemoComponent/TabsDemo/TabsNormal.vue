<demo>基本</demo>

<template>
  <Tabs v-model:selected="itemSelected">
    <TabsItem title="Title 1">Panel 1</TabsItem>
    <TabsItem title="Title 2">Panel 2</TabsItem>
    <TabsItem title="Title 3">Panel 3</TabsItem>
  </Tabs>
</template>

<script lang="ts">
// @ts-ignore
import {Tabs, TabsItem} from "wheelhub-plus"
import {ref} from "vue";

export default {
  name: "TabsNormal",
  components: {Tabs, TabsItem},
  setup() {
    const itemSelected = ref('Title 1')
    return {itemSelected}
  }
}
</script>
