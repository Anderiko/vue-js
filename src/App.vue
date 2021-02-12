<template>
  <div id="appTest">
    <nav class="custom-navbar">
      <a v-on:click="activeTab = 0" v-bind:class="[activeTab === 0 ? 'active' : '']">Configuration</a>
      <a v-on:click="activeTab = 1" v-bind:class="[activeTab === 1 ? 'active' : '']">Recherche</a>
      <a v-on:click="activeTab = 2" v-bind:class="[activeTab === 2 ? 'active' : '']">Statistiques</a>
    </nav>
    <div class="tabs container">
      <ConfigTab v-if="activeTab === 0"/>
      <SearchTab v-if="activeTab === 1" v-bind:spellArray="spellArray"/>
      <StatsTab  v-if="activeTab === 2" v-bind:spellArray="spellArray"/>
    </div>
  </div>
</template>

<script>
import ConfigTab from './components/ConfigTab'
import SearchTab from './components/SearchTab'
import StatsTab from './components/StatsTab'
import { sortTable } from '../static/data.min.js'

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
      activeTab: 0
    }
  }
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
