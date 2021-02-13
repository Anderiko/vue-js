<template>
  <div class="bookSelection">
    <h4>Livres disponibles</h4>
    <ul class="available" style="list-style-type: none">
      <li v-bind:key="index" v-for="(name, index) in value.availableBooks">
        <a v-on:click="addBook(index, name)" class="book-link text-success"> <i class="fas fa-lg fa-plus-circle"></i> </a> {{ name }}
      </li>
    </ul>
    <h4>Livres ajoutés</h4>
    <ul class="selected" style="list-style-type: none">
      <li v-bind:key="index" v-for="(name, index) in value.spellBookSearch">
        <a v-on:click="delBook(index, name)" class="book-link text-danger"><i class="fas fa-lg fa-minus-circle"></i></a> {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConfigBooks',
  props: ['value'],
  methods: {
    addBook (index, name) {
      this.value.availableBooks.splice(index, 1)
      this.value.spellBookSearch.push(name)
    },
    delBook (index, name) {
      this.value.spellBookSearch.splice(index, 1)
      this.value.availableBooks.push(name)
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

  ul {
    margin-left: 1em;
  }

  ul li {
    padding: .1em;
  }

  h4 {
    margin: 1em;
  }
</style>
