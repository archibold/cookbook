<template>
  <div class="recipe-list">
    <div v-for="recipe in recipeList" :key="recipe.id">
      <RecipeBox :recipe="recipe"/>
    </div>

  </div>
</template>

<script>
import RecipeBox from '@/components/RecipeBox.vue'

export default {
  name: 'RecipeList',
  props: ['recipeList'],
  components: {
    RecipeBox,
  },
}
</script>

<style scoped>
.recipe-box {
  flex: 1;
  width: 100%;
}
</style>
