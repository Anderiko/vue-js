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
  props: ['searchData', 'config'],
  data () {
    return {
      searchName: '',
      schoolSearch: '',
      elementSearch: '',
      classSearch: '',
      levelSearch: '',
      results: []
    }
  },
  methods: {
    search () {
      this.results = this.getResults()
    },
    getResults () {
      return this.applyFilters(this.searchData.all)
    },
    applyFilters (tab) {
      tab = tab.filter(booksFilter, this.config)

      if (this.config.check.schoolSearch === true) tab = tab.filter(schoolFilter, this.schoolSearch)

      if (this.config.check.elementSearch === true) tab = tab.filter(elementFilter, this.elementSearch)

      if (this.config.check.classSearch === true) tab = tab.filter(classFilter, this.classSearch)

      if (this.config.check.levelSearch === true) tab = tab.filter(levelFilter, this.levelSearch)

      tab = tab.filter(nameFilter, this.searchName.toLowerCase())
      return tab
    }
  },
  mounted () {
    this.search()
  }
}

// ====== FILTERS ======
function booksFilter (currElt) {
  return this.arrays.spellBookSearch.indexOf(currElt[0]) !== -1
}

function nameFilter (currElt) {
  return currElt[1].toLowerCase().indexOf(this) > -1
}

function schoolFilter (currElt) {
  return currElt[2].toLowerCase() === this.toLowerCase()
}

function elementFilter (currElt) {
  return currElt[3].map(elt => elt.toLowerCase()).indexOf(this.toLowerCase()) > -1
}

function classFilter (currElt) {
  let res = false

  currElt[4].forEach(elt => {
    if (elt[0].toLowerCase() === this.toLowerCase()) res = true
  })

  return res
}

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
