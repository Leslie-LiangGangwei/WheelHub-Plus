<template>
  <article class="markdown-body">
    <h1>Dialog 对话框</h1>
    <blockquote>
      <p>模态对话框。</p>
    </blockquote>
    <p class="title">何时使用</p>
    <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <code>Dialog</code> 在当前页面正中打开一个浮层，承载相应的操作。</p>
    <p>另外当需要一个简洁的确认框询问用户时，可以使用 <code>openDialog</code> 语法糖方法。</p>
    <Demo :component="DialogNormal">
      <template v-slot:title>基本用法</template>
      <template v-slot:details>点击按钮，展示 <code>Dialog</code> 对话框</template>
    </Demo>
    <Demo :component="DialogPlugin">
      <template v-slot:title>语发糖用法</template>
      <template v-slot:details>使用 <code>openDialog</code> 语法糖方法。</template>
    </Demo>
    <Table>
      <template v-slot:subhead>
        <p style="font-size: 20px">Dialog</p>
      </template>
      <TableTbody :td-array="['v-model:visible','绑定值为是否显示 Dialog','Boolean','---','---']"></TableTbody>
      <TableTbody :td-array="['onClickOverlay','点击背景是否隐藏 Dialog','Boolean','---','true']"></TableTbody>
      <TableTbody :td-array="['ok','绑定点击 yes 按钮执行方法','Function','---','---']"></TableTbody>
      <TableTbody :td-array="['cancel','绑定点击 Cancel 按钮执行方法','Function','---','---']"></TableTbody>
    </Table>
    <Table :is-title="false">
      <template v-slot:subhead>
        <p class="subhead">Slot</p>
      </template>
      <TableTbody :td-array="['title','Dialog 标题区的内容','---','---','---']"></TableTbody>
      <TableTbody :td-array="['content','Dialog 按钮操作区的内容','---','---','---']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import DialogNormal from '../../src/components/DemoComponent/DialogDemo/DialogNormal.vue'
import DialogPlugin from '../../src/components/DemoComponent/DialogDemo/DialogPlugin.vue'

export default {
  name: "DialogDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {DialogNormal, DialogPlugin}
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