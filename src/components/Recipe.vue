<template>
  <div class="recipe">
    <div class="indigrent-list" >
      <div v-for="indigrent in recipe.indigrentList" :key="indigrent">
        <div class="indigrent">
          {{indigrent.name}}
        </div>
      </div>
    </div>
    <div class="description">
      <div class="steps">
        {{ recipe.steps }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  props: {
    recipe: Object,
  },
}
</script>

<style scoped>
.recipe {
  display: flex;
  height: 100%;
  color: #577da0;
}
.indigrent {
  margin: 10px;
  min-height: 25px;
}
.name, .steps {
  padding: 15px;
}
.steps {
  white-space: break-spaces;
}

</style>
