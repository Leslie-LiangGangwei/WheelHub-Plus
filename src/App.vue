<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false);
    provide('menuVisible', menuVisible) // set
    router.afterEach(()=>{
      menuVisible.value = false
    })
  }
}
</script>
