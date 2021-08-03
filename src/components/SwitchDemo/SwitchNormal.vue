<template>
  <Switch v-model:value="switchValue"/>
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue"
import {ref} from "vue"

export default {
  name: "SwitchNormal.vue",
  components: {Switch},
  setup() {
    const switchValue = ref(false)
    return {switchValue}
  }
}
</script>
