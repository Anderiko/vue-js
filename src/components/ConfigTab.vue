<template>
  <div class="mt-5 config">
    <h3 class="text-start mb-4">Configuration
      <a v-on:click="setCookie" class="save-buttons text-primary" title="Sauvegarder"><i class="fas fa-save"></i></a>
      <a v-on:click="delCookie" class="save-buttons text-danger" title="Supprimer la sauvegarde"><i class="fas fa-trash"></i></a></h3>
    <hr>
    <h4 class="mb-2">Critères de recherche</h4>
    <ul style="list-style-type: none">
      <li v-bind:key="name" v-for="(val, name) in value.check">
        <label><input type="checkbox" :value="val" v-on:input="updateParent($event.target.checked, name, 'check')" v-model="value['check'][name]">
        {{ configTitle[name] }}</label>
      </li>
    </ul>
    <ConfigBooks v-model="value.arrays"/>
  </div>
</template>

<script>
import ConfigBooks from './ConfigBooks'

export default {
  name: 'ConfigTab',
  components: {ConfigBooks},
  // value correspond à la configuration passée en v-model
  props: ['value'],
  methods: {
    // Communication de la nouvelle configuration vers le parent
    updateParent (val, name, type) {
      this.value[type][name] = val
      this.$emit('input', this.value)
    },
    // Enregistre le cookie de configuration
    setCookie () {
      this.$parent.setCookie('config', this.value)
    },
    // Supprime le cookie de configuration et rétabli la configuration par défaut
    delCookie () {
      this.$parent.delCookie('config')
      this.$parent.resetConfig()
    }
  },
  data () {
    return {
      configTitle: { // Titres correspondants aux critères de recherche
        schoolSearch: 'Rechercher par école',
        elementSearch: 'Rechercher par élément',
        classSearch: 'Rechercher par classe',
        levelSearch: 'Rechercher par niveau'
      }
    }
  }
}
</script>

<style>
  .config .save-buttons {
    cursor: pointer;
    text-decoration: none;
    padding-right: .3em;
  }

  .config .save-buttons:first-child {
    padding-left: 1em;
  }

  .config h4 {
    margin: 1em;
  }

  .config ul {
    margin-left: 1em;
  }

  .config ul li {
    padding: .1em;
    display: flex;
    justify-content: start;
    align-items: baseline;
  }

  .config label {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .config input[type="checkbox"] {
    height: 20px;
    width: 20px;
    display: block;
    margin-right: .5em;
  }
</style>
