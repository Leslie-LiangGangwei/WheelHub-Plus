<template>
  <article class="markdown-body">
    <h1>开始使用</h1>
    <blockquote>
      <p>请先<a href="#/doc/install">安装</a>本组件库，然后引入 WheelHub-Plus 组件库，<mark>注意修改组件路径</mark>。</p>
    </blockquote>
    <p class="title">引用组件库</p>
    <pre class="language-js"
         v-html="Prism.highlight(importText, Prism.languages.js, 'js')"/>
    <p class="title">使用 Button 组件</p>
    <p>代码示例：</p>
    <pre class="language-html"
         v-html="Prism.highlight(ButtonNormalDemo.__sourceCode, Prism.languages.html, 'html')"/>
  </article>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css'
import {ref} from "vue";
import ButtonNormalDemo from './DemoComponent/ButtonDemo/ButtonNormal.vue'

const Prism = (window as any).Prism
export default {
  name: "GetStartedDoc",
  setup() {
    const importText = ref('import {Button, Tabs, Switch, Dialog} from "wheelhub-plus"')
    return {Prism, importText, ButtonNormalDemo}
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 22px; font-weight: 400;
  margin: 55px 0 20px;
}
</style>