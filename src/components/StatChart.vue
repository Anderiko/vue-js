<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  name: 'StatChart',
  props: ['data'],
  methods: {
    update () {
      this.$data._chart.update()
    }
  },
  mounted () {
    this.renderChart(this.data, {responsive: true})
  }
}
</script>

<style scoped>

</style>
