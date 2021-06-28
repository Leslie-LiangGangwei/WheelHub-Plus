<template>
  <Nav></Nav>
  <div class="banner">
    <h1>WheelHub-Plus</h1>
    <h2>WheelHub 加强版，基于 Vue 3 开发的前端 UI 框架</h2>
    <a href="">GitHub</a>
    <span>  ||  </span>
    <router-link to="/doc">开始</router-link>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: "Home",
  components: {Nav}
}
</script>

<style scoped lang="scss">
</style>
