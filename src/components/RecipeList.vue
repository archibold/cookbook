<template>
  <div class="recipe-list">
    <div v-for="recipe in recipeList" :key="recipe.id">
      <RecipeItem
        :is-selected="recipe.id = selectedRecipeId"
        :recipe="recipe"
        @click="() => selectRecipe(recipe)"/>
    </div>
  </div>
</template>

<script>
import RecipeItem from '@/components/RecipeItem.vue'

export default {
  name: 'RecipeList',
  props: {
    recipeList: Array,
  },
  components: {
    RecipeItem,
  },
  data() {
    return {
      selectedRecipeId: undefined,
    }
  },
  methods: {
    selectRecipe(recipe) {
      this.selectedRecipeId = recipe.id;
      this.$emit('selectRecipe', recipe);
    },
  },
}
</script>

<style scoped>
.recipe-box {
  flex: 1;
  width: 100%;
}
</style>
