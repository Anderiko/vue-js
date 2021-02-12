<template>
  <div class="mt-5">
    <h3 class="text-start">Statistiques</h3>
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
