<template>
    <div class="indigrent-list" >
      <div v-for="indigrent in indigrentList" :key="indigrent">
        <Indigrient :indigrient="indigrent" @on-remove="onRemoveIndigrient"/>
      </div>
    </div>
</template>

<script>
import Indigrient from '@/components/Indigrient.vue'

export default {
  name: 'IndigrentList',
  props: {
    indigrentList: Array,
  },
  components: {
    Indigrient,
  },
  data() {
    return {
      indigrentText: 'indigrent'
    }
  },
  methods: {
    onRemoveIndigrient(id) {
      this.$emit('onRemoveIndigrient', id)
    },
  },
}
</script>

<style scoped>
.indigrent-search input:focus {
  width: 100%;
  border: 1px solid red;
}
.indigrent-list {
  overflow: auto;
}
.recipe {
  display: flex;
  flex-direction: row;
}
</style>
