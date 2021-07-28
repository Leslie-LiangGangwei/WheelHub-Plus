<template>
  <div class="layout">
    <Nav class="nav"
         :toggleMenuButtonVisible="true"
         :class="{'nav-show': windowScroll}"
    ></Nav>
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
      if (event.target == aside.value || aside.value.contains(event.target)) {
        return
      }
      menuVisible.value = false
    }
    const windowScroll = ref<Boolean>()
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      windowScroll.value = scrollTop > 0;
    }
    nextTick(() => {
      document.addEventListener('click', eventMenu)
      document.addEventListener('scroll', handleScroll)
    })
    return {menuVisible, aside, windowScroll}
  }
}
</script>

<style scoped lang="scss">
.layout {
  display: flex; flex-direction: column;
  height: 100vh;
  .nav-show {
    background: hsla(0, 0%, 100%, .4);
    backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 -3px 0 0 #cdcde6, 0 0 2px 2px #fff, 0 3px 6px 3px rgba(30, 35, 90, .1);
  }
  .doc-content {
    display: flex; flex-grow: 1;
    padding-top: 64px; padding-left: 158px;
    @media (max-width: 576px) {
      padding-left: 0;
    }
    main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
    aside {
      z-index: 10;
      display: inline-block;
      position: fixed; top: 64px; left: 0;
      height: 100%; width: 150px;
      padding: 16px;
      background: lightblue;
      @media (max-width: 576px) {
        display: none;
        &.mobile-show-aside {
          display: inline-block;
        }
      }
      h2 {
        margin-bottom: 4px;
      }
      ol {
        li {
          padding: 4px 0;
        }
      }
    }
  }
}
</style>