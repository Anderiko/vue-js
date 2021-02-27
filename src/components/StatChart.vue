<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  name: 'StatChart',
  // Correspond à l'objet de configuration pour chart.js
  props: ['data'],
  mounted () {
    // Affiche le graphique
    this.renderChart(this.data, {responsive: true})
  }
}
</script>

<style scoped>

</style>
