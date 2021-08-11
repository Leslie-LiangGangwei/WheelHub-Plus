<template>
  <article class="markdown-body">
    <h1>Input 输入框</h1>
    <blockquote>
      <p>通过鼠标或键盘输入字符</p>
    </blockquote>
    <Demo :component="InputNormal">
      <template v-slot:title>基础用法</template>
      <template v-slot:details>最简单的用法。</template>
    </Demo>
    <Demo :component="InputPassword">
      <template v-slot:title>密码框</template>
      <template v-slot:details>使用 <code>type="password"</code> 属性即可得到一个可隐藏内容的密码框。</template>
    </Demo>
    <Demo :component="InputDisabled">
      <template v-slot:title>禁用状态</template>
      <template v-slot:details>通过 <code>disabled</code> 属性指定是否禁用 Input 组件。</template>
    </Demo>
    <Demo :component="InputReadonly">
      <template v-slot:title>可读状态</template>
      <template v-slot:details>通过 <code>readonly</code> 属性指定 Input 组件状态是否可读。</template>
    </Demo>
    <Demo :component="InputError">
      <template v-slot:title>错误状态</template>
      <template v-slot:details>若 <code>error</code> 绑定一个 <code>String</code> 类型的变量，则指定 Input 组件为错误状态，并显示<strong>绑定值</strong>（错误提示）。</template>
    </Demo>
    <Demo :component="InputModel">
      <template v-slot:title>数据双向绑定</template>
      <template v-slot:details>通过 <code>v-model:value</code> 绑定一个 <code>String</code> 类型的变量，可实现数据双向同步。</template>
    </Demo>
    <Table>
      <TableTbody :td-array="['value / v-model:value','绑定值，对应 Input 输入框的值（支持数据双向绑定）','String','---','---']"></TableTbody>
      <TableTbody :td-array="['type','类型','String','text / password / textarea','text']"></TableTbody>
      <TableTbody :td-array="['placeholder','占位符	','String','---','请输入内容']"></TableTbody>
      <TableTbody :td-array="['disabled','是否禁用','Boolean','---','false']"></TableTbody>
      <TableTbody :td-array="['readonly','是否可读','Boolean','---','false']"></TableTbody>
      <TableTbody :td-array="['error','是否错误提示','String','---','false']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import InputNormal from './DemoComponent/InputDemo/InputNormal.vue'
import InputPassword from './DemoComponent/InputDemo/InputPassword.vue'
import InputDisabled from './DemoComponent/InputDemo/InputDisabled.vue'
import InputReadonly from './DemoComponent/InputDemo/InputReadonly.vue'
import InputError from './DemoComponent/InputDemo/InputError.vue'
import InputModel from './DemoComponent/InputDemo/InputModel.vue'


export default {
  name: "InputDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {InputNormal, InputDisabled, InputReadonly, InputPassword, InputError, InputModel}
  }
}
</script>