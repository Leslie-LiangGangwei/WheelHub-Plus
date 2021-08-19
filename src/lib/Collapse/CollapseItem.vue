<template>
  <div class="g-collapse-item">
    <div class="g-title" :title-name="title" @click="toggle">
      {{ title }}
      <Icon name="right" :class="{'rotate-icon': showed}"></Icon>
    </div>
    <div class="g-panel" v-if="showed" :panel-name="title">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '../../lib/Icon.vue'
import {ref, inject} from "vue";

export default {
  name: "CollapseItem",
  components: {Icon},
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const showed = ref(false)
    const EventBus = inject("EventBus");

    // @ts-ignore
    EventBus.on('update:selected', selected => {
      showed.value = selected.indexOf(props.title) >= 0
    })

    const toggle = () => {
      if (showed.value === true) {
        // @ts-ignore
        EventBus.emit('update:removeSelected', props.title)
      } else {
        // @ts-ignore
        EventBus.emit('update:addSelected', props.title)
      }
    }
    return {showed, toggle}
  }
}
</script>

<style scoped lang="scss">
$font-size: 16px;
$background: #EFEFF4;
$grey: #ddd;
$border-radius: 4px;
.g-collapse-item {
  .g-title {
    display: flex; align-items: center;
    min-height: 52px; padding-left: 16px;margin: -1px;
    background: $background;
    border: 1px solid $grey;
    .g-icon {
      fill: #7d7e7f;
      margin-left: 8px;
      &.rotate-icon {
        transform: rotate(90deg);
      }
    }
  }
  &:first-child {
    .g-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .g-title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .g-panel {
    padding: 16px; font-size: $font-size;
  }
}
</style>