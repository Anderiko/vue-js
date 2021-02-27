<template>
  <div class="searched-item">
    <p>Sorts trouvés : {{ results.length }}</p>
    <hr>
    <ul>
      <li v-bind:key="index" v-for="(result, index) in results">
        <Spell v-bind:spell="result"/>
      </li>
    </ul>
    <p v-if="!results.length">Aucun résultat</p>
  </div>
</template>

<script>
import Spell from './Spell'

export default {
  name: 'SearchResult',
  // results est le tableau des sorts correspondants à la recherche
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
