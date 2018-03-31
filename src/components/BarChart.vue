<template>
  <div>
      <h2>Bar Chart</h2>
      <button v-on:click="show">Show</button>
      <div id="chart"></div>
  </div>
</template>

<script>
import c3 from 'c3'

export default {
  name: 'BarChart',
  data: function () {
    return {
      chartData: {
        columns: [
          ['data1', 300, 100, 250, 150, 300, 150, 500],
          ['data2', 100, 200, 150, 50, 100, 250]
        ]
      }
    }
  },
  mounted: function () {
    c3.generate({
      bindto: '#chart',
      data: this.chartData
    })
  }
}
</script>

<style scoped>

</style>
