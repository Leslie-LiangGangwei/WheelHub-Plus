<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="wrapper">
        <div class="g-toast" :class="toastClass">
          <div class="text">
            <Icon :name="type"></Icon>
            <div class="text-wrapper">
              <slot name="message"></slot>
            </div>
          </div>
          <span v-if="showClose" class="g-toast-close" @click="clickToastButton"></span>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Icon from '../Icon.vue'
import {computed, onMounted} from "vue";

export default {
  name: "Toast",
  components: {Icon},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'normal'
    },
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator: function (value) {
        return value === false || typeof value === 'number';
      }
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toastClass = computed(() => {
      if (props.type === 'normal') {
        return
      } else {
        return {[`g-toast-${props.type}`]: props.type}
      }
    })
    const clickToastButton = () => {
      context.emit('update:visible', false)
    }
    onMounted(() => {
      if (props.autoClose) {
        setTimeout(() => {
          clickToastButton()
        }, props.autoClose * 1000)
      }
    })
    return {toastClass, clickToastButton}
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-width: 420px;
$animation-duration: 600ms;
$font-normal-color: #909399;
$toast-normal-bg: #f4f4f5;
$toast-normal-border: #e9e9eb;
$font-success-color: #6ebf4a;
$toast-success-bg: #f0f8ec;
$toast-success-border: #e2f2da;
$font-warning-color: #e5a04c;
$toast-warning-bg: #fdf6ed;
$toast-warning-border: #faebda;
$font-error-color: #f26e70;
$toast-error-bg: #fef0f0;
$toast-error-border: #fce2e2;

@keyframes slide-down {
  0% {opacity: 0; transform: translateY(-100%)}
  100% {opacity: 1; transform: translateY(0%)}
}

.wrapper {
  z-index: 30;
  position: fixed; top: 32px; left: 50%; transform: translateX(-50%);
  .g-toast {
    font-size: $font-size; line-height: 1.8;
    min-height: $toast-min-height; width: $toast-width;
    display: flex; align-items: center; justify-content: space-between;
    border-radius: 4px; border: $toast-normal-border 1px solid;
    color: $font-normal-color; background: $toast-normal-bg;
    animation: slide-down $animation-duration;
    .text {
      display: flex; align-items: center;
      padding: 12px 24px;
      .text-wrapper {
        width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .g-icon {
        fill: $font-normal-color;
        width: 1.2em; height: 1.2em;
        margin-right: 12px;
      }
    }
    .g-toast-close {
      position: relative; display: inline-block;
      margin-right: 16px;
      width: 16px; height: 16px;
      cursor: pointer;
      &::before,
      &::after {
        content: '';
        position: absolute; top: 50%; left: 50%;
        height: 1px; width: 100%;
        background: $font-normal-color;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
    &.g-toast-success {
      color: $font-success-color; background: $toast-success-bg; border-color: $toast-success-border;
      .g-icon {fill: $font-success-color}
    }
    &.g-toast-warning {
      color: $font-warning-color; background: $toast-warning-bg; border-color: $toast-warning-border;
      .g-icon {fill: $font-warning-color}
    }
    &.g-toast-error {
      color: $font-error-color; background: $toast-error-bg; border-color: $toast-error-border;
      .g-icon {fill: $font-error-color}
    }
  }
}
</style>