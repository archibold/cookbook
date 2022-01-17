<template>
  <div class="recipe-list">
    <div v-for="recipe in recipeList" :key="recipe.id">
      <RecipeItem
        v-bind:is-selected="recipe.id = selectedRecipeId"
        :recipe="recipe"
        v-on:click="() => selectRecipe(recipe)"/>
    </div>
  </div>
</template>

<script>
import RecipeItem from '@/components/RecipeItem.vue'

export default {
  name: 'RecipeList',
  props: ['recipeList'],
  components: {
    RecipeItem,
  },
  methods: {
    selectRecipe(recipe) {
      this.selectedRecipeId = recipe.id;
      this.$emit('selectRecipe', recipe);
    }
  },
  data() {
    return {
      selectedRecipeId: undefined,
    }
  }
}
</script>

<style scoped>
.recipe-box {
  flex: 1;
  width: 100%;
}
</style>
