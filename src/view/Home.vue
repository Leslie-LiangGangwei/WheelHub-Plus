<template>
  <Nav></Nav>
  <div class="banner">
    <h1>WheelHub-Plus</h1>
    <h2>WheelHub 加强版，基于 Vue 3 开发的前端 UI 框架</h2>
    <p class="actions">
      <a href="https://github.com/Leslie-LiangGangwei/WheelHub-Plus">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>

  </div>
</template>

<script>
import Nav from "../components/Nav.vue"

export default {
  name: "Home",
  components: {Nav}
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
</style>
