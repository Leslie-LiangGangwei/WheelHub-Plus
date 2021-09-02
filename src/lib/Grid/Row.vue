<template>
  <div class="g-row" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, provide} from "vue";
import mitt from "mitt";

export default {
  name: "Row",
  props: {
    gutter: {
      type: [String, Number, Object]
    },
    justify: {
      type: String,
      validator: function (value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0
      }
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type.name !== 'Col') {
        throw new Error('Grid 中所有列 Col 必须放在 Row 内。')
      }
    })
    const EventBus = mitt()
    provide('EventBus', EventBus)
    const gutterStyle = (obj) => {
      if (!obj) {
        return []
      }
      if ((typeof obj) === 'string' || (typeof obj) === 'number') {
        return `gutter-${obj}`
      }
      let array = []
      // @ts-ignore
      if (obj.iPhone) {
        // @ts-ignore
        array.push(`gutter-iPhone-${obj.iPhone}`)
      }
      // @ts-ignore
      if (obj.iPad) {
        // @ts-ignore
        array.push(`gutter-iPad-${obj.iPad}`)
      }
      // @ts-ignore
      if (obj.narrowPc) {
        // @ts-ignore
        array.push(`gutter-narrow-pc-${obj.narrowPc}`)
      }
      if (obj.pc) {
        array.push(`gutter-pc-${obj.pc}`)
      }
      // @ts-ignore
      if (obj.widePc) {
        // @ts-ignore
        array.push(`gutter-wide-pc-${obj.widePc}`)
      }
      // @ts-ignore
      if (obj.biggestWidePc) {
        // @ts-ignore
        array.push(`gutter-biggest-wide-pc-${obj.biggestWidePc}`)
      }
      return array
    }
    const rowJustify = (value) => {
      if(value === undefined){
        return []
      }else {
        return ['justify-' + props.justify]
      }
    }
    const rowClass = computed(() => {
      return [
        rowJustify(props.justify),
        gutterStyle(props.gutter)
      ]
    })
    onMounted(() => {
      EventBus.emit('gutter', gutterStyle(props.gutter))
    })
    return {rowClass}
  }
}
</script>

<style lang="scss">
.g-row {
  display: flex; flex-wrap: wrap;
  &.justify-left { justify-content: flex-start; }
  &.justify-right { justify-content: flex-end; }
  &.justify-center { justify-content: center; }
  $class-prefix-device: gutter-iPhone-;
  $class-prefix-normal: gutter-;
  @for $n from 0 through 48 {
    &.#{$class-prefix-device}#{$n} {
      margin-left: - $n / 2 + px;
      margin-right: - $n / 2 + px;
    }
    &.#{$class-prefix-normal}#{$n} {
      margin-left: - $n / 2 + px;
      margin-right: - $n / 2 + px;
    }
  }
  @media (min-width: 576px) {
    $class-prefix-device: gutter-iPad-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix-device: gutter-narrow-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix-device: gutter-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix-device: gutter-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix-device: gutter-biggest-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: - $n / 2 + px;
        margin-right: - $n / 2 + px;
      }
    }
  }
}
</style>