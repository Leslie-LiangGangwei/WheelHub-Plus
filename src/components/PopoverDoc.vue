<template>
  <article class="markdown-body">
    <h1>Popover 气泡卡片</h1>
    <blockquote>
      <p>点击 / 鼠标移入元素，弹出气泡式的卡片浮层。</p>
    </blockquote>
    <Demo :component="PopoverNormal">
      <template v-slot:title>Hover 触发</template>
      <template v-slot:details>通过鼠标移入、聚集，弹出气泡式的卡片浮层。</template>
    </Demo>
    <Demo :component="PopoverClick">
      <template v-slot:title>Click 触发</template>
      <template v-slot:details>通过鼠标点击，弹出气泡式的卡片浮层。</template>
    </Demo>
    <Table>
      <template v-slot:subhead>
        <p style="font-size: 20px">Popover</p>
      </template>
      <TableTbody :td-array="['trigger','触发方式','String','click / hover','hover']"></TableTbody>
      <TableTbody :td-array="['position','定位','String','top / bottom / left / right','top']"></TableTbody>
    </Table>
    <Table :is-title="false">
      <template v-slot:subhead>
        <p class="subhead">Slot</p>
      </template>
      <TableTbody :td-array="['---（default）','触发 Popover 元素 / 组件（已绑定 click & mouseenter、mouseleave 事件）','---','---','---']"></TableTbody>
      <TableTbody :td-array="['content','Popover 显示的内容','---','---','---']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import PopoverNormal from './DemoComponent/PopoverDemo/PopoverNormal.vue'
import PopoverClick from './DemoComponent/PopoverDemo/PopoverClick.vue'

export default {
  name: "PopoverDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {PopoverNormal, PopoverClick}
  }
}
</script>

<style scoped lang="scss">
.title {
font-size: 22px; font-weight: 400;
margin: 55px 0 20px;
}

.subhead {
font-size: 20px;
padding-top: 20px;
}
</style>