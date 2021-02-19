<template>
  <div class="searchSelect col-md-3">
    <label :for="'select_' + label">{{ label }}</label>
    <select :id="'select_' + label" class="form-select" v-model="selected" v-on:change="updateParent">
      <option value="" disabled selected>Selection...</option>
      <option v-for="(val, id) in array" v-bind:key="id" :value="val">{{ val }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SearchSelect',
  props: ['array', 'label', 'value'],
  data () {
    return {
      selected: this.value
    }
  },
  methods: {
    updateParent () {
      this.$emit('input', this.selected)
      this.$parent.search()
    }
  }
}
</script>

<style scoped>

</style>
