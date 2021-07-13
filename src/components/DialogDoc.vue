<template>
  <Button @click="toggle">Dialog</Button>
  <Dialog :visible="dialogStatus"></Dialog>
</template>

<script lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

export default {
  name: "DialogDoc",
  components: {Button, Dialog},
  setup() {
    const dialogStatus = ref(false)
    const toggle = () => {
      dialogStatus.value = !dialogStatus.value
    }
    return {dialogStatus, toggle}
  }
}
</script>

<style scoped lang="scss">

</style>