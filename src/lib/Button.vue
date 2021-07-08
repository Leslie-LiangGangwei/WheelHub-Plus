<template>
  <button class="g-button" :class="`g-theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import './g.scss'

export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$font-size: 14px;
.g-button {
  display: inline-flex; justify-content: center; align-items: center;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  white-space: nowrap;
  background: white;
  color: $color; font-size: $font-size;
  border: 1px solid $border-color; border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>