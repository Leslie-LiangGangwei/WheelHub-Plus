<template>
  <div class="g-col" :class="[colClass, gutter]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {computed, inject, ref} from "vue";

let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    // @ts-ignore
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}

export default {
  name: "Col",
  props: {
    span: {type: [String, Number]},
    offset: {type: [String, Number]},
    iPad: {type: Object, validator},
    narrowPc: {type: Object, validator},
    pc: {type: Object, validator},
    widePc: {type: Object, validator},
    biggestWidePc: {type: Object, validator},
  },
  setup(props) {
    let gutter = ref('')
    const EventBus = inject("EventBus");
    EventBus.on('gutter', gutterValue => {
      gutter.value = gutterValue
    })
    const createClass = (obj, str = '') => {
      if (!obj) {
        return []
      }
      let array = []
      if (obj.span) {array.push(`col-${str}${obj.span}`)}
      if (obj.offset) {array.push(`offset-${str}${obj.offset}`)}
      return array
    }
    let {span, offset, iPad, narrowPc, pc, widePc, biggestWidePc} = props
    const colClass = computed(() => {
      return [
        ...createClass({span, offset}),
        ...createClass(iPad, 'iPad-'),
        ...createClass(narrowPc, 'narrow-pc-'),
        ...createClass(pc, 'pc-'),
        ...createClass(widePc, 'wide-pc-'),
        ...createClass(biggestWidePc, 'biggest-wide-pc-')
      ]
    })
    return {colClass, gutter}
  }
}
</script>

<style lang="scss">
.g-col {
  $class-prefix-device: col-;
  @for $n from 0 through 24 {
    &.#{$class-prefix-device}#{$n} {
      width: percentage($n / 24);
    }
  }
  $class-prefix-device: offset-;
  @for $n from 0 through 24 {
    &.#{$class-prefix-device}#{$n} {
      margin-left: percentage($n / 24);
    }
  }
  @media (min-width: 576px) {
    $class-prefix-device: col-iPad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-iPad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: percentage($n / 24);
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix-device: col-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: percentage($n / 24);
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix-device: col-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: percentage($n / 24);
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix-device: col-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: percentage($n / 24);
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix-device: col-biggest-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        width: percentage($n / 24);
      }
    }
    $class-prefix-device: offset-biggest-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix-device}#{$n} {
        margin-left: percentage($n / 24);
      }
    }
  }
  /* 计算 gutter 值 */
  $class-prefix-device: gutter-iPhone-;
  $class-prefix-normal: gutter-;
  @for $n from 0 through 48 {
    &.#{$class-prefix-device}#{$n} {
      padding-left: $n / 2 + px;
      padding-right: $n / 2 + px;
    }
    &.#{$class-prefix-normal}#{$n} {
      padding-left: $n / 2 + px;
      padding-right: $n / 2 + px;
    }
  }
  @media (min-width: 576px) {
    $class-prefix-device: gutter-iPad-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix-device: gutter-narrow-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix-device: gutter-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix-device: gutter-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix-device: gutter-biggest-wide-pc-;
    @for $n from 0 through 48 {
      &.#{$class-prefix-device}#{$n} {
        padding-left: $n / 2 + px;
        padding-right: $n / 2 + px;
      }
    }
  }
}
</style>