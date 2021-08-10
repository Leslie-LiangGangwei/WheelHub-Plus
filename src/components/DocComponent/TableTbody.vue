<template>
  <tbody>
  <tr>
    <td v-for= "value in tdArray">{{ value }}</td>
  </tr>
  </tbody>
</template>

<script lang="ts">
export default {
  name: "TableTbody",
  props: {
    tdArray: {type: Array}
  }
}
</script>

<style scoped lang="scss">
td {text-align: center;}
</style>