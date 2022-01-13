<template>
  <div class="recipe-item">
    {{recipe.name}}
  </div>
</template>

<script>
export default {
  name: 'RecipeItem',
  props: ['recipe'],
}
</script>

<style scoped>
.recipe-item {
  padding: 15px;
  color: #577da0;
}
.recipe-item:hover {
  color: #577da0;
  background: #1c1c1c;
  transition: background 250ms;
}
</style>
