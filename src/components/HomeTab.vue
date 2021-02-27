<template>
  <div class="mt-5">
    <h3 class="text-start mb-4">Accueil</h3>
    <hr>
    <HomeConfigDesc/>
    <HomeSearchDesc/>
    <HomeStatDesc/>
  </div>
</template>

<script>
import HomeConfigDesc from './HomeConfigDesc'
import HomeSearchDesc from './HomeSearchDesc'
import HomeStatDesc from './HomeStatDesc'

export default {
  name: 'HomeTab',
  components: {HomeStatDesc, HomeSearchDesc, HomeConfigDesc}
}
</script>

<style scoped>
  p {
    margin-left: 1em;
    padding-left: 2em;
  }
</style>
