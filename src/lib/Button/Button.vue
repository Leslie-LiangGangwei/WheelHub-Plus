<template>
  <button class="g-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="g-loadingIndicator"></span>
    <Icon v-if="icon && !loading" :name="icon"></Icon>
    <div class="g-button-content">
      <slot/>
    </div>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue'
import Icon from '../Icon.vue'

export default {
  name: "Button",
  components: {Icon},
  props: {
    icon: {
      type: String,
      require: true
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].indexOf(value) >= 0
      }
    },
    theme: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'text', 'link'].indexOf(value) >= 0
      }
    },
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return ['small', 'normal', 'big'].indexOf(value) >= 0
      }
    },
    level: {
      type: String,
      default: "normal",
      validator(value) {
        return ['main', 'primary', 'normal', 'danger'].indexOf(value) >= 0
      }
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    loading: {
      type: [Boolean, String],
      default: false,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const {theme, size, level, iconPosition, loading} = props;
      return {
        [`g-theme-${theme}`]: theme,
        [`g-size-${size}`]: size,
        [`g-level-${level}`]: level,
        [`g-position-${iconPosition}`]: iconPosition,
        [`g-loading`]: loading,
      }
    })
    return {classes}
  }
}
</script>

<style lang="scss">
$h: 40px;
$border-color: #d9d9d9;
$color: #333;
$blue: #2973f5;
$red: red;
$grey: grey;
$radius: 4px;
$font-size: 16px;
.g-button {
  display: inline-flex; justify-content: center; align-items: center;
  box-sizing: border-box;
  height: $h;
  padding: 8px 24px;
  cursor: pointer;
  white-space: nowrap;
  background: white;
  color: $color; font-size: $font-size;
  border: 1px solid $border-color; border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  .g-icon {margin-right: 4px; margin-left: -4px;}
  &.g-position-right {
    .g-button-content {order: 1;}
    .g-icon {order: 2;margin-left: 4px; margin-right: -4px;}
  }
  & + & {margin-left: 8px;}
  &:hover, &:focus {
    .g-icon {fill: $blue;}
    color: $blue;
    border-color: $blue;
  }
  &:focus {outline: none;}
  &::-moz-focus-inner {border: 0;}
  &.g-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover, &:focus {background: darken(white, 5%);}
  }
  &.g-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    .g-icon {fill: $blue;}
    &:hover, &:focus {
      color: lighten($blue, 10%);
      .g-icon {fill: lighten($blue, 10%);}
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
      .g-icon {fill: white;}
      border-color: $blue;
      &:hover, &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
      &.g-loading {
        color: lighten(white, 10%);
        background: lighten($blue, 20%);
        border-color: lighten($blue, 20%);
      }
      .g-loadingIndicator {
        border-color: darken(white, 10%) darken(white, 10%) darken(white, 10%) transparent;
      }
    }
    &.g-level-primary {
      background: white;
      color: $blue; border-color: $blue;
      .g-icon {fill: $blue;}
      &:hover, &:focus {
        color: darken($blue, 10%);
        .g-icon {fill: darken($blue, 10%);}
        border-color: darken($blue, 10%);
      }
    }
    &.g-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      .g-icon {fill: $blue;}
      &:hover, &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
      &.g-loading {
        color: lighten(white, 10%);
        background: lighten($red, 20%);
        border-color: lighten($red, 20%);
      }
      .g-loadingIndicator {
        border-color: darken(white, 10%) darken(white, 10%) darken(white, 10%) transparent;
      }
    }
  }
  &.g-theme-link {
    &.g-level-danger {
      color: $red;
      .g-icon {fill: $red;}
      &:hover, &:focus {
        color: darken($red, 10%);
        .g-icon {fill: darken($red, 10%);}
      }
    }
  }
  &.g-theme-text {
    &.g-level-main {
      color: $blue;
      .g-icon {fill: $blue;}
      &:hover,
      &:focus {
        color: darken($blue, 10%);
        .g-icon {fill: darken($blue, 10%);}
      }
    }
    &.g-level-danger {
      color: $red;
      .g-icon {fill: $red;}
      &:hover, &:focus {
        color: darken($red, 10%);
        .g-icon {fill: darken($red, 10%);}
      }
    }
  }
  &.g-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey; border-color: $border-color;
      background: lighten($border-color, 10%);
      &:hover, &:focus {
        color: $grey; border-color: $border-color;
        background: lighten($border-color, 10%);
      }
    }
  }
  &.g-loading {
    cursor: not-allowed;
    color: lighten($blue, 10%); border-color: lighten($blue, 10%);
  }
  .g-loadingIndicator {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8em;
    border-color: lighten($blue, 10%) lighten($blue, 10%) lighten($blue, 10%) transparent;
    border-style: solid;
    border-width: 2px;
    animation: g-spin 1s infinite linear;
  }
}

@keyframes g-spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
</style>