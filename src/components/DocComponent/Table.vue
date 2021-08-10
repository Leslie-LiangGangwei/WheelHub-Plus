<template>
  <p class="title">Attributes</p>
  <table>
    <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    </thead>
    <slot></slot>
  </table>
</template>

<script lang="ts">

export default {
  name: "Table"
}
</script>

<style scoped lang="scss">
.title {
  font-size: 22px; font-weight: 400;
  margin: 55px 0 20px;
}

table {display: table !important;}
</style>