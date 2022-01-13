<template>
  <div class="recipe-list">
    <div v-for="recipe in recipeList" :key="recipe.id">
      <RecipeItem :recipe="recipe" v-on:click="selectRecipe(recipe)"/>
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
      this.$emit('selectRecipe', recipe);
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
