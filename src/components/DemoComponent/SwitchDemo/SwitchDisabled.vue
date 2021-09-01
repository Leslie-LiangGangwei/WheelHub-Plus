<demo>禁止用法</demo>

<template>
  <Switch v-model:value="switchTrue" disabled/>
  <Switch v-model:value="switchFalse" disabled/>
</template>

<script lang="ts">
// @ts-ignore
import {Switch} from "wheelhub-plus"
import {ref} from "vue"

export default {
  name: "SwitchNormal.vue",
  components: {Switch},
  setup() {
    const switchFalse = ref(false)
    const switchTrue = ref(true)
    return {switchFalse, switchTrue}
  }
}
</script>

<style lang="scss" scoped>
.g-switch:first-child {margin-right: 20px;}
</style>
