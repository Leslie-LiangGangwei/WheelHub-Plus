<template>
  <article class="markdown-body">
    <h1>Switch 开关</h1>
    <blockquote>
      <p>开关选择器，可切换"开"和"关"两种状态。</p>
    </blockquote>
    <Demo :component="SwitchNormal">
      <template v-slot:title>基础用法</template>
      <template v-slot:details>通过 <code>v-model:value</code> 绑定到一个 <code>Boolean</code> 类型的变量，设置 Switch 组件初始状态（开 / 关）。</template>
    </Demo>
    <Demo :component="SwitchDisabled">
      <template v-slot:title>禁止用法</template>
      <template v-slot:details>通过 <code>disabled</code> 属性指定是否禁用 Switch 组件。</template>
    </Demo>
    <Table>
      <TableTbody :td-array="['v-model:value','绑定值（必填），绑定值为 true 或 false','Boolean','---','---']"></TableTbody>
      <TableTbody :td-array="['disabled','是否禁用','Boolean','---','false']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from  './DocComponent/TableTbody.vue'
import SwitchNormal from './DemoComponent/SwitchDemo/SwitchNormal.vue'
import SwitchDisabled from './DemoComponent/SwitchDemo/SwitchDisabled.vue'

export default {
  name: "SwitchDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {SwitchNormal, SwitchDisabled}
  }
}
</script>
