<template>
  <article class="markdown-body">
    <h1>Switch 开关</h1>
    <blockquote>
      <p>开关选择器，可切换"开"和"关"两种状态</p>
    </blockquote>
    <div class="demo">
      <p class="title">基础用法</p>
      <p>最简单的用法。</p>
      <div class="demo-container">
        <div class="demo-component">
          <component :is="SwitchNormal"></component>
        </div>
        <div class="demo-code">
          <pre class="language-html"
               v-html="Prism.highlight(SwitchNormal.__sourceCode, Prism.languages.html, 'html')" />
        </div>
      </div>
    </div>
    <div class="demo">
      <p class="title">禁止用法</p>
      <p>最简单的用法。</p>
      <div class="demo-container">
        <div class="demo-component">
          <component :is="SwitchDisabled"></component>
        </div>
        <div class="demo-code">
          <pre class="language-html"
               v-html="Prism.highlight(SwitchDisabled.__sourceCode, Prism.languages.html, 'html')" />
        </div>
      </div>
    </div>
  </article>

</template>

<script lang="ts">
import SwitchNormal from '../components/SwitchDemo/SwitchNormal.vue'
import SwitchDisabled from '../components/SwitchDemo/SwitchDisabled.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

export default {
  name: "SwitchDoc",
  setup() {
    return {SwitchNormal, SwitchDisabled, Prism}
  }
}
</script>

<style lang="scss" scoped>
$border-color: #efeff4;

.demo {
  .title {
    font-size: 22px; font-weight: 400;
    margin: 55px 0 20px;
  }
  .demo-container {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    .demo-component {
      padding: 42px 24px 50px;
    }
    .demo-code {
      padding: 16px;
      border-top: 1px dashed $border-color;
    }
  }
}
</style>