<template>
  <div class="indigrient" v-on:click="onRemove">
    {{indigrient.name}}
    <button ><font-awesome-icon icon="times" /></button>
  </div>
</template>

<script>
export default {
  name: 'Indigrient',
  props: ['indigrient'],
  methods: {
    onRemove() {
      this.$emit('onRemove', this.indigrient.id)
    }
  },
}
</script>

<style scoped>
.indigrient {
  color: #577da0;
  margin: 10px;
  display: flex;
  min-height: 25px;
  align-items: center;
  justify-content: space-between;
}
.indigrient button {
  display: none;
}
.indigrient:hover > button {
  display: contents;
}
.indigrient:hover, .indigrient:hover > button {
  text-decoration: line-through;
}
</style>
