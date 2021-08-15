<demo>图标按钮</demo>

<template>
  <Button icon="setting">图标按钮</Button>
  <Button icon="setting" icon-position="right">图标按钮</Button>
</template>

<script lang="ts">
import Button from "../../../lib/Button/Button.vue"

export default {
  name: "ButtonIcon",
  components: {Button}
}
</script>