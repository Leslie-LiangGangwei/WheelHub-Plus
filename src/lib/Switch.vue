<template>
  <button :class="{switchStatus: value}" @click="toggleSwitch">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props: {
    value: [Boolean, String]
  },
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit('update:value', !props.value)
    }
    return {toggleSwitch}
  }
}
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  outline: none;
}

button.switchStatus {
  background: blue;
}

button.switchStatus span {
  left: calc(100% - #{$h2} - 2px);
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
</style>