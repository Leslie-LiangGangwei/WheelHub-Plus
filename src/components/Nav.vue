<template>
  <div class="nav">
    <span class="toggleAside" @click.stop="toggleMenu"></span>
    <div class="logo">Logo</div>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 16px;
  height: 64px;
  > .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: red;
    display: none;
  }
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
  @media (max-width: 576px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>