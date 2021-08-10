<demo>基础用法</demo>

<template>
  <Switch v-model:value="switchFalse"/>
</template>

<script lang="ts">
import Switch from "../../../lib/Switch.vue"
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
