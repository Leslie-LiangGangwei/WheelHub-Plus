<demo>语法糖</demo>

<template>
  <Button @click="showDialog">Button</Button>
</template>

<script lang="ts">
// @ts-ignore
import {Button, openDialog} from "wheelhub-plus"

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