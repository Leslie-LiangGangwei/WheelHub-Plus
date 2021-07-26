<template>
  <div class="nav">
    <span class="toggleAside" @click.stop="toggleMenu"></span>
    <img class="nav-logo" src="src/assets/WheelHub-Plus@3x.svg" alt="WheelHub-Plus">
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <a href="https://github.com/Leslie-LiangGangwei/WheelHub-Plus">GitHub</a>
      </li>
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
$black-color: #252525;
$blue: #2973f5;

.nav {
  z-index: 10;
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  display: flex;
  justify-content: center; align-items: center;
  padding: 24px;
  height: 64px;
  .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: red;
    display: none;
  }
  .nav-logo {
    max-width: 8em;
    margin-right: auto;
  }
  .menu {
    display: flex;
    white-space: nowrap; flex-wrap: nowrap;
    li {
      display: flex;
      justify-content: center; align-items: center;
      color: $black-color;
      font-size: 16px;
      height: 32px;
      margin: 0 1em;
      a {
        color: $black-color;
        text-decoration: none;
        &:hover {
          color: $blue;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .menu {
      display: none;
    }
    .logo {
      margin: 0 auto;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}
</style>