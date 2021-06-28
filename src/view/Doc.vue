<template>
  <Nav></Nav>
  <div class="doc-content">
    <aside>边栏</aside>
    <main>主内容</main>
  </div>
</template>

<script lang="ts">
import Nav from '../components/Nav.vue'

export default {
  name: "Doc",
  components: {Nav}
}
</script>

<style scoped lang="scss">

</style>