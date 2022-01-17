<template>
  <div class="recipe-item" :class="{selected: isSelected}">
    {{recipe.name}}
  </div>
</template>

<script>
export default {
  name: 'RecipeItem',
  props: {
    recipe: Object,
    isSelected: Boolean,
  },
}
</script>

<style scoped>
.recipe-item {
  padding: 15px;
  color: #577da0;
}
.recipe-item:hover {
  background: #1c1c1c;
  transition: background 250ms;
}
.selected {
  color: blue;
}
</style>
