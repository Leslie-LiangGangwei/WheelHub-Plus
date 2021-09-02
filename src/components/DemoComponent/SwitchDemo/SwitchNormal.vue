<demo>基础用法</demo>

<template>
  <Switch v-model:value="switchFalse"/>
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
    return {switchFalse}
  }
}
</script>