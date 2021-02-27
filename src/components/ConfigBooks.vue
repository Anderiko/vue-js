<template>
  <div class="bookSelection">
    <h4 class="mb-2">Livres disponibles</h4>
    <ul class="available" style="list-style-type: none">
      <li v-bind:key="index" v-for="(name, index) in value.availableBooks">
        <a v-on:click="addBook(index, name)" class="book-link text-success" title="Ajouter"> <i class="fas fa-lg fa-plus-circle"></i> </a> {{ name }}
      </li>
    </ul>
    <h4 class="mb-2">Livres ajoutés</h4>
    <ul class="selected" style="list-style-type: none">
      <li v-bind:key="index" v-for="(name, index) in value.spellBookSearch">
        <a v-on:click="delBook(index, name)" class="book-link text-danger" title="Supprimer"><i class="fas fa-lg fa-minus-circle"></i></a> {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConfigBooks',
  // value correspond aux 2 tableaux des livres passés en v-model
  props: ['value'],
  methods: {
    // Permet d'ajouter un livre dans le tableau des livres dans lesquels rechercher
    addBook (index, name) {
      this.value.availableBooks.splice(index, 1)
      this.value.spellBookSearch.push(name)
      this.sortArrays()
    },
    // Permet de retirer un livre du tableau des livres dans lesquels rechercher
    delBook (index, name) {
      this.value.spellBookSearch.splice(index, 1)
      this.value.availableBooks.push(name)
    },
    // Trie les tableaux [Par ordre alphabétique]
    sortArrays () {
      this.value.spellBookSearch.sort()
      this.value.availableBooks.sort()
    }
  }
}
</script>

<style scoped>
  .book-link {
    cursor: pointer;
    text-decoration: none;
    margin-right: .5em;
  }
</style>
