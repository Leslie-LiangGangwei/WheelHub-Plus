<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
import md from '../markdown/intro.md';

export default {
  name: "Intro",
  setup() {
    return {md}
  }
}
</script>