<template>
  <Nav></Nav>
  <div class="doc-content">
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/swich">Switch 组件</router-link>
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
    const menuVisible = inject<ref<boolean>>('menuVisible')
    const width = document.documentElement.clientWidth;
    const eventMenu = () => {
      if (width > 576) {
        return;
      } else if (menuVisible.value) {
        menuVisible.value = false
      }
    }
    document.addEventListener('click', eventMenu)
    return {menuVisible}
  }
}
</script>

<style scoped lang="scss">
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 54px;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>