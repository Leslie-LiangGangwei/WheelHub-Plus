<demo>上-中-下布局</demo>

<template>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script lang="ts">
// @ts-ignore
import {Layout, Header, Content, Footer} from "wheelhub-plus"

export default {
  name: "LayoutNormal",
  components: {Layout, Header, Content, Footer}
}
</script>

<style scoped lang="scss">
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