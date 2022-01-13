<template>
  <Sidebar>
    <IndigrentSearch v-on:on-add-indigrent="onAddIndigrent"/>
    <IndigrentList :indigrent-list="indigrentList" v-on:on-remove-indigrient="onRemoveIndigrient" />
  </Sidebar>
  <Container>
      <RecipeTemplate v-model:name="recipeName" v-model:steps="recipeSteps"/>
      <ActionButton @onAction="onAddRecipe">+</ActionButton>
  </Container>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import Container  from '@/components/base/Container.vue'
import Sidebar  from '@/components/base/Sidebar.vue'
import IndigrentList from '@/components/IndigrentList.vue'
import IndigrentSearch from '@/components/IndigrentSearch.vue'
import RecipeTemplate  from '@/components/RecipeTemplate.vue'

import { getItem, setItem } from '@/service/storage.js'



export default {
  name: 'NewRecipe',
  components: {
    ActionButton,
    Container,
    Sidebar,
    RecipeTemplate,
    IndigrentList,
    IndigrentSearch,
  },
  beforeMount(){
    this.indigrentList = getItem('indigrentList') || [];
  },
  methods: {
    onAddIndigrent(search) {
      this.indigrentList.push({name: search, id: Math.random()})
      setItem('indigrentList', this.indigrentList);
    },
    onRemoveIndigrient(id) {
      this.indigrentList = this.indigrentList.filter((indigrent) => indigrent.id !== id)
      setItem('indigrentList', this.indigrentList);
    },
    onAddRecipe() {
      const recipe = {
        indigrentList: this.indigrentList,
        name: this.recipeName,
        steps: this.recipeSteps,
      }
      //TODO: move to separate logic folder
      const recipeList = getItem('recipeList') || [];
      recipeList.push(recipe);
      setItem('recipeList', this.recipeList);
      setItem('indigrentList', []);
      this.$router.push('/')
    }
  },
  data() {
    return {
      indigrentList: this.indigrentList,
      indigrentText: 'indigrent',
      recipeName: '',
      recipeSteps: '',
    }
  }
}
</script>

<style scoped>
.indigrent-search input:focus {
  width: 100%;
  border: 1px solid red;
}

.indigrent-list {
  overflow: auto;
}
.recipe {
  display: flex;
  flex-direction: row;
}
</style>
