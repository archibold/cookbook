<template>
    <div class="indigrent-list" >
      <div v-for="indigrent in indigrentList" :key="indigrent">
        <Indigrient :indigrient="indigrent" v-on:on-remove="onRemoveIndigrient"></Indigrient>
      </div>
    </div>
</template>

<script>
import Indigrient from '@/components/Indigrient.vue'

export default {
  name: 'IndigrentList',
  components: {
    Indigrient,
  },
  methods: {
    onRemoveIndigrient(id) {
      console.log(id)
      this.$emit('onRemoveIndigrient', id)
    }
  },
  props: ['indigrentList'],
  data() {
    return {
      indigrentText: 'indigrent'
    }
  }
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
