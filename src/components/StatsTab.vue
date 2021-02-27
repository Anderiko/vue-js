<template>
  <div class="mt-5">
    <h3 class="text-start mb-4">Statistiques</h3>
    <hr>
    <StatNumbers v-bind:spellArray="spellArray" v-bind:searchData="searchData"/>
    <div class="row">
      <div class="col-md-6">
        <h5>Nombre de sorts par livre :</h5>
        <StatChart :data="chartSpellsPerBooks"/>
      </div>
      <div class="col-md-6">
        <h5>Nombre de sorts par école :</h5>
        <StatChart :data="chartSpellsPerSchools"/>
      </div>
    </div>
  </div>
</template>

<script>
import StatChart from './StatChart'
import StatNumbers from './StatNumbers'

export default {
  name: 'StatsTab',
  components: {StatNumbers, StatChart},
  props: ['spellArray', 'searchData'],
  data () {
    return {
      chartSpellsPerBooks: getData(this.spellArray, 0),
      chartSpellsPerSchools: getData(this.spellArray, 2)
    }
  }
}

function getData (array, index) {
  let label = []
  let colors = []
  let data = []
  let id

  array.forEach((elt) => {
    id = label.indexOf(elt[index])

    if (id === -1) {
      label.push(elt[index])
      data.push(1)
    } else {
      data[id]++
    }
  })

  label.forEach(() => {
    let r = Math.floor(Math.random() * (50 - 20) + 20).toString(16)
    let g = Math.floor(Math.random() * (200 - 100) + 100).toString(16)
    let b = Math.floor(Math.random() * (255 - 201) + 201).toString(16)
    colors.push('#' + r + g + b)
  })

  return {
    labels: label,
    datasets: [{
      backgroundColor: colors,
      data: data
    }]
  }
}
</script>

<style scoped>

</style>
