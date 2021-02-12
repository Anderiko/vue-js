<template>
  <div class="tab">
    <h3>{{ msg }}</h3>
    <small>Onglet de test d'affichage</small>
    <p>{{ sortTable[0] }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestShow',
  data () {
    return {
      msg: 'Test affichage'
    }
  },
  props: ['sortTable']
}
</script>

<style scoped>

</style>
