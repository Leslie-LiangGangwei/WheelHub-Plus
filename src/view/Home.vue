<template>
  <div class="home">
    <Nav :class="{'nav-show': windowScroll}"></Nav>
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
    <div class="home-banner"></div>
    <div class="main">
      <div class="banner">
        <img class="banner-title" src="src/assets/WheelHub-Plus@3x.svg" alt="WheelHub-Plus">
        <p class="home-banner-content">WheelHub-Plus 是一款基于 Vue 3.0 和 TypeScript 的 UI 组件库。</p>
        <div class="actions">
          <a href="https://github.com/Leslie-LiangGangwei/WheelHub-Plus">
            <Button level="main">GitHub</Button>
          </a>
          <router-link to="/doc/intro">
            <Button level="primary">开始</Button>
          </router-link>
        </div>
      </div>
      <div class="features">
        <div class="feature">
          <h2>基于 Vue 3.0</h2>
          <p>使用了 Vue 3.0 Composition API 所开发的前端 UI 框架，项目仅供学习参考（请勿在生产环境中使用）</p>
        </div>
        <div class="feature">
          <h2>基于 TypeScript</h2>
          <p>TypeScript 是 JavaScript 的超集，这意味着他支持所有的 JavaScript 语法，并在此之上添加了一些扩展。</p>
        </div>
        <div class="feature">
          <h2>代码易读</h2>
          <p>每个组件的源代码都极其简洁，清晰易懂。自带说明的代码，即使没有注释，你也能看懂</p>
        </div>
      </div>
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
.home {
  position: relative;
  .nav-show {
    background: hsla(0, 0%, 100%, .4);
    backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 -3px 0 0 #cdcde6, 0 0 2px 2px #fff,0 3px 6px 3px rgba(30,35,90,.1);
  }
  .home-banner {
    z-index: 1;
    position: absolute; top: 0; left: 0;
    width: 100%; height: 466px;
    margin: 0 auto;
    background: linear-gradient(130deg, rgba(243, 249, 254, 1) 0%, rgba(239, 247, 252, 1) 100%);
    @media (max-width: 576px) {
      height: 396px;
    }
  }
  .main {
    max-width: 960px;
    margin: 0 auto; padding: 3.6rem 2rem 0;
    .banner {
      display: flex; justify-content: center; align-items: center; flex-direction: column;
      padding-top: 130px; padding-bottom: 80px;
      @media (max-width: 576px) {
        padding-top: 80px; padding-bottom: 60px;
      }
      .banner-title {
        z-index: 10;
        max-width: 500px;
        margin: 0 32px;
        @media (max-width: 576px) {
          width: 100%;
        }
      }
      .home-banner-content {
        z-index: 10;
        margin-top: 24px;
        font-weight: lighter;
      }
      .actions {
        z-index: 10;
        margin-top: 40px; padding: 8px 0;
        a {
          text-decoration: none;
          margin: 0 8px;
        }
      }
    }
    .features {
      display: flex; flex-direction: row; justify-content: space-between;
      margin: 40px 0; padding-top: 20px;
      @media (max-width: 576px) {
        display: flex; flex-direction: column;
        padding-top: 0;
      }
      .feature {
        flex-grow: 1; flex-basis: 30%; max-width: 30%;
        @media (max-width: 576px) {
          max-width: 100%; padding: 0 2.5rem;
        }
        h2 {
          margin: 20px 0;
          font-size: 1.4rem; line-height: 1.25; font-weight: 500;
          border-bottom: none; padding-bottom: 0;
          color: #3a5169;
          @media (max-width: 576px) {
            padding-top: 24px;
          }
        }
        p {
          color: #4e6e8e;
          line-height: 1.7;
        }
      }
    }
  }
  aside {
    display: none;
    position: fixed; top: 64px; left: 0;
    height: 100%; width: 150px;
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
    @media (max-width: 576px) {
      aside.mobile-show-aside {
        display: inline-block;
      }
    }
  }
}
</style>
