<template>
  <div class="row">
    <div class="searchName col-md-3">
      <label for="searchName">Nom</label>
      <input type="text" v-model="name" id="searchName" v-on:input="updateParent" class="nameSearch form-control">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchName',
  // value correspond au nom du sort à recherché passé en v-model
  props: ['value'],
  methods: {
    // Lors de la saisie, retourne au parent le nom et lance la recherche
    updateParent () {
      this.$emit('input', this.name)
      this.$parent.search()
    }
  },
  data () {
    return {
      name: this.value // Nom à rechercher
    }
  }
}
</script>

<style scoped>

</style>
