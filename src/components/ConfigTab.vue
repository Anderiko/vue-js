<template>
  <div class="mt-5">
    <h3 class="text-start">Configuration
      <a v-on:click="setCookie" class="save-buttons text-primary"><i class="fas fa-save"></i></a>
      <a v-on:click="delCookie" class="save-buttons text-danger"><i class="fas fa-trash"></i></a></h3>
    <ul style="list-style-type: none">
      <li v-bind:key="name" v-for="(val, name) in value.check">
        <input type="checkbox" :value="val" :id="name" v-on:input="updateParent($event.target.checked, name, 'check')" v-model="value['check'][name]">
        <label :for="name">{{ configTitle[name] }}</label>
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
  props: ['value'],
  methods: {
    updateParent (val, name, type) {
      this.value[type][name] = val
      this.$emit('input', this.value)
    },
    setCookie () {
      this.$parent.setCookie('config', this.value)
    },
    delCookie () {
      this.$parent.delCookie('config')
    }
  },
  data () {
    return {
      configTitle: {
        nameSearch: 'Rechercher par nom',
        schoolSearch: 'Rechercher par école',
        elementSearch: 'Rechercher par élément',
        classSearch: 'Rechercher par classe',
        levelSearch: 'Rechercher par niveau'
      }
    }
  }
}
</script>

<style scoped>
  .save-buttons {
    cursor: pointer;
    text-decoration: none;
  }

  .save-buttons:first-child {
    padding-left: 1em;
    padding-right: .3em;
  }
</style>
