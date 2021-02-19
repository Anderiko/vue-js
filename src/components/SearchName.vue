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
  props: ['value'],
  methods: {
    updateParent () {
      this.$emit('input', this.name)
      this.$parent.search()
    }
  },
  data () {
    return {
      name: this.value
    }
  }
}
</script>

<style scoped>

</style>
