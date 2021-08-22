<demo>左右偏移</demo>

<template>
  <Row>
    <Col span="8"><div class="demoCol lightblue">col-8</div></Col>
    <Col span="8" offset="8"><div class="demoCol lightblue">col-8 offset-8</div></Col>
  </Row>
  <Row>
    <Col span="6" offset="6"><div class="demoCol lightblue">col-6 offset-6</div></Col>
    <Col span="6" offset="6"><div class="demoCol blue">col-6 offset-6</div></Col>
  </Row>
  <Row>
    <Col span="12" offset="6"><div class="demoCol lightblue">col-12 offset-6</div></Col>
  </Row>
</template>

<script lang="ts">
import Row from "../../../lib/Grid/Row.vue";
import Col from "../../../lib/Grid/Col.vue";

export default {
  name: "GridOffset",
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