<template>
  <div class="g-header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header"
}
</script>

<style lang="scss">
.g-header {display: flex; justify-content: center; align-items: center;}
</style>