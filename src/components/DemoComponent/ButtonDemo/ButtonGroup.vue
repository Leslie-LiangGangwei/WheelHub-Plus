<demo>按钮组</demo>

<template>
  <ButtonGroup>
    <Button icon-position="left" icon="left">上一页</Button>
    <Button icon-position="right" icon="right">下一页</Button>
  </ButtonGroup>
</template>

<script lang="ts">
import Button from "../../../lib/Button/Button.vue"
import ButtonGroup from "../../../lib/Button/ButtonGroup.vue"

export default {
  name: "ButtonDisabled",
  components: {Button, ButtonGroup}
}
</script>