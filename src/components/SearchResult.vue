<template>
  <div class="searched-item">
    <ul>
      <li v-bind:key="index" v-for="(result, index) in results">
        <Spell v-bind:spell="result" v-bind:index="index"/>
      </li>
    </ul>
    <p v-if="!results.length">Aucun résultats</p>
  </div>
</template>

<script>
import Spell from './Spell'

export default {
  name: 'SearchResult',
  props: ['results'],
  components: {Spell}
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
