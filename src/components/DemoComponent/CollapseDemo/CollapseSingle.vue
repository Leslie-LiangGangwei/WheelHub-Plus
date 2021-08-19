<demo>手风琴</demo>

<template>
  <Collapse single>
    <CollapseItem title="Title 1">Panel 1</CollapseItem>
    <CollapseItem title="Title 2">Panel 2</CollapseItem>
    <CollapseItem title="Title 3">Panel 3</CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import Collapse from '../../../lib/Collapse/Collapse.vue'
import CollapseItem from '../../../lib/Collapse/CollapseItem.vue'

export default {
  name: "CollapseSingle",
  components: {Collapse, CollapseItem}
}
</script>