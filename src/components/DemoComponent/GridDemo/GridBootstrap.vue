<demo>响应式布局</demo>

<template>
  <Row>
    <Col span="6" :iPad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol blue">col-iPhone-6 col-iPad-8 col-pc-24</div></Col>
    <Col span="6" :iPad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol lightblue">col-iPhone-6 col-iPad-8 col-pc-24</div></Col>
    <Col span="6" :iPad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol blue">col-iPhone-6 col-iPad-8 col-pc-24</div></Col>
    <Col span="6" :iPad="{span:'8'}" :pc="{span: '24'}"><div class="demoCol lightblue">col-iPhone-6 col-iPad-8 col-pc-24</div></Col>
  </Row>
</template>

<script lang="ts">
// @ts-ignore
import {Row, Col} from "wheelhub-plus"

export default {
  name: "GridBootstrap",
  components: {Row, Col}
}
</script>

<style scoped lang="scss">
.demoCol {
  min-height: 30px; margin-top: 8px; margin-bottom: 8px;
  padding: 16px 0;
  color: #fff; text-align: center;
  &.blue {background: #0092fa;}
  &.lightblue {background: #15adfb;}
}
</style>