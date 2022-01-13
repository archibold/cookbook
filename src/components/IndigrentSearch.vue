<template>
    <div class="indigrent-search">
      <input :placeholder="indigrentLabel" v-model="search" v-on:keydown.enter="addIndigrent"/>
    </div>
</template>

<script>
export default {
  name: 'IndigrentSearch',
  methods: {
    addIndigrent() {
      this.$emit('onAddIndigrent', this.search)
      this.search = ''
    },
  },
  data() {
    return {
      search: '',
      indigrentLabel: 'indigrent'
    }
  }
}
</script>

<style scoped>
.indigrent-search input:focus {
  width: 100%;
}
</style>
