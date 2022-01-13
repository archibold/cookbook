<template>
  <div class="recipe-template">
    <input
      :placeholder="nameLabel"
      v-model="name"
      @keyup="$emit('update:name', name);">
    <textarea
      class="steps"
      :placeholder="stepsLabel"
      v-model="steps"
      @keyup="$emit('update:steps', steps);"/>
  </div>
</template>

<script>
export default {
  name: 'RecipeTemplate',
  props: ['name, steps'],
  data() {
    return {
      name: '',
      nameLabel: 'Recipe name',
      steps: '',
      stepsLabel: 'Steps...',
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
