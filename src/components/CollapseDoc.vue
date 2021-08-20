<template>
  <article class="markdown-body">
    <h1>Collapse 折叠面板</h1>
    <blockquote>
      <p>可以折叠/展开的内容区域。</p>
    </blockquote>
    <Demo :component="CollapseNormal">
      <template v-slot:title>折叠面板</template>
      <template v-slot:details>可以同时展开多个面板，这个例子默认展开了第一个。</template>
    </Demo>
    <Demo :component="CollapseSingle">
      <template v-slot:title>手风琴</template>
      <template v-slot:details>手风琴模式，每次只打开一个 <code>CollapseItem</code>。</template>
    </Demo>
    <Table>
      <template v-slot:subhead>
        <p style="font-size: 20px">Collapse</p>
      </template>
      <TableTbody :td-array="['v-model:selected','绑定值为 CollapseItem 中的 title 数组','Array','---','---']"></TableTbody>
      <TableTbody :td-array="['single','是否手风琴模式','Boolean','---','false']"></TableTbody>
    </Table>
    <Table :is-title="false">
      <template v-slot:subhead>
        <p class="subhead">CollapseItem</p>
      </template>
      <TableTbody :td-array="['title','CollapseItem 标题（必填）','String','---','---']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import CollapseNormal from './DemoComponent/CollapseDemo/CollapseNormal.vue'
import CollapseSingle from './DemoComponent/CollapseDemo/CollapseSingle.vue'


export default {
  name: "CollapseDoc",
  components: {Demo, Table, TableTbody},
  setup(){
    return {CollapseNormal, CollapseSingle}
  }
}
</script>

<style scoped lang="scss">
.subhead {
  font-size: 20px;
  padding-top: 20px;
}
</style>