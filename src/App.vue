<template>
  <div id="appTest">
    <nav class="custom-navbar">
      <a v-on:click="activeTab = 0" v-bind:class="[activeTab === 0 ? 'active' : '']">Accueil</a>
      <a v-on:click="activeTab = 1" v-bind:class="[activeTab === 1 ? 'active' : '']">Configuration</a>
      <a v-on:click="activeTab = 2" v-bind:class="[activeTab === 2 ? 'active' : '']">Recherche</a>
      <a v-on:click="activeTab = 3" v-bind:class="[activeTab === 3 ? 'active' : '']">Statistiques</a>
    </nav>
    <div class="tabs container">
      <HomeTab   v-if="activeTab === 0"/>
      <ConfigTab v-if="activeTab === 1" v-model="config"/>
      <SearchTab v-if="activeTab === 2" v-bind:searchData="searchData" v-bind:config="config"/>
      <StatsTab  v-if="activeTab === 3" v-bind:spellArray="searchData.all" v-bind:searchData="searchData"/>
    </div>
  </div>
</template>

<script>
import HomeTab from './components/HomeTab'
import ConfigTab from './components/ConfigTab'
import SearchTab from './components/SearchTab'
import StatsTab from './components/StatsTab'
import {sortTable} from '../static/data.min.js'

export default {
  name: 'App',
  components: {
    StatsTab,
    SearchTab,
    ConfigTab,
    HomeTab
  },
  data () {
    return {
      activeTab: 0,
      config: config(),
      searchData: {
        all: sortTable,
        schoolSearch: extract(2),
        elementSearch: extract(3).flat().filter(unique).sort(),
        classSearch: classSearch(),
        levelSearch: levelSearch()
      }
    }
  },
  methods: {
    setCookie (name, value) {
      setCookie(name, value)
    },
    delCookie (name) {
      delCookie(name)
    },
    resetConfig () {
      this.config = config()
    }
  }
}

function config () {
  let defaultConfig = {
    check: {
      schoolSearch: false,
      elementSearch: false,
      classSearch: false,
      levelSearch: false
    },
    arrays: {
      availableBooks: extract(0).sort(),
      spellBookSearch: []
    }
  }
  let config = getCookie('config')
  return config == null ? defaultConfig : config
}

function unique (currElt, index, array) {
  return array.indexOf(currElt) === index
}

function extract (index) {
  let temp = []

  sortTable.forEach((elt) => {
    temp.push(elt[index])
  })

  return temp.filter(unique).sort()
}

function classSearch () {
  let temp = []

  extract(4).forEach((arr) => {
    arr.forEach((elt) => {
      temp.push(elt[0])
    })
  })

  return temp.filter(unique).sort()
}

function levelSearch () {
  let temp = []

  extract(4).forEach((arr) => {
    arr.forEach((elt) => {
      temp.push(elt[1])
    })
  })

  return temp.filter(unique).sort()
}

// ========  COOKIES  ========
function setCookie (name, value) {
  let expire = new Date()
  expire.setTime(expire.getTime() + 7 * 24 * 60 * 60 * 1000) // +7 jours
  document.cookie = [name, '=', JSON.stringify(value), '; path=/; expires=' + expire.toUTCString()].join('')
}

function getCookie (name) {
  let result = document.cookie.match(new RegExp(name + '=([^;]+)'))
  result && (result = JSON.parse(result[1])) // if (result != null) result = JSON.parse
  return result
}

function delCookie (name) {
  document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/;'].join('')
}
</script>

<style>
#appTest {
  font-family: 'Nunito', sans-serif;
  color: #2c3e50;
}

.custom-navbar {
  background-color: #2c3e50;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #000;
}

.custom-navbar a {
  cursor: pointer;
  display: block;
  padding: 1em;
  width: 10em;
  text-decoration: none;
  color: #eee;
}

.custom-navbar a.active {
  color: #2c3e50;
  background-color: #eee;
}
</style>
