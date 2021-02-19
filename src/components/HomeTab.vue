<template>
  <div class="mt-5">
    <h3 class="text-start mb-4">Accueil</h3>
    <hr>
    <h4 class="mb-2">Onglet configuration</h4>
    <p>Vous pouvez y éditer votre configuration pour la recherche des sorts, la configuration sera conservée tant que vous ne quittez pas la page.</p>
    <p>Si vous souhaitez conserver la configuration, même après la fermeture de votre navigateur, appuyez sur le bouton sauvegarder : <i class="fas fa-lg fa-save text-primary"></i><br>
      Pour supprimer la configuration ainsi que la sauvegarde, appuyez sur le bouton supprimer : <i class="fas fa-lg fa-trash text-danger"></i><br>
      <small><em>La configuration est sauvegardée pendant 7 jours maximum.</em></small></p>
    <h4 class="mb-2">Onglet Recherche</h4>
    <p>Trouver une explication une fois la page terminée.</p>
    <h4 class="mb-2">Onglet Statistiques</h4>
    <p>Statistiques basiques momdélisées avec des graphiques.</p>
  </div>
</template>

<script>
export default {
  name: 'HomeTab'
}
</script>

<style scoped>
  p {
    margin-left: 1em;
    padding-left: 2em;
  }
</style>
