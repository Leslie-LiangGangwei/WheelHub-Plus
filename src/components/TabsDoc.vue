<template>
  <Tabs v-model:selected="itemSelected">
    <TabsItem title="Title 1">panel 1</TabsItem>
    <TabsItem title="Title 2">panel 2</TabsItem>
  </Tabs>
</template>

<script lang="ts">
import {ref} from 'vue'
import Tabs from '../lib/Tabs.vue'
import TabsItem from '../lib/TabsItem.vue'

export default {
  name: "TabsDoc",
  components: {Tabs, TabsItem},
  setup(){
    const itemSelected = ref('Title 2')
    return { itemSelected }
  }
}
</script>

<style scoped lang="scss">

</style>