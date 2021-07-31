<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script lang="ts">
import md from '../markdown/get-started.md'

export default {
  name: "GetStarted",
  setup(){
    return {md}
  }
}
</script>

<style scoped lang="scss">

</style>