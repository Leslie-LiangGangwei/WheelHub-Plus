<template>
  <div class="g-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Content"
}
</script>

<style lang="scss">
.g-content {display: flex; justify-content: center; align-items: center;}
</style>