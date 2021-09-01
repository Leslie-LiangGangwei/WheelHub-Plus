<demo>图标按钮</demo>

<template>
  <Button icon="setting">图标按钮</Button>
  <Button icon="setting" icon-position="right">图标按钮</Button>
</template>

<script lang="ts">
// @ts-ignore
import {Button} from "wheelhub-plus"

export default {
  name: "ButtonIcon",
  components: {Button}
}
</script>