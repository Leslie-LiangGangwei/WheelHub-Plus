<template>
  <div class="layout">
    <Nav class="nav"
         :toggleMenuButtonVisible="true"
         :class="{'nav-show': windowScroll}"
    ></Nav>
    <div class="doc-content">
      <aside :class="{'mobile-show-aside': menuVisible}" ref="aside">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/Intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/Install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/icon">Icon 图标</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">Layout 布局</router-link>
          </li>
          <li>
            <router-link to="/doc/grid">Grid 栅格</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话窗</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签栏</router-link>
          </li>
          <li>
            <router-link to="/doc/collapse">Collapse 折叠面板</router-link>
          </li>
        </ol>
      </aside>
      <div :class="{'background-blur': bgVisible}"></div>
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
    const bgVisible = inject<ref<boolean>>('bgVisible')
    const aside = ref(null);
    const eventMenu = (event) => {
      if (event.target == aside.value || aside.value.contains(event.target)) {
        return
      }
      menuVisible.value = false
      bgVisible.value = false
    }
    const windowScroll = ref<Boolean>(true)
    nextTick(() => {
      document.addEventListener('click', eventMenu)
    })
    return {menuVisible, aside, windowScroll, bgVisible}
  }
}
</script>

<style scoped lang="scss">
$blue: #2973f5;

.layout {
  display: flex; flex-direction: column;
  height: 100vh;
  .nav-show {
    background: hsla(0, 0%, 100%, .4);
    backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 -3px 0 0 #cdcde6, 0 0 2px 2px #fff, 0 3px 6px 3px rgba(30, 35, 90, .1);
  }
  .doc-content {
    position: relative;
    display: flex; flex-grow: 1;
    padding-top: 64px; padding-left: 320px;
    @media (max-width: 576px) {
      padding-left: 0;
    }
    main {
      flex-grow: 1;
      padding: 32px 40px;
      background: white;
      overflow: auto;
    }
    .background-blur {
      z-index: 1;
      position: fixed; top: 64px; left: 0;
      display: none;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, .6);
      @media (max-width: 576px) {
        display: block;
      }
    }
    aside {
      z-index: 10;
      display: inline-block;
      position: fixed; top: 64px; left: 0;
      height: 100%; width: 320px;
      padding-top: 24px;
      background: white;
      border-right: 1px solid #eaecef;
      @media (max-width: 576px) {
        display: none;
        &.mobile-show-aside {
          display: inline-block;
        }
      }
      h2 {
        font-size: 18px; font-weight: 700;
        padding: 16px 24px;
      }
      ol {
        li {
          a {
            display: block;
            padding: 12px 36px; border-left: 4px solid white;
            color: #2c3e50; font-weight: 400;
            text-decoration: none;
            &:hover {
              color: $blue;
            }
            &.router-link-active {
              border-color: $blue;
              color: $blue !important;
              background: #e9f6fe;
            }
          }
        }
      }
    }
  }
}
</style>
