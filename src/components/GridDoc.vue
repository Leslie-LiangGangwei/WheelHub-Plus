<template>
  <article class="markdown-body">
    <h1>Grid 栅格</h1>
    <blockquote>
      <p>24 栅格系统。</p>
    </blockquote>
    <p class="title">概述</p>
    <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
    <ul>
      <li>
        <p>通过 <code>row</code> 在水平方向建立一组 <code>column</code>（简写 col）。</p>
      </li>
      <li>
        <p>你的内容应当放置于 <code>col</code> 内，并且，只有 <code>col</code> 可以作为 <code>row</code> 的直接元素。</p>
      </li>
      <li>
        <p>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <code><</code><code> Col span={8} /></code> 来创建。</p>
      </li>
    </ul>
    <Demo :component="GridNormal">
      <template v-slot:title>基础栅格</template>
      <template v-slot:details>从堆叠到水平排列。所有列（Col）必须放在 <code>Row</code> 内。</template>
    </Demo>
    <Demo :component="GridGutter">
      <template v-slot:title>间隔栅格</template>
      <template v-slot:details>栅格常常需要和间隔进行配合，你可以使用 <code>Row</code> 的 <code>gutter</code> 属性，我们推荐使用 <code>(16+8n)px</code> 作为栅格间隔(n 是自然数)。
       <p>如果要支持响应式，可以写成 <code>{ iPhone:'0', iPad:'32', pc:'8' }</code>。</p></template>
    </Demo>
    <Demo :component="GridOffset">
      <template v-slot:title>左右偏移</template>
      <template v-slot:details>使用 <code>offset</code> 可以将列向右侧偏。例如，<code>offset='4'</code> 将元素向右侧偏移了 4 个列（column）的宽度。</template>
    </Demo>
    <Demo :component="GridBootstrap">
      <template v-slot:title>响应式布局</template>
      <template v-slot:details>可设置多个屏幕尺寸，预设五个响应尺寸：<code>iPhone</code> <code>iPad</code> <code>pc</code> <code>widePc</code> <code>biggestWidePc</code></template>
    </Demo>
    <Table>
      <template v-slot:subhead>
        <p style="font-size: 20px">Row</p>
      </template>
      <TableTbody :td-array="['gutter','栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { iPhone:\'0\', iPad:\'32\', pc:\'8\' }。','String, Number, Object','---','---']"></TableTbody>
      <TableTbody :td-array="['justify','水平排列方式','String','left / right / center','---']"></TableTbody>
    </Table>
    <Table :is-title="false">
      <template v-slot:subhead>
        <p class="subhead">Col</p>
      </template>
      <TableTbody :td-array="['span','栅格占位格数（默认为：iPhone 尺寸 <576px)','String, Number','---','---']"></TableTbody>
      <TableTbody :td-array="['offset','栅格左侧间隔格数（默认为：iphone 尺寸 <576px)','String, Number','---','---']"></TableTbody>
      <TableTbody :td-array="['iPad','屏幕 >= 576px，设置 span 和 offset 的对象','Object','---','---']"></TableTbody>
      <TableTbody :td-array="['pc','屏幕 >= 992px，设置 span 和 offset 的对象','Object','---','---']"></TableTbody>
      <TableTbody :td-array="['widePc','屏幕 >= 1200px，设置 span 和 offset 的对象','Object','---','---']"></TableTbody>
      <TableTbody :td-array="['biggestWidePc','屏幕 >= 1600px，设置 span 和 offset 的对象','Object','---','---']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import GridNormal from '../../src/components/DemoComponent/GridDemo/GridNormal.vue'
import GridGutter from '../../src/components/DemoComponent/GridDemo/GridGutter.vue'
import GridOffset from '../../src/components/DemoComponent/GridDemo/GridOffset.vue'
import GridBootstrap from '../../src/components/DemoComponent/GridDemo/GridBootstrap.vue'

export default {
  name: "GridDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {GridNormal, GridGutter, GridOffset, GridBootstrap}
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

.subhead {
  font-size: 20px;
  padding-top: 20px;
}
</style>