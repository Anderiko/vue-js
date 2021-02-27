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
      <StatsTab  v-if="activeTab === 3" v-bind:searchData="searchData"/>
    </div>
  </div>
</template>

<script>
import HomeTab from './components/HomeTab'
import ConfigTab from './components/ConfigTab'
import SearchTab from './components/SearchTab'
import StatsTab from './components/StatsTab'
import {sortTable} from '../static/data.min.js'
import {extract} from './mixins/mixin'

export default {
  name: 'App',
  // contient la fonction d'extraction ainsi qu'un filtre d'unicité
  mixins: [extract],
  components: {
    StatsTab,
    SearchTab,
    ConfigTab,
    HomeTab
  },
  data () {
    return {
      activeTab: 0, // Index de l'onglet actif
      config: this.configuration(), // Récupération de la configuration si présente sinon configuration par défaut
      searchData: {
        all: sortTable, // Toutes les données du Model
        schoolSearch: this.extract(2, sortTable), // Extraction des écoles depuis les données
        elementSearch: this.extract(3, sortTable).flat().filter(this.unique).sort(), // Extraction des éléments depuis les données
        classSearch: this.classSearch(), // Extraction des classes depuis les données
        levelSearch: this.levelSearch() // Extraction des niveaux depuis les données
      }
    }
  },
  methods: {
    // Appelle la fonction pour définir le cookie de configuration
    setCookie (name, value) {
      setCookie(name, value)
    },
    // Appelle la fonction pour supprimer le cookie de configuration
    delCookie (name) {
      delCookie(name)
    },
    // Réinitialise la configuration, est appelée après la supression du cookie ce qui remet en place la configuration par défaut
    resetConfig () {
      this.config = this.configuration()
    },
    // Retourne la configuration depuis le cookie, la configuration par défaut le cas échéant
    configuration () {
      let defaultConfig = {
        check: {
          schoolSearch: false,
          elementSearch: false,
          classSearch: false,
          levelSearch: false
        },
        arrays: {
          availableBooks: this.extract(0, sortTable).sort(),
          spellBookSearch: []
        }
      }
      let config = getCookie('config')
      return config == null ? defaultConfig : config
    },
    // Retourne un tableau contenant les classes depuis les données
    classSearch () {
      let temp = []

      this.extract(4, sortTable).forEach((arr) => {
        arr.forEach((elt) => {
          temp.push(elt[0])
        })
      })

      return temp.filter(this.unique).sort()
    },
    // Retourne un tableau contenant les niveaux depuis les données
    levelSearch () {
      let temp = []

      this.extract(4, sortTable).forEach((arr) => {
        arr.forEach((elt) => {
          temp.push(elt[1])
        })
      })

      return temp.filter(this.unique).sort()
    }
  }
}

// ========  COOKIES  ========
// Enregistre un cookie avec son nom et sa valeur
function setCookie (name, value) {
  let expire = new Date()
  expire.setTime(expire.getTime() + 7 * 24 * 60 * 60 * 1000) // +7 jours
  document.cookie = [name, '=', JSON.stringify(value), '; path=/; expires=' + expire.toUTCString()].join('')
}

// Récupère un cookie grâce à son nom
function getCookie (name) {
  let result = document.cookie.match(new RegExp(name + '=([^;]+)'))
  result && (result = JSON.parse(result[1])) // if (result != null) result = JSON.parse
  return result
}

// Supprime un cookie [Défini la date d'expiration du cookie 1s après epoch]
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
