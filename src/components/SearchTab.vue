<template>
  <div class="mt-5">
    <h3 class="text-start mb-4">Recherche</h3>
    <hr>
    <SearchName v-model="searchName"/>
    <div class="searchInputs row mt-2">
      <SearchSelect v-if="config.check.schoolSearch" v-model="schoolSearch" v-bind:array="searchData.schoolSearch" v-bind:label="'École'"/>
      <SearchSelect v-if="config.check.elementSearch" v-model="elementSearch" v-bind:array="searchData.elementSearch" v-bind:label="'Élément'"/>
      <SearchSelect v-if="config.check.classSearch" v-model="classSearch" v-bind:array="searchData.classSearch" v-bind:label="'Classe'"/>
      <SearchSelect v-if="config.check.levelSearch" v-model="levelSearch" v-bind:array="searchData.levelSearch" v-bind:label="'Niveau'"/>
    </div>
    <SearchResult v-bind:results="results"/>
  </div>
</template>

<script>
import SearchResult from './SearchResult'
import SearchSelect from './SearchSelect'
import SearchName from './SearchName'

export default {
  name: 'SearchTab',
  components: {SearchName, SearchSelect, SearchResult},
  // searchdata est le tableau avec les différentes données de recherche
  // config représente la configuration pour la recherche
  props: ['searchData', 'config'],
  data () {
    return {
      searchName: '', // Recherche par nom
      schoolSearch: '', // Recherche par école
      elementSearch: '', // Recherche par élément
      classSearch: '', // Recherche par classe
      levelSearch: '', // Recherche par niveau
      results: [] // Tableau des résultats
    }
  },
  methods: {
    // Récupère les résultats
    search () {
      this.results = this.applyFilters(this.searchData.all)
    },
    // Applique les filtres [en fonction de la configuration] et retourne le résultat
    applyFilters (tab) {
      tab = tab.filter(booksFilter, this.config) // Filtre par livres

      tab = tab.filter(nameFilter, this.searchName.toLowerCase()) // Filtre par nom

      if (this.config.check.schoolSearch === true) tab = tab.filter(schoolFilter, this.schoolSearch) // Filtre par écoles

      if (this.config.check.elementSearch === true) tab = tab.filter(elementFilter, this.elementSearch) // Filtre par éléments

      if (this.config.check.classSearch === true) tab = tab.filter(classFilter, this.classSearch) // Filtre par classes

      if (this.config.check.levelSearch === true) tab = tab.filter(levelFilter, this.levelSearch) // Filtre par niveaux

      return tab
    }
  },
  mounted () {
    // Lorsque le composant est chargé, lance la recherche
    this.search()
  }
}

// ====== FILTERS ======
// filtre les livres
function booksFilter (currElt) {
  return this.arrays.spellBookSearch.indexOf(currElt[0]) !== -1
}

// filtre les noms
function nameFilter (currElt) {
  return currElt[1].toLowerCase().indexOf(this) > -1
}

// filtre les écoles
function schoolFilter (currElt) {
  return currElt[2].toLowerCase() === this.toLowerCase()
}

// filtre les éléments
function elementFilter (currElt) {
  return currElt[3].map(elt => elt.toLowerCase()).indexOf(this.toLowerCase()) > -1
}

// filtre les classes
function classFilter (currElt) {
  let res = false

  currElt[4].forEach(elt => {
    if (elt[0].toLowerCase() === this.toLowerCase()) res = true
  })

  return res
}

// filtre les niveaux
function levelFilter (currElt) {
  let res = false

  currElt[4].forEach(elt => {
    if (elt[1] === this) res = true
  })

  return res
}
</script>

<style scoped>

</style>
