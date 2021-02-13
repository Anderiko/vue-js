<template>
  <div id="appTest">
    <nav class="custom-navbar">
      <a v-on:click="activeTab = 0" v-bind:class="[activeTab === 0 ? 'active' : '']">Configuration</a>
      <a v-on:click="activeTab = 1" v-bind:class="[activeTab === 1 ? 'active' : '']">Recherche</a>
      <a v-on:click="activeTab = 2" v-bind:class="[activeTab === 2 ? 'active' : '']">Statistiques</a>
    </nav>
    <div class="tabs container">
      <ConfigTab v-if="activeTab === 0" v-model="config"/>
      <SearchTab v-if="activeTab === 1" v-bind:spellArray="spellArray"/>
      <StatsTab  v-if="activeTab === 2" v-bind:spellArray="spellArray"/>
    </div>
  </div>
</template>

<script>
import ConfigTab from './components/ConfigTab'
import SearchTab from './components/SearchTab'
import StatsTab from './components/StatsTab'
import {sortTable} from '../static/data.min.js'

export default {
  name: 'App',
  components: {
    StatsTab,
    SearchTab,
    ConfigTab
  },
  data () {
    return {
      spellArray: sortTable,
      activeTab: 0,
      config: config(),
      testData: 'test'
    }
  },
  methods: {
    setCookie (name, value) {
      setCookie(name, value)
    },
    delCookie (name) {
      delCookie(name)
    }
  }
}

function config () {
  let defaultConfig = {
    check: {
      nameSearch: false,
      schoolSearch: false,
      elementSearch: false,
      classSearch: false,
      levelSearch: false
    },
    arrays: {
      availableBooks: spellBooks(),
      spellBookSearch: []
    }
  }
  let config = getCookie('config')
  return config == null ? defaultConfig : config
}

function unique (value, index, self) {
  return self.indexOf(value) === index
}

function spellBooks () {
  let temp = []
  sortTable.forEach((elt) => {
    temp.push(elt[0])
  })
  return temp.filter(unique)
}

// ========  COOKIES  ========
function setCookie (name, value) {
  document.cookie = [name, '=', JSON.stringify(value), '; path=/;'].join('')
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
