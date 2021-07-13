<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行</p>
      <p>第二行</p>
    </main>
    <footer>
      <Button>yes</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import './g.scss'
import Button from '../lib/Button.vue'

export default {
  name: "Dialog",
  components: {Button}
}
</script>

<style lang="scss">

</style>