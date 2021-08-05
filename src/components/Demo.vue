<template>
  <div class="demo">
    <p class="title">
      <slot name="title"></slot>
    </p>
    <p>
      <slot name="details"></slot>
    </p>
    <div class="demo-container">
      <div class="demo-component">
        <component :is="component"></component>
      </div>
      <div class="demo-code">
          <pre class="language-html"
               v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css'

const Prism = (window as any).Prism

export default {
  name: "Demo",
  props: {
    component: {type: Object}
  },
  setup() {
    return {Prism}
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
