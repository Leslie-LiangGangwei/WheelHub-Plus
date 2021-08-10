<template>
  <article class="markdown-body">
    <h1>Icon 图标</h1>
    <blockquote>
      <p>推荐使用 <a href="https://www.iconfont.cn/">iconfont</a> SVG 即提高性能，又方便维护。</p>
    </blockquote>
    <p class="title">引用</p>
    <p>在 <a href="https://www.iconfont.cn/">iconfont</a> 生成并下载（项目文件）iconfont.js 后，并且在 main.ts 内引用</p>
    <pre class="language-js"
         v-html="Prism.highlight(importText, Prism.languages.js, 'js')"/>
    <Demo :component="IconDemo">
      <template v-slot:title>基础用法</template>
      <template v-slot:details>提供了基础样式。</template>
    </Demo>
    <Demo :component="IconDemoExtend">
      <template v-slot:title>扩展用法</template>
      <template v-slot:details>开发者可根据需求，对 Icon 进行“宽高”、“颜色”、“动画”等样式进行扩展。</template>
    </Demo>
    <Table>
      <TableTbody :td-array="['name','Icon 名称（必填），对应 iconfont 的 Icon 名称','String','---','---']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css'
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from  './DocComponent/TableTbody.vue'
import IconDemo from './DemoComponent/IconDemo/IconDemo.vue'
import IconDemoExtend from './DemoComponent/IconDemo/IconDemoExtend.vue'


import {ref} from "vue";

const Prism = (window as any).Prism
export default {
  name: "IconDoc",
  components: {Demo, Table, TableTbody},
  setup(){
    const importText = ref("import \'../../src/assets/icon/iconfont.js\'")
    return {Prism, importText, IconDemo, IconDemoExtend}
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 22px; font-weight: 400;
  margin: 55px 0 20px;
}
</style>