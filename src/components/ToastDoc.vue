<template>
  <article class="markdown-body">
    <h1>Toast 全局提示</h1>
    <blockquote>
      <p>全局展示操作反馈信息。</p>
    </blockquote>
    <p class="title">何时使用</p>
    <ul>
      <li>
        <p>可提供<strong>成功</strong>、<strong>警告</strong>和<strong>错误</strong>等反馈信息。</p>
      </li>
      <li>
        <p>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</p>
      </li>
    </ul>
    <Demo :component="ToastNormal">
      <template v-slot:title>基础用法</template>
      <template v-slot:details>从顶部出现，3 秒后自动消失。</template>
    </Demo>
    <Demo :component="ToastType">
      <template v-slot:title>不同状态</template>
      <template v-slot:details>用来显示「<strong>成功</strong>、<strong>警告</strong>、<strong>消息</strong>、<strong>错误</strong>」类的操作反馈。</template>
    </Demo>
    <Demo :component="ToastClose">
      <template v-slot:title>可关闭</template>
      <template v-slot:details>取消自动关闭，需要<strong>手动</strong>进行关闭</template>
    </Demo>
    <Demo :component="ToastHTML">
      <template v-slot:title>使用 HTML 片段</template>
      <template v-slot:details><code>message</code> 属性支持传入 HTML 片段</template>
    </Demo>
    <Table>
      <TableTbody :td-array="['message','消息文字','String, VNode','---','---']"></TableTbody>
      <TableTbody :td-array="['type','主题','String','success / warning / normal / error','normal']"></TableTbody>
      <TableTbody :td-array="['autoClose','是否自动关闭 / 几秒后自动关闭','Boolean, Number','---','3']"></TableTbody>
      <TableTbody :td-array="['showClose','是否显示关闭按钮','Boolean','---','false']"></TableTbody>
    </Table>
  </article>
</template>

<script lang="ts">
import Demo from './DocComponent/Demo.vue'
import Table from './DocComponent/Table.vue'
import TableTbody from './DocComponent/TableTbody.vue'
import ToastNormal from './DemoComponent/ToastDemo/ToastNormal.vue'
import ToastType from './DemoComponent/ToastDemo/ToastType.vue'
import ToastClose from './DemoComponent/ToastDemo/ToastClose.vue'
import ToastHTML from './DemoComponent/ToastDemo/ToastHTML.vue'

export default {
  name: "ToastDoc",
  components: {Demo, Table, TableTbody},
  setup() {
    return {ToastNormal, ToastType, ToastClose, ToastHTML}
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