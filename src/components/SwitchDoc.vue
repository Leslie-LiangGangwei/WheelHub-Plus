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
          <SwitchNormal></SwitchNormal>
        </div>
        <div class="demo-code">
          <pre>{{ SwitchNormal.__sourceCode }}</pre>
        </div>
      </div>
    </div>
    <div class="demo">
      <p class="title">禁止用法</p>
      <p>最简单的用法。</p>
      <div class="demo-container">
        <div class="demo-component">
          <SwitchDisabled></SwitchDisabled>
        </div>
        <div class="demo-code">
          <pre>{{ SwitchDisabled.__sourceCode }}</pre>
        </div>
      </div>
    </div>
  </article>

</template>

<script lang="ts">
import SwitchNormal from '../components/SwitchDemo/SwitchNormal.vue'
import SwitchDisabled from '../components/SwitchDemo/SwitchDisabled.vue'

export default {
  name: "SwitchDoc",
  components: {SwitchNormal, SwitchDisabled},
  setup() {
    return {SwitchNormal, SwitchDisabled}
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
      pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
}
</style>