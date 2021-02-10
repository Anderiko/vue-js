var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})



// Our data object
let dataFirstObject = sortTable[0];
let cate = ["Livre","Nom","Ecole", "Branches", "Classes", "Composantes", "Temps d:\'incantation", "Portée", "Cible", "Durée", "Jet de sauvegarde", "Résistance à la magie", "Description", "Nécessaire"];

// The object is added to a Vue instance
var vm = new Vue({
  el: '#vm',
  data: {
    obj: dataFirstObject,
    cate: cate
  }
})



console.log(sortTable[0]);
