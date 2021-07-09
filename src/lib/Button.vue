<template>
  <button class="g-button" :class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import './g.scss'
import {computed} from 'vue'

export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const {theme, size, level} = props;
      return {
        [`g-theme-${theme}`]: theme,
        [`g-size-${size}`]: size,
        [`g-level-${level}`]: level
      }
    })
    return {classes}
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;
$grey: grey;
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
  &.g-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);;
    }
  }
  &.g-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.g-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px
  }
  &.g-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.g-theme-button {
    &.g-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.g-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.g-theme-link {
    &.g-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.g-theme-text {
    &.g-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.g-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.g-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.g-theme-link, &.g-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}
</style>