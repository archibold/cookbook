<template>
  <Container class="container">
    <input class="cookbook-name" v-model="cookbookName">
    <RecipeList v-if="RecipeList.length > 0" class="recipe-list" :recipe-list="RecipeList"/>
    <ActionButton @onAction="newRecipe"><font-awesome-icon icon="utensils"/></ActionButton>
  </Container>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import Container  from '@/components/base/Container.vue'
import RecipeList  from '@/components/RecipeList.vue'
import { getRecipeList, setCookbookName, getCookbookName } from  '@/service/introduction.js'

export default {
  name: 'Introduction',
  components: {
    ActionButton,
    Container,
    RecipeList,
  },
  data() {
    return {
      RecipeList: getRecipeList(),
      cookbookName: getCookbookName() || "This is your cookbook, name it.",
    }
  },
  methods: {
    newRecipe() {
      this.$router.push('/new-recipe')
    },
  },
  watch: {
    cookbookName() {
      setCookbookName(this.cookbookName)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.recipe-list {
  flex: 1;
  width: 100%;
  overflow: auto;
}

.cookbook-name {
  width: 100%;
  border: none;
}
</style>
