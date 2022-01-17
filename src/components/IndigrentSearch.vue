<template>
    <div class="indigrent-search">
      <input :placeholder="indigrentLabel" v-model="search" @keydown.enter="addIndigrent"/>
    </div>
</template>

<script>
export default {
  name: 'IndigrentSearch',
  data() {
    return {
      search: '',
      indigrentLabel: 'indigrent'
    }
  },
  methods: {
    addIndigrent() {
      this.$emit('onAddIndigrent', this.search)
      this.search = ''
    },
  },
}
</script>

<style scoped>
.indigrent-search input:focus {
  width: 100%;
}
</style>
