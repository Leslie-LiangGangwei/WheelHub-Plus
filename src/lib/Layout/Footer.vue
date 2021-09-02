<template>
  <div class="g-footer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.g-footer {display: flex; justify-content: center; align-items: center;}
</style>