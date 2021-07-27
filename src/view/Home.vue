<template>
  <div class="top">
    <Nav></Nav>
    <aside :class="{'mobile-show-aside': menuVisible}" ref="aside">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <div class="banner">
      <img class="banner-title" src="src/assets/WheelHub-Plus@3x.svg" alt="WheelHub-Plus">
      <p class="home-banner-content">WheelHub-Plus，基于 Vue 3.0 开发的前端 UI 框架</p>
      <div class="actions">
        <a href="https://github.com/Leslie-LiangGangwei/WheelHub-Plus">
          <Button level="main">GitHub</Button>
        </a>
        <router-link to="/doc">
          <Button level="primary">开始</Button>
        </router-link>
      </div>
    </div>
    <div class="features">
      <div class="feature"></div>
      <div class="feature"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Nav from "../components/Nav.vue"
import Button from "../lib/Button.vue"
import {inject, nextTick, ref} from "vue";

export default {
  name: "Home",
  components: {Nav, Button},
  setup: function () {
    const menuVisible = inject<ref<boolean>>('menuVisible')
    const aside = ref(null);
    const eventMenu = (event) => {
      if (event.target == aside.value || aside.value.contains(event.target)) {
        return
      }
      menuVisible.value = false
    }
    nextTick(() => {
      document.addEventListener('click', eventMenu)
    })
    return {menuVisible, aside}
  }
}
</script>

<style scoped lang="scss">
$black-color: #252525;

.top {
  display: flex; justify-content: center; align-items: center;
  background: linear-gradient(130deg, rgba(243, 249, 254, 1) 0%, rgba(239, 247, 252, 1) 100%);
  .banner {
    display: flex; justify-content: center; align-items: center; flex-direction: column;
    max-width: 960px;
    padding-top: 130px;
    padding-bottom: 80px;
    .banner-title {
      width: 500px;
      margin: 0 32px;
    }
    .home-banner-content {
      margin-top: 24px;
      font-weight: lighter;
      color: $black-color;
    }
    .actions {
      margin-top: 40px;
      padding: 8px 0;
      a {
        text-decoration: none;
        margin: 0 8px;
        color: $black-color;
      }
    }
  }
}


aside {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  height: 100%;
  width: 150px;
  padding: 16px;
  background: lightblue;
  h2 {
    margin-bottom: 4px;
  }
  ol {
    li {
      padding: 4px 0;
    }
  }
}


@media (max-width: 576px) {
  aside.mobile-show-aside {
    display: inline-block;
  }
}
</style>
