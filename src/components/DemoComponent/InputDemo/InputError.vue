<demo>错误状态</demo>

<template>
  <Input value="error" error="value is error"></Input>
</template>

<script lang="ts">
// @ts-ignore
import {Input} from "wheelhub-plus"

export default {
  name: "InputError",
  components: {Input}
}
</script>