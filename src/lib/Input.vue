<template>
  <div class="wrapper" :class="{error: error}">
    <input :type="type"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
           v-model="value"
           @input="updateValue"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import './g.scss'
import Icon from '../../src/lib/Icon.vue'

export default {
  name: "Input",
  components: {Icon},
  props: {
    value: {type: [String, Number]},
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'password', 'textarea'].indexOf(value) >= 0
      }
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String
    }
  },
  setup(props, context) {
    const updateValue = () => {
      context.emit('update:value', props.value)
    }
    return {updateValue}
  }
}
</script>

<style scoped lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #2973f5;
;
$border-color-disabled: #bbb;
$border-radius: 4px;
$font-size: 12px;
$color: #252525;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453D;
$placeholder-color: #ccc;
.wrapper {
  display: inline-flex; align-items: center; justify-content: center;
  :not(:last-child) {margin-right: .5em}
  input {
    color: $color;
    height: $height;
    border: 1px solid $border-color; border-radius: $border-radius;
    padding: 0 8px;
    font-size: $font-size;
    &:hover {border: 1px solid $border-color-hover;}
    &:focus {
      box-shadow: $box-shadow-color;
      border-color: $border-color-hover;
      outline: none;
    }
    &:disabled {
      border-color: $border-color-disabled; color: $border-color-disabled;
      cursor: not-allowed;
    }
    &:read-only { border-color: $border-color-disabled; color: $color;}
    &::placeholder {
      color: $placeholder-color;
      font-size: $font-size;
    }
  }
  &.error {
    input {border-color: $red;}
    .icon-error {fill: $red;}
    .errorMessage {color: $red;}
  }
}
</style>