<template>
  <div class="g-tabs">
    <div class="g-tabs-nav" ref="container">
      <div v-for="(t, index) in titles"
           :key="index"
           :ref="(el) => { if(t === selected) selectItem = el}"
           :class="{selected: selected === t}"
           class="g-tabs-nav-item"
           @click="switchItem(t)"
      >{{ t }}
      </div>
      <div class="g-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="g-tabs-content">
      <component :is="tabsContent" :key="tabsContent"></component>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref, onMounted, watchEffect} from 'vue'
import TabsItem from './TabsItem.vue'

export default {
  name: "Tabs",
  props: {
    selected: {type: String}
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type.name !== 'TabsItem') {
        throw new Error('Tabs 子标签必须为 TabsItem')
      }
    })
    const titles = defaults.map((tag) => {
      // @ts-ignore
      return tag.props.title
    })
    const switchItem = (title) => {
      context.emit('update:selected', title)
    }
    const tabsContent = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    const selectItem = ref<HTMLDivElement>(null)

    const container = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    onMounted(() => {
      watchEffect(() => {
        const {width} = selectItem.value.getBoundingClientRect()
        const {left: selectItemLeft} = selectItem.value.getBoundingClientRect()
        const {left: containerItemLeft} = container.value.getBoundingClientRect()
        const left = selectItemLeft - containerItemLeft
        indicator.value.style.width = width + 'px'
        indicator.value.style.left = left + 'px'
      })
    })
    return {defaults, titles, switchItem, tabsContent, selectItem, container, indicator}
  }
}
</script>

<style lang="scss">
$blue: #2973f5;
$color: #333;
$border-color: #d9d9d9;

.g-tabs {
  &-nav {
    display: flex;
    position: relative;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      bottom: -1px; left: 0;
      height: 3px; width: 100px;
      background: $blue;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>