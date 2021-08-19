<template>
  <article class="markdown-body">
    <h1>Collapse 折叠面板</h1>
    <blockquote>
      <p>常可以折叠/展开的内容区域。</p>
    </blockquote>
    <Demo :component="CollapseNormal">
      <template v-slot:title>折叠面板</template>
      <template v-slot:details>可以同时展开多个面板，这个例子默认展开了第一个。</template>
    </Demo>
    <Demo :component="CollapseSingle">
      <template v-slot:title>折叠面板</template>
      <template v-slot:details>可以同时展开多个面板，这个例子默认展开了第一个。</template>
    </Demo>
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
