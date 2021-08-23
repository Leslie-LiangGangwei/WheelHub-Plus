<demo>语法糖</demo>

<template>
  <Button @click="showDialog">Button</Button>
</template>

<script lang="ts">
import Button from "../../../lib/Button/Button.vue";
import {openDialog} from "../../../lib/Dialog/openDialog";

export default {
  name: "DialogPlugin",
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: 'Hello World',
        ok: () => {},
        cancel: () => {},
      })
    }
    return {showDialog}
  }
}
</script>