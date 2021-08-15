<template>
  <article class="markdown-body">
    <h1>Button 按钮</h1>
    <blockquote>
      <p>常用的操作组件。</p>
    </blockquote>
    <Demo :component="ButtonNormal">
      <template v-slot:title>基础用法</template>
      <template v-slot:details>基础的按钮用法。</template>
    </Demo>
    <Demo :component="ButtonIcon">
      <template v-slot:title>图标按钮</template>
      <template v-slot:details><code>icon</code> 属性可添加图标，<code>icon-position</code> 属性可设置图标定位。</template>
    </Demo>
    <Demo :component="ButtonTheme">
      <template v-slot:title>不同类型</template>
      <template v-slot:details>通过 <code>theme</code> 属性可设置<strong>不同类型</strong>按钮。</template>
    </Demo>
    <Demo :component="ButtonSize">
      <template v-slot:title>不同尺寸</template>
      <template v-slot:details>通过 <code>size</code> 属性可设置<strong>不同尺寸</strong>按钮。</template>
    </Demo>
    <Demo :component="ButtonLevel">
      <template v-slot:title>不同优先级</template>
      <template v-slot:details>通过 <code>level</code> 属性可设置<strong>不同优先级</strong>按钮。</template>
    </Demo>
    <Demo :component="ButtonDisabled">
      <template v-slot:title>禁用状态</template>
      <template v-slot:details>通过 <code>disabled</code> 属性可设置按钮<strong>是否禁用</strong>。</template>
    </Demo>
    <Demo :component="ButtonSubmit">
      <template v-slot:title>加载中</template>
      <template v-slot:details>点击按钮后进行数据加载操作，在按钮上显示<strong>加载</strong>状态。</template>
    </Demo>
    <Demo :component="ButtonGroup">
      <template v-slot:title>按钮组</template>
      <template v-slot:details>以按钮组的方式出现，常用于多项类似操作。</template>
    </Demo>
    <Table>
      <TableTbody :td-array="['icon','图标类名','String','---','---']"></TableTbody>
      <TableTbody :td-array="['iconPosition','图标定位','String','left / right','left']"></TableTbody>
      <TableTbody :td-array="['theme','类型','String','normal / text / link','normal']"></TableTbody>
      <TableTbody :td-array="['size','尺寸','String','small / normal / big','normal']"></TableTbody>
      <TableTbody :td-array="['level', '优先级','String','main / primary / normal / danger', 'normal']"></TableTbody>
      <TableTbody :td-array="['disabled','是否禁用','Boolean','---','false']"></TableTbody>
      <TableTbody :td-array="['loading','是否为 loading 状态','Boolean','---','false']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import ButtonNormal from './DemoComponent/ButtonDemo/ButtonNormal.vue'
import ButtonIcon from './DemoComponent/ButtonDemo/ButtonIcon.vue'
import ButtonTheme from './DemoComponent/ButtonDemo/ButtonTheme.vue'
import ButtonSize from './DemoComponent/ButtonDemo/ButtonSize.vue'
import ButtonLevel from './DemoComponent/ButtonDemo/ButtonLevel.vue'
import ButtonDisabled from './DemoComponent/ButtonDemo/ButtonDisabled.vue'
import ButtonSubmit from './DemoComponent/ButtonDemo/ButtonSubmit.vue'
import ButtonGroup from './DemoComponent/ButtonDemo/ButtonGroup.vue'

export default {
  name: "ButtonDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {ButtonNormal, ButtonIcon, ButtonTheme, ButtonSize, ButtonLevel, ButtonDisabled, ButtonSubmit, ButtonGroup}
  }
}
</script>