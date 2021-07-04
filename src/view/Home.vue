<template>
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
    <h1>WheelHub-Plus</h1>
    <h2>WheelHub 加强版，基于 Vue 3 开发的前端 UI 框架</h2>
    <p class="actions">
      <a href="https://github.com/Leslie-LiangGangwei/WheelHub-Plus">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>

  </div>
</template>

<script lang="ts">
import Nav from "../components/Nav.vue"
import {inject, nextTick, ref} from "vue";

export default {
  name: "Home",
  components: {Nav},
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
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
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
