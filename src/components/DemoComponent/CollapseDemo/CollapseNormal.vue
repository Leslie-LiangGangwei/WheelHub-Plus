<demo>折叠面板</demo>

<template>
  <Collapse v-model:selected="selected">
    <CollapseItem title="Title 1">Panel 1</CollapseItem>
    <CollapseItem title="Title 2">Panel 2</CollapseItem>
    <CollapseItem title="Title 3">Panel 3</CollapseItem>
  </Collapse>
</template>

<script lang="ts">
// @ts-ignore
import {Collapse, CollapseItem} from "wheelhub-plus"
import {ref} from "vue";

export default {
  name: "CollapseNormal",
  components: {Collapse, CollapseItem},
  setup() {
    const selected = ref(['Title 1'])
    return {selected}
  }
}
</script>