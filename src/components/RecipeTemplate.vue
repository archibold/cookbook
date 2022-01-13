<template>
  <div class="recipe-template">
    <input
      :placeholder="nameLabel"
      v-model="name"
      @keyup="update">
    <textarea
      class="steps"
      :placeholder="stepsLabel"
      v-model="steps"
      @keyup="update"/>
  </div>
</template>

<script>
export default {
  name: 'RecipeTemplate',
  props: ['recipeTemplate'],
  data() {
    return {
      name: this.recipeTemplate.name,
      steps: this.recipeTemplate.steps,
      nameLabel: 'Recipe name',
      stepsLabel: 'Steps...',
    }
  },
  methods: {
    update() {
      const newRecipeTemplate = {
        name: this.name,
        steps: this.steps,
      }
      this.$emit('update:recipeTemplate', newRecipeTemplate);
    }
  }
}
</script>

<style scoped>
.recipe-template {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.steps {
  height: 100%;
}
</style>
