<template>
  <div id="chart"></div>
</template>

<script>
import c3 from 'c3'

export default {
  name: 'BarChart',
  props: [
    'data',
    'axes',
    'axis'
  ],
  mounted: function () {
    c3.generate({
      bindto: '#chart',
      data: this.data
    })
  }
}
</script>

<style scoped>

</style>
