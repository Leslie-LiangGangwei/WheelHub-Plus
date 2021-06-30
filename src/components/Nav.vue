<template>
  <div class="nav">
    <div class="logo" @click="toggleMenu">Logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, ref} from "vue";

export default {
  name: "Nav",
  setup() {
    const menuVisible = inject<ref<boolean>>('menuVisible') // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>

<style scoped lang="scss">
.nav {
  background: pink;
  display: flex;
  position: relative;
  z-index: 10;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>