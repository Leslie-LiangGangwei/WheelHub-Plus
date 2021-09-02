<template>
  <article class="markdown-body">
    <h1>Layout 布局</h1>
    <blockquote>
      <p>协助进行页面整体布局。</p>
    </blockquote>
    <p class="title">设计建议</p>
    <ul>
      <li>
        <p>顶部导航（大部分系统）：一级导航高度 <code>64px</code>，二级导航 <code>48px</code></p>
      </li>
      <li>
        <p>顶部导航（展示类页面）：一级导航高度 <code>80px</code>，二级导航 <code>56px</code></p>
      </li>
      <li>
        <p>顶部导航高度的范围计算公式为：<code>48 + 8n</code></p>
      </li>
      <li>
        <p>侧边导航宽度的范围计算公式：<code>200 + 8n</code></p>
      </li>
    </ul>
    <p class="title">组件概述</p>
    <ul>
      <li>
        <p><code>Layout</code>：布局容器，其下可嵌套 <code>Header</code> <code>Sider</code> <code>Content</code> <code>Footer</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。</p>
      </li>
      <li>
        <p><code>Header</code>：顶部布局，自带默认布局，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p>
      </li>
      <li>
        <p><code>Sider</code>：侧边栏，自带默认布局，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p>
      </li>
      <li>
        <p><code>Content</code>：内容部分，自带默认布局，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p>
      </li>
      <li>
        <p><code>Footer</code>：底部布局，自带默认布局，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</p>
      </li>
    </ul>
    <Demo :component="LayoutNormal">
      <template v-slot:title>上-中-下布局</template>
      <template v-slot:details>最基本的『上-中-下』布局。</template>
    </Demo>
    <Demo :component="LayoutSider">
      <template v-slot:title>顶部-侧边布局-通栏</template>
      <template v-slot:details>同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。</template>
    </Demo>
    <Demo :component="SiderLayout">
      <template v-slot:title>固定侧边栏</template>
      <template v-slot:details>当内容较长时，使用固定侧边栏可以提供更好的体验。</template>
    </Demo>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import LayoutNormal from '../../src/components/DemoComponent/LayoutDemo/LayoutNormal.vue'
import LayoutSider from '../../src/components/DemoComponent/LayoutDemo/LayoutSider.vue'
import SiderLayout from '../../src/components/DemoComponent/LayoutDemo/SiderLayout.vue'

export default {
  name: "LayoutDoc",
  components:{Demo},
  setup(){
    return {LayoutNormal, LayoutSider, SiderLayout}
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 22px; font-weight: 400;
  margin: 55px 0 20px;
}

li {
  list-style: circle;
}
</style>