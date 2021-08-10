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
          <pre class="language-html" v-if="codeShow"
               v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"/>
      </div>
      <div class="demo-code-button" @click="codeToggle">
        <div class="demo-code-hide" v-if="codeShow">
          <div class="demo-code-toggle"></div>
          <span class="demo-code-text">隐藏代码</span>
        </div>
        <div class="demo-code-show" v-else>
          <div class="demo-code-toggle"></div>
          <span class="demo-code-text">显示代码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css'
import {ref} from "vue";

const Prism = (window as any).Prism

export default {
  name: "Demo",
  props: {
    component: {type: Object}
  },
  setup() {
    const codeShow = ref<Boolean>(false)
    const codeToggle = () => {
      codeShow.value = !codeShow.value
    }
    return {Prism, codeShow, codeToggle}
  }
}
</script>

<style lang="scss" scoped>
$border-color: #efeff4;
$blue: #2973f5;

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
      border-top: 1px dashed $border-color;
      pre {
        margin-bottom: 0;
      }
    }
    .demo-code-button {
      position: relative;
      display: flex; justify-content: center; align-items: center;
      border-top: 1px dashed $border-color;
      height: 44px;
      cursor: pointer;
      .demo-code-show {
        .demo-code-toggle {
          position: absolute; top: 7px; left: 50%;
          transform: translate(-100%);
          width: 0; height: 0;
          border-top: 6px solid #d5dce5;
          border-right: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid transparent;
          margin: 12px;
        }
        .demo-code-text {
          display: none;
          color: $blue; font-size: 14px;
        }
      }
      .demo-code-hide {
        .demo-code-toggle {
          position: absolute; top: 1px; left: 50%;
          transform: translateX(-100%);
          width: 0; height: 0;
          border-top: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #d5dce5;
          border-left: 6px solid transparent;
          margin: 12px;
        }
        .demo-code-text {
          display: none;
          color: $blue; font-size: 14px;
        }
      }
      &:hover {
        background: #f9fafc;
        .demo-code-show {
          .demo-code-toggle {
            position: absolute; top: 7px; left: calc(50% - 48px);
            border-top: 6px solid $blue;
            border-right: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 6px solid transparent;
          }
          .demo-code-text {
            display: block;
          }
        }
        .demo-code-hide {
          .demo-code-toggle {
            position: absolute; top: 1px; left: calc(50% - 48px);
            border-top: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid $blue;
            border-left: 6px solid transparent;
          }
          .demo-code-text {
            display: block;
          }
        }
      }
    }
  }
}
</style>
