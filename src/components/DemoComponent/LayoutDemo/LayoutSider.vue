<demo>顶部-侧边布局-通栏</demo>

<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script lang="ts">
// @ts-ignore
import {Layout, Header, Content, Footer, Sider} from "wheelhub-plus"

export default {
  name: "LayoutSider",
  components: {Layout, Sider, Header, Content, Footer}
}
</script>

<style scoped lang="scss">
.g-header {
  width: 100%; height: 64px;
  color: white; background: #7dbcea;
}

.g-layout {
  width: 100%;
  .g-sider {
    width: 240px; height: 120px;
    color: #2973f5; background: #D7EFF9;
  }
  .g-content {
    width: 100%; height: 120px;
    color: white; background: #1890ff;
  }
}

.g-footer {
  width: 100%; height: 64px;
  color: white; background: #7dbcea;
}
</style>