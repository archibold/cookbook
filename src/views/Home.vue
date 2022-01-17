<template>
  <Sidebar>
    <RecipeList
      class="recipe-list"
      v-if="RecipeList.length > 0"
      :recipe-list="RecipeList"
      @select-recipe="selectRecipe"/>
  </Sidebar>
  <Container class="container">
    <input v-if="!recipe" class="cookbook-name" v-model="cookbookName">
    <Recipe v-else :recipe="this.recipe" />
    <ActionButton @on-action="newRecipe"><font-awesome-icon icon="utensils"/></ActionButton>
  </Container>
</template>

<script>
import ActionButton from '@/components/base/ActionButton.vue'
import Container  from '@/components/base/Container.vue'
import RecipeList  from '@/components/RecipeList.vue'
import Recipe  from '@/components/Recipe.vue'
import Sidebar  from '@/components/base/Sidebar.vue'
import { getRecipeList, setCookbookName, getCookbookName } from  '@/service/home.js'

export default {
  name: 'Introduction',
  components: {
    ActionButton,
    Container,
    RecipeList,
    Recipe,
    Sidebar,
  },
  data() {
    return {
      recipe: null,
      RecipeList: getRecipeList(),
      cookbookName: getCookbookName() || "This is your cookbook, name it.",
    }
  },
  watch: {
    cookbookName() {
      setCookbookName(this.cookbookName);
    }
  },
  methods: {
    newRecipe() {
      this.$router.push('/new-recipe')
    },
    selectRecipe(recipe) {
      this.recipe = recipe;
    },
  },
}
</script>

<style scoped>
.container{
}

.recipe-list {
  flex: 1;
  width: 100%;
  overflow: auto;
}

.cookbook-name {
  width: 100%;
}
</style>
