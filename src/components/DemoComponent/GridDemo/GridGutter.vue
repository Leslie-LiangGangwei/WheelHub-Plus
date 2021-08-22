<demo>区块间隔</demo>

<template>
  <Row :gutter="32">
    <Col span="6"><div class="demoCol blue">col-6</div></Col>
    <Col span="6"><div class="demoCol lightblue">col-6</div></Col>
    <Col span="6"><div class="demoCol blue">col-6</div></Col>
    <Col span="6"><div class="demoCol lightblue">col-6</div></Col>
  </Row>
  <Row :gutter="{iPhone:'0', iPad:'16', pc:'32'}">
    <Col span="6"><div class="demoCol blue">col-6</div></Col>
    <Col span="6"><div class="demoCol lightblue">col-6</div></Col>
    <Col span="6"><div class="demoCol blue">col-6</div></Col>
    <Col span="6"><div class="demoCol lightblue">col-6</div></Col>
  </Row>
</template>

<script lang="ts">
import Row from '../../../lib/Grid/Row.vue'
import Col from '../../../lib/Grid/Col.vue'

export default {
  name: "GridGutter",
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