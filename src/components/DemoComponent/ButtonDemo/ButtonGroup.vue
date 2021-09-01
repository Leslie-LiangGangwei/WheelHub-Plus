<demo>按钮组</demo>

<template>
  <ButtonGroup>
    <Button icon-position="left" icon="left">上一页</Button>
    <Button icon-position="right" icon="right">下一页</Button>
  </ButtonGroup>
</template>

<script lang="ts">
// @ts-ignore
import {Button, ButtonGroup} from "wheelhub-plus"

export default {
  name: "ButtonDisabled",
  components: {Button, ButtonGroup}
}
</script>