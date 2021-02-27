<template>
  <div class="row">
    <div class="col-md-3">
      <h5>Nombre de sorts : <br><strong>{{ spellArray.length }}</strong></h5>
    </div>
    <div class="col-md-3">
      <h5>Nombre d'écoles : <br><strong>{{ searchData.schoolSearch.length }}</strong></h5>
    </div>
    <div class="col-md-3">
      <h5>Nombre de classes : <br><strong>{{ searchData.classSearch.length }}</strong></h5>
    </div>
    <div class="col-md-3">
      <h5>Nombre de livres : <br><strong>{{ extract(0, spellArray).length }}</strong></h5>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'StatNumbers',
  props: ['spellArray', 'searchData'],
  methods: {
    extract (index, array) {
      return extract(index, array)
    }
  }
}

function unique (currElt, index, array) {
  return array.indexOf(currElt) === index
}

function extract (index, array) {
  let temp = []

  array.forEach((elt) => {
    temp.push(elt[index])
  })

  return temp.filter(unique).sort()
}
</script>

<style scoped>
  .row {
    margin: 2em 0 auto;
  }

  hr {
    margin-top: 1em;
  }
</style>
