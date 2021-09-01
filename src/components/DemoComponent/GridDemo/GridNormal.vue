<demo>基础栅格</demo>

<template>
  <Row>
    <Col span="24"><div class="demoCol lightblue">col-24</div></Col>
  </Row>
  <Row>
    <Col span="12"><div class="demoCol lightblue">col-12</div></Col>
    <Col span="12"><div class="demoCol blue">col-12</div></Col>
  </Row>
  <Row>
    <Col span="8"><div class="demoCol lightblue">col-8</div></Col>
    <Col span="8"><div class="demoCol blue">col-8</div></Col>
    <Col span="8"><div class="demoCol lightblue">col-8</div></Col>
  </Row>
  <Row>
    <Col span="6"><div class="demoCol lightblue">col-6</div></Col>
    <Col span="6"><div class="demoCol blue">col-6</div></Col>
    <Col span="6"><div class="demoCol lightblue">col-6</div></Col>
    <Col span="6"><div class="demoCol blue">col-6</div></Col>
  </Row>
</template>

<script lang="ts">
// @ts-ignore
import {Row, Col} from "wheelhub-plus"

export default {
  name: "GridNormal",
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