<template>
  <div class="g-tabs" :class="{[`g-tabs-${tabPosition}`]: tabPosition}">
    <div class="g-tabs-nav" ref="container"
         :class="{[`g-tabs-nav-${tabPosition}`]: tabPosition}">
      <div v-for="(CNode, index) in defaults"
           :key="index"
           :ref="(el) => { if(CNode.props.title === selected) selectItem = el}"
           :class="
              [CNode.props.title === selected ? 'selected' : ''] +
              [CNode.props.disabled === '' ? 'disabled' : '']"
           class="g-tabs-nav-item"
           @click="switchItem(CNode)"
      >{{ CNode.props.title }}
      </div>
      <div class="g-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="g-tabs-content" :class="{[`g-tabs-content-${tabPosition}`]: tabPosition}">
      <component :is="tabsContent" :key="tabsContent"></component>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref, onMounted, watchEffect} from 'vue'

export default {
  name: "Tabs",
  props: {
    selected: {type: String},
    tabPosition: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left'].indexOf(value) >= 0
      }
    },
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type.name !== 'TabsItem') {
        throw new Error('Tabs 子标签必须为 TabsItem')
      }
    })
    const switchItem = (CNode) => {
      if (CNode.props.disabled === "") {
        return;
      }
      context.emit('update:selected', CNode.props.title)
    }
    const tabsContent = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    const selectItem = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    onMounted(() => {
          watchEffect(() => {
            if (props.tabPosition === 'top') {
              const {width} = selectItem.value.getBoundingClientRect()
              const {left: selectItemLeft} = selectItem.value.getBoundingClientRect()
              const {left: containerItemLeft} = container.value.getBoundingClientRect()
              const left = selectItemLeft - containerItemLeft
              indicator.value.style.width = width + 'px'
              indicator.value.style.left = left + 'px'
            }
            if (props.tabPosition === 'left') {
              const {height, width} = selectItem.value.getBoundingClientRect()
              const {top: selectItemTop} = selectItem.value.getBoundingClientRect()
              const {top: containerItemTop} = container.value.getBoundingClientRect()
              const top = selectItemTop - containerItemTop
              indicator.value.style.height = height + 'px'
              indicator.value.style.left = width - 2 + 'px'
              indicator.value.style.top = top + 'px'
            }
          })
        }
    )

    return {defaults, switchItem, tabsContent, selectItem, container, indicator}
  }
}
</script>

<style lang="scss">
$blue: #2973f5;
$color: #333;
$border-color: #d9d9d9;

.g-tabs {
  flex: 1;
  &.g-tabs-left {display: flex; flex-direction: row;}
  &-nav {
    display: flex; position: relative;
    color: $color;
    border-bottom: 1px solid $border-color;
    &.g-tabs-nav-left {
      flex-direction: column;
      border-right: 1px solid $border-color;
      border-bottom: transparent;
      .g-tabs-nav-item {
        padding: 16px 32px; margin: 0;
        &.disabled {
          color: #ccc;
          cursor: not-allowed !important;
        }
        &.selected {color: $blue;}
      }
      & .g-tabs-nav-indicator {
        position: absolute;
        top: 0; left: 0;
        width: 3px;
        background: $blue;
        transition: all 250ms;
      }
    }
    &-item {
      padding: 8px 0; margin: 0 16px;
      cursor: pointer;
      &.disabled {
        color: #ccc;
        cursor: not-allowed !important;
      }
      &:first-child {margin-left: 0;}
      &.selected {color: $blue;}
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
    &.g-tabs-content-left {padding: 16px;}
  }
}
</style>