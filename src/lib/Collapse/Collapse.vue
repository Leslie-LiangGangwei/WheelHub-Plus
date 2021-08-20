<template>
  <div class="g-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {onMounted, provide} from "vue";
import mitt from "mitt";

export default {
  name: "Collapse",
  props: {
    selected: {
      type: Array,
      default: function () {
        return []
      }
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const EventBus = mitt()
    provide('EventBus', EventBus)
    let selectedCopy = JSON.parse(JSON.stringify(props.selected))
    onMounted(() => {
      // @ts-ignore
      EventBus.emit('update:selected', selectedCopy)
    })

    // @ts-ignore
    EventBus.on('update:addSelected', value => {
      if (props.single) {
        selectedCopy = [value]
      } else {
        selectedCopy.push(value)
      }
      // @ts-ignore
      EventBus.emit('update:selected', selectedCopy)
      context.emit('update:selected', selectedCopy)
    })

    // @ts-ignore
    EventBus.on('update:removeSelected', value => {
      let index = value.indexOf(selectedCopy)
      selectedCopy.splice(index, 1)
      // @ts-ignore
      EventBus.emit('update:selected', selectedCopy)
      context.emit('update:selected', selectedCopy)
    })
  }
}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;

.g-collapse {
  width: 100%;
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>