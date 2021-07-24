<template>
  <div class="g-tabs">
    <div class="g-tabs-nav" ref="container">
      <div class="g-tabs-nav-item"
           v-for="(t, index) in titles"
           :class="{selected: selected === t}"
           @click="switchItem(t)"
           :ref="(el) => navItem[index] = el"
           :key="index"
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
import {computed, ref, onMounted, onUpdated} from 'vue'
import TabsItem from './TabsItem.vue'

export default {
  name: "Tabs",
  props: {
    selected: {type: String}
  },
  setup: function (props, context) {
    const navItem = ref<HTMLElement[]>([])
    const container = ref<HTMLElement[]>(null)
    const indicator = ref<HTMLElement[]>(null)
    const x = () => {
      const selectItem = navItem.value.find(div => div.classList.contains('selected'))
      const {width} = selectItem.getBoundingClientRect()
      const {left: selectItemLeft} = selectItem.getBoundingClientRect()
      // @ts-ignore
      const {left: containerItemLeft} = container.value.getBoundingClientRect()
      const left = selectItemLeft - containerItemLeft
      // @ts-ignore
      indicator.value.style.width = width + 'px'
      // @ts-ignore
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)
    // @ts-ignore
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

    return {defaults, titles, switchItem, tabsContent, navItem, container, indicator}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
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