<template>
  <div class="nav">
    <div class="logo">
      <div class="toggleAside" @click.stop="toggleMenu" v-if="toggleMenuButtonVisible">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu"></use>
        </svg>
      </div>
      <router-link to="/">
        <img class="nav-logo" src="src/assets/WheelHub-Plus@3x.svg" alt="WheelHub-Plus">
      </router-link>
    </div>
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
import '../assets/icon/iconfont.js'
import {inject, ref} from "vue";

export default {
  name: "Nav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
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
  .logo {
    margin-right: auto;
  }
  .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .nav-logo {
    max-width: 9em;
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