<template>
  <article class="markdown-body">
    <h1>Tabs 标签页</h1>
    <blockquote>
      <p>选项卡切换组件。</p>
    </blockquote>
    <Demo :component="TabsNormal">
      <template v-slot:title>基础</template>
      <template v-slot:details>默认选中第一项。</template>
    </Demo>
    <Demo :component="TabsDisabled">
      <template v-slot:title>禁用</template>
      <template v-slot:details>通过 <code>disabled</code> 属性可禁用某一项。</template>
    </Demo>
    <Demo :component="TabPosition">
      <template v-slot:title>垂直布局</template>
      <template v-slot:details>通过 <code>tab-position</code> 属性可设置<strong>横向</strong> / <strong>垂直</strong>布局。</template>
    </Demo>
    <Table>
      <template v-slot:subhead>
        <p style="font-size: 20px">Tabs</p>
      </template>
      <TableTbody :td-array="['v-model:selected','绑定值（必填）为选中选项卡的 title','String','---','---']"></TableTbody>
      <TableTbody :td-array="['tab-position','横向 / 垂直布局','String','top / left','top']"></TableTbody>
    </Table>
    <Table :is-title="false">
      <template v-slot:subhead>
        <p class="subhead">TabsItem</p>
      </template>
      <TableTbody :td-array="['title','与选项卡绑定值 selected 对应的标识符，表示选项卡别名','String','---','---']"></TableTbody>
      <TableTbody :td-array="['disabled','是否禁用','Boolean','---','false']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import TabsNormal from './DemoComponent/TabsDemo/TabsNormal.vue'
import TabsDisabled from './DemoComponent/TabsDemo/TabsDisabled.vue'
import TabPosition from './DemoComponent/TabsDemo/TabPosition.vue'

export default {
  name: "TabsDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {TabsNormal, TabsDisabled, TabPosition}
  }
}
</script>

<style scoped lang="scss">
.subhead {
  font-size: 20px;
  padding-top: 20px;
}
</style>