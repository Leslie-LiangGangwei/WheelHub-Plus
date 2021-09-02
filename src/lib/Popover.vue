<template>
  <div ref="popover" class="g-popover"
       @mouseenter="open"
       @mouseleave="close"
       @click="onClick">
    <div ref="content"
         v-if="visible"
         class="g-popover-content" :class="`position-${position}`">
      <slot name="content"></slot>
    </div>
    <div ref="trigger" class="g-popover-trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {nextTick, ref} from "vue";

export default {
  name: "Popover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'hover',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    },
    value: [Boolean, String],
  },
  setup(props) {
    const visible = ref(false);
    const popover = ref<HTMLDivElement>(null)
    const content = ref<HTMLDivElement>(null)
    const trigger = ref<HTMLDivElement>(null)
    const open = () => {
      if (props.trigger === 'hover') {
        visible.value = true
        contentPosition()
      }
    }
    const close = () => {
      if (props.trigger === 'hover') {
        visible.value = false
      }
    }
    const onClick = () => {
      if (props.trigger === 'click') {
        if (visible.value === true) {
          visible.value = false
        } else {
          visible.value = true
          contentPosition()
        }
      }
    }
    const popoverClose = (event) => {
      if (popover &&
          (content.value === event.target || popover.value.contains(event.target))
      ) {return}
      visible.value = false
    }
    const contentPosition = () => {
      nextTick(() => {
        const {top, left, right, bottom, height} = trigger.value.getBoundingClientRect()
        const {height: contentHeight} = content.value.getBoundingClientRect()
        document.body.appendChild(content.value)
        let positions = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX,
          },
          bottom: {
            top: bottom + window.scrollY,
            left: left + window.scrollX,
          },
          left: {
            top: (height - contentHeight) + top + window.scrollY,
            left: left + window.scrollX,
          },
          right: {
            top: (height - contentHeight) + top + window.scrollY,
            left: right + window.scrollX,
          }
        }
        content.value.style.left = positions[props.position].left + 'px'
        content.value.style.top = positions[props.position].top + 'px'
      })
    }
    document.addEventListener('click', (event) => {
      popoverClose(event)
    })
    return {visible, popover, content, trigger, open, close, onClick}
  }
}
</script>

<style scoped lang="scss">
$border-color: #d6d6d6;
$border-radius: 4px;
$font-size: 14px;
.g-popover {
  position: relative;
  display: inline-block;
}

.g-popover-content {
  z-index: 30;
  position: absolute;
  min-width: 14em; max-width: 20em;
  padding: .5em 1em;
  border: 1px solid $border-color; border-radius: $border-radius; background: white;
  font-size: $font-size; word-break: break-all;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;;
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 0; height: 0;
    border: 6px solid transparent;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &:before {
      top: 100%;
      border-top-color: $border-color;
    }
    &:after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &:before {
      bottom: 100%;
      border-bottom-color: $border-color;
    }
    &:after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &:before, &:after {
      top: 50%; transform: translateY(-50%);
    }
    &:before {
      left: 100%;
      border-left-color: $border-color;
    }
    &:after {
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &:before, &:after {
      top: 50%; transform: translateY(-50%);
    }
    &:before {
      right: 100%;
      border-right-color: $border-color;
    }
    &:after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }
}
</style>