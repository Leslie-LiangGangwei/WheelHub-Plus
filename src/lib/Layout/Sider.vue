<template>
  <div class="g-sider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sider"
}
</script>

<style lang="scss">
.g-sider {display: flex; justify-content: center; align-items: center;}
</style>