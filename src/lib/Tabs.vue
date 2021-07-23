<template>
  <div class="g-tabs">
    <div class="g-tabs-nav">
      <div class="g-tabs-nav-item"
           v-for="(t, index) in titles"
           :class="{selected: selected === t}"
           @click="switchItem(t)"
           :key="index">{{ t }}
      </div>
    </div>
    <div class="g-tabs-content">
      <div class="g-tabs-content-item">
        <component v-for="(d, index) in defaults" :is="d" :key="index"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TabsItem from './TabsItem.vue'

export default {
  name: "Tabs",
  props: {
    selected: {type: String}
  },
  setup: function (props, context) {
    // @ts-ignore
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type.name !== 'TabsItem') {
        throw new Error('Tabs 子标签必须是 TabsItem')
      }
    })
    const titles = defaults.map((tag) => {
      // @ts-ignore
      return tag.props.title
    })
    const switchItem = (title) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, switchItem}
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
  }
  &-content {
    padding: 8px 0;
  }
}
</style>