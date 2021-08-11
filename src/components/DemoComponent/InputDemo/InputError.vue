<demo>错误状态</demo>

<template>
  <Input value="error" error="value is error"></Input>
</template>

<script lang="ts">
import Input from '../../../lib/Input.vue'

export default {
  name: "InputError",
  components: {Input}
}
</script>