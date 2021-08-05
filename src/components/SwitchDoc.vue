<template>
  <article class="markdown-body">
    <h1>Switch 开关</h1>
    <blockquote>
      <p>开关选择器，可切换"开"和"关"两种状态</p>
    </blockquote>
    <Demo :component="SwitchNormal">
      <template v-slot:title>基础用法</template>
      <template v-slot:details>最简单的用法。</template>
    </Demo>
    <Demo :component="SwitchDisabled">
      <template v-slot:title>禁止用法</template>
      <template v-slot:details>Switch 失效状态。</template>
    </Demo>
  </article>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue'
import SwitchNormal from '../components/SwitchDemo/SwitchNormal.vue'
import SwitchDisabled from '../components/SwitchDemo/SwitchDisabled.vue'

export default {
  name: "SwitchDoc",
  components: {Demo},
  setup() {
    return {SwitchNormal, SwitchDisabled}
  }
}
</script>