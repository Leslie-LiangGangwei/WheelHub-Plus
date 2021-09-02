<template>
  <article class="markdown-body">
    <h1>开始使用</h1>
    <blockquote>
      <p>请先<a href="#/doc/install">安装</a>本组件库，然后引入 WheelHub-Plus 组件库 & CSS。</p>
    </blockquote>
    <p class="title">引入组件库</p>
    <pre class="language-js"
         v-html="Prism.highlight(importText, Prism.languages.js, 'js')"/>
    <p class="title">在 main.ts 引入 CSS</p>
    <pre class="language-js"
         v-html="Prism.highlight(importCss, Prism.languages.js, 'js')"/>
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
    const importText = ref('import {Icon, Switch, Input, Button, Layout, Header, Content, Footer, Sider, Row, Col, toastPlugin, Dialog, openDialog, Popover, Tabs, TabsItem, Collapse, CollapseItem} from "wheelhub-plus"')
    const importCss = ref('import "wheelhub-plus/dist/lib/wheelhub-plus.css"')
    return {Prism, importText, importCss, ButtonNormalDemo}
  }
}
</script>

<style scoped lang="scss">
article{
  .title {
    font-size: 22px; font-weight: 400;
    margin: 55px 0 20px;
  }
  pre {background: #f9fafc}
}
</style>