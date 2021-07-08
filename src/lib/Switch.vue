<template>
  <button :class="{'g-switchStatus': value}" @click="toggleSwitch" class="g-switch">
    <span class="g-switch-span"></span>
  </button>
</template>

<script lang="ts">
import './g.scss'

export default {
  name: "Switch",
  props: {
    value: [Boolean, String]
  },
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit('update:value', !props.value)
    }
    return {toggleSwitch}
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.g-switch {
  position: relative;
  height: $h; width: $h*2;
  background: #bfbfbf;
  border-radius: $h/2;
  border: none;
  outline: none;
  &.g-switchStatus {background: #1890ff;}
  &.g-switchStatus span {left: calc(100% - #{$h2} - 2px);}
  &:active .g-switch-span {width: $h2 + 4px;}
  &.g-switchStatus:active .g-switch-span {width: $h2 + 4px; margin-left: -4px;}
}

.g-switch-span {
  position: absolute;top: 2px;left: 2px;
  height: $h2;width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: all 250ms;
}
</style>