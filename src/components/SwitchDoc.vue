<template>
  <div>我是 switch 文档</div>
  <Switch :value="switchValue" @input="switchValue = $event"></Switch>
  <p>{{switchValue}}</p>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue"
import {ref} from "vue"

export default {
  name: "SwitchDoc",
  components: {Switch},
  setup() {
    const switchValue = ref(true)
    return {switchValue}
  }
}
</script>

<style scoped lang="scss">

</style>