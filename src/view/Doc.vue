<template>
  <Nav></Nav>
  <div class="doc-content">
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
    const aside = ref(null);
    const eventMenu = (event) => {
      if (event.target == aside.value || aside.value.contains(event.target)) {
        return
      }
      menuVisible.value = false
    }
    document.addEventListener('click', eventMenu)
    return {menuVisible, aside}
  }
}
</script>

<style scoped lang="scss">
aside {
  display: inline-block;
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 64px;
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

@media (max-width: 576px) {
  aside {
    display: none;
  }
  aside.mobile-show-aside {
    display: inline-block;
  }
}
</style>