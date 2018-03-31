<template>
  <div>
      <h2>Demo</h2>
      <bar-chart v-bind:data="data"></bar-chart>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart'

export default {
  name: 'Demo',
  data: function () {
    return {
      data: {
        columns: [
          ['data1', 300, 100, 250, 150, 300, 150, 500],
          ['data2', 100, 200, 150, 50, 100, 250]
        ]
      }
    }
  },
  components: {
    'bar-chart': BarChart
  }
}
</script>


<style scoped>

</style>
