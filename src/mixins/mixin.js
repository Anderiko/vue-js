export let extract = {
  methods: {
    unique (currElt, index, array) {
      return array.indexOf(currElt) === index
    },
    extract (index, array) {
      let temp = []

      array.forEach((elt) => {
        temp.push(elt[index])
      })

      return temp.filter(this.unique).sort()
    }
  }
}
