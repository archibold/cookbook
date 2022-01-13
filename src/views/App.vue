<template>
  <Introduction/>
  <NewRecipe/>
</template>

<script>
import Introduction from '@/views/Introduction.vue'
import NewRecipe  from '@/views/NewRecipe.vue'

export default {
  name: 'App',
  components: {
    Introduction,
    NewRecipe,
  },
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
