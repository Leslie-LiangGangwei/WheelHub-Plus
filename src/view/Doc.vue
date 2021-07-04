<
<template>
  <div class="layout">
    <Nav class="nav"></Nav>
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
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, ref, nextTick} from "vue";
import Nav from '../components/Nav.vue'

export default {
  name: "Doc",
  components: {Nav},
  setup: function () {
    const menuVisible = inject<ref<boolean>>('menuVisible')
    const aside = ref(null);
    const eventMenu = (event) => {
      nextTick(() => {
        if (event.target == aside.value || aside.value.contains(event.target)) {
          return
        }
        menuVisible.value = false
      })
    }
    document.addEventListener('click', eventMenu)
    return {menuVisible, aside}
  }
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .doc-content {
    display: flex;
    flex-grow: 1;
    padding-top: 64px;
    padding-left: 158px;
    @media (max-width: 576px) {
      padding-left: 0;
    }
    main {
      flex-grow: 1;
      padding: 16px;
      background: lightgreen;
    }
  }
}

aside {
  display: inline-block;
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
  aside {
    display: none;
  }
  aside.mobile-show-aside {
    display: inline-block;
  }
}
</style>