<demo>实现 v-model 双向绑定</demo>

<template>
  <Input v-model:value="inputValue"></Input>
  <p style="margin-top: 16px">{{inputValue}}</p>
</template>

<script lang="ts">
import Input from '../../../lib/Input.vue'
import {ref} from "vue";

export default {
  name: "InputModel",
  components: {Input},
  setup(){
    const inputValue = ref('实现 v-model 双向绑定')
    return {inputValue}
  }
}
</script>