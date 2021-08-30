<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import '../g.scss'

export default {
  name: "ButtonGroup",
  setup(props, context){
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type.name !== 'Button') {
        throw new Error('ButtonGroup 子标签必须为 Button')
      }
    })
  }
}
</script>

<style lang="scss">
$blue: #2973f5;
$border-radius: 4px;

.g-button-group {
  display: flex;
  .g-button {
    border-radius: 0;
    &:not(:first-child) {margin-left: -1px;}
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover ,&:focus{
      z-index: 1;
      border-color: $blue
    }
  }
}
</style>