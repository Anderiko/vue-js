export let extract = {
  methods: {
    // filtre si un élément existe déjà pour garantir l'unicité
    unique (currElt, index, array) {
      return array.indexOf(currElt) === index
    },
    // extrait un tableau à partir des données et d'un index fournis en paramètre
    extract (index, array) {
      let temp = []

      array.forEach((elt) => {
        temp.push(elt[index])
      })

      return temp.filter(this.unique).sort()
    }
  }
}
