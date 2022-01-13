<template>
  <div class="recipe-box" v-on:click="onClick">
    {{recipe.name}}
  </div>
</template>

<script>
export default {
  name: 'RecipeBox',
  props: ['recipe'],
  methods: {
    onRemove() {
      this.$emit('onClick')
    }
  },
}
</script>

<style scoped>
.recipe-box {
  padding: 15px;
}
.recipe-box:hover {
  color: #577da0;
  background: #1c1c1c;
  transition: background 250ms;
}
</style>
