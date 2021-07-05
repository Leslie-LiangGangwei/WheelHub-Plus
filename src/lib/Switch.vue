<template>
  <button><span></span></button>
</template>

<script lang="ts">
export default {
  name: "Switch"
}
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  height: $h;
  width: $h*2;
  border: none;
  background: blue;
  border-radius: $h/2;
  outline: none;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
}
</style>