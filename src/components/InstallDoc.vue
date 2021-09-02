<template>
  <article class="markdown-body">
    <h1>安装</h1>
    <blockquote>
      <p>打开终端运行下列命令：</p>
    </blockquote>
    <p class="title">yarn（推荐使用）</p>
    <pre class="language-markup"
         v-html="Prism.highlight('yarn add wheelhub-plus', Prism.languages.markup, 'markup')"/>
    <p class="title">npm</p>
    <pre class="language-js"
         v-html="Prism.highlight('npm install wheelhub-plus', Prism.languages.js, 'js')"/>
    <p>下一节：<a href="#/doc/get-started">开始使用</a></p>
  </article>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css'

const Prism = (window as any).Prism
export default {
  name: "InstallDoc",
  setup() {
    return {Prism}
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