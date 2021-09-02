<demo>固定侧边栏</demo>

<template>
  <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</template>

<script lang="ts">
// @ts-ignore
import {Layout, Header, Content, Footer, Sider} from "wheelhub-plus"

export default {
  name: "SiderLayout",
  components: {Layout, Sider, Header, Content, Footer}
}
</script>

<style scoped lang="scss">
.g-layout {
  .g-sider {
    width: 240px; height: 248px;
    color: #2973f5; background: #D7EFF9;
  }
}

.g-header {
  width: 100%; height: 64px;
  color: white; background: #7dbcea;
}

.g-content {
  width: 100%; height: 120px;
  color: white; background: #1890ff;
}

.g-footer {
  width: 100%; height: 64px;
  color: white; background: #7dbcea;
}
</style>