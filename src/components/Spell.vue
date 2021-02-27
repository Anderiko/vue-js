<template>
  <div class="spell">
    <h5 @click="show = !show" class="p-2">{{ spell[1] }}</h5>
    <ul class="spellDetail" v-if="show">
      <li v-for="(prop, index) in spell" v-bind:key="index">
        <strong>{{ index }} - {{ categories[index] }}</strong> : {{ prop }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Spell',
  // spell est le sort à afficher
  props: ['spell'],
  data () {
    return {
      // nom des différentes catégories
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
      ],
      // changé lors d'un clique -> affiche les détails d'un sort
      show: false
    }
  }
}
</script>

<style scoped>
  .spell h5 {
    padding: 1em 2em;
    margin: 0;
    cursor: pointer;
    transition: .3s;
  }

  .spell h5:hover {
    background-color: rgba(100, 100, 100, 0.1);
  }

  .spellDetail {
    list-style-type: none;
    border-left: 2px solid rgba(100, 100, 100, .3);
    margin-left: 1em;
    padding-left: 1em;
  }
</style>
