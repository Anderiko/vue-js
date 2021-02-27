<template>
  <div class="row">
    <div class="col-md-3">
      <h5>Nombre de sorts : <br><strong>{{ searchData.all.length }}</strong></h5>
    </div>
    <div class="col-md-3">
      <h5>Nombre d'écoles : <br><strong>{{ searchData.schoolSearch.length }}</strong></h5>
    </div>
    <div class="col-md-3">
      <h5>Nombre de classes : <br><strong>{{ searchData.classSearch.length }}</strong></h5>
    </div>
    <div class="col-md-3">
      <h5>Nombre de livres : <br><strong>{{ books().length }}</strong></h5>
    </div>
    <hr>
  </div>
</template>

<script>
import {extract} from '../mixins/mixin'

export default {
  name: 'StatNumbers',
  // contient la fonction d'extraction ainsi qu'un filtre d'unicité
  mixins: [extract],
  // searchData correspond aux données de recherche
  props: ['searchData'],
  methods: {
    // récupère les livres
    books () {
      return this.extract(0, this.searchData.all)
    }
  }
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
