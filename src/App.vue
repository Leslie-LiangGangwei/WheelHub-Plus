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
    const bgVisible = ref<boolean>(false)
    provide('menuVisible', menuVisible) // set
    provide('bgVisible', bgVisible)
    router.afterEach(()=>{
      menuVisible.value = false
      bgVisible.value = false
    })
  }
}
</script>
