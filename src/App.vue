<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 576);
    provide('menuVisible', menuVisible) // set
  }
}
</script>
