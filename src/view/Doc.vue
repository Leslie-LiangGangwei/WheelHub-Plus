<template>
  <Nav></Nav>
  <div class="doc-content">
    <aside v-if="menuVisible">边栏</aside>
    <main>主内容</main>
  </div>
</template>

<script lang="ts">
import {inject, ref} from "vue";
import Nav from '../components/Nav.vue'

export default {
  name: "Doc",
  components: {Nav},
  setup: function () {
    const menuVisible = inject<ref<boolean>>('menuVisible') // get
    return {menuVisible}
  }
}
</script>

<style scoped lang="scss">

</style>