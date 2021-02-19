<template>
  <div class="mt-5">
    <h3 class="text-start mb-4">Statistiques</h3>
    <hr>
    <p>{{ spellArray[0] }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatsTab',
  props: ['spellArray']
}
</script>

<style scoped>

</style>
