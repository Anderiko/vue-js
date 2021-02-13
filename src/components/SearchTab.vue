<template>
  <div class="mt-5">
    <h3 class="text-start">Recherche</h3>
    <ul style="list-style-type:none;">
      <li v-bind:key="index" v-for="(values, index) in spellArray[0]">
        <strong>{{ categories[index] }} : </strong>{{ values }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'spellArray',
  props: ['spellArray'],
  data () {
    return {
      categories: [
        'Livre',
        'Nom',
        'Ecole',
        'Branches',
        'Classes',
        'Composantes',
        'Temps d:\'incantation',
        'Portée',
        'Cible',
        'Durée',
        'Jet de sauvegarde',
        'Résistance à la magie',
        'Description',
        'Nécessaire'
      ]
    }
  }
}
</script>

<style scoped>

</style>
