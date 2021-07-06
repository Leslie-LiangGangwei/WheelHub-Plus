<template>
  <div>我是 switch 文档</div>
  <Switch v-model:value="switchValue"></Switch>
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