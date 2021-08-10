<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">

export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss">
$color: #1c1c1c;

.g-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.2em;
  fill: $color;
}
</style>