<template>
  <Sidebar>
    <IndigrentSearch @on-add-indigrent="onAddIndigrent"/>
    <IndigrentList :indigrent-list="indigrentList" @on-remove-indigrient="onRemoveIndigrient" />
  </Sidebar>
  <Container>
      <RecipeTemplate v-model:recipe-template="recipeTemplate"/>
      <ActionButton v-if="isVisible" @on-action="onAddRecipe">+</ActionButton>
  </Container>
</template>

<script>
import ActionButton from '@/components/base/ActionButton.vue'
import Container  from '@/components/base/Container.vue'
import IndigrentList from '@/components/IndigrentList.vue'
import IndigrentSearch from '@/components/IndigrentSearch.vue'
import RecipeTemplate  from '@/components/RecipeTemplate.vue'
import Sidebar  from '@/components/base/Sidebar.vue'

import { addRecipe, setIndigrentList, getIndigrentList } from '@/service/newRecipe.js'

export default {
  name: 'NewRecipe',
  components: {
    ActionButton,
    Container,
    RecipeTemplate,
    IndigrentList,
    IndigrentSearch,
    Sidebar,
  },
  data() {
    return {
      indigrentList: getIndigrentList(),
      indigrentText: 'indigrent',
      recipeTemplate: {
        name: '',
        steps: '',
      },
    }
  },
  computed: {
    isVisible: function () {
      return (
        this.recipeTemplate.name !== '' &&
        this.recipeTemplate.steps !== '' &&
        this.indigrentList.length > 0)
    },
  },
  methods: {
    onAddIndigrent(search) {
      this.indigrentList.push({name: search, id: Math.random()});
      setIndigrentList(this.indigrentList);
    },
    onRemoveIndigrient(id) {
      this.indigrentList = this.indigrentList.filter((indigrent) => indigrent.id !== id);
      setIndigrentList(this.indigrentList);
    },
    onAddRecipe() {
      const recipe = {
        indigrentList: this.indigrentList,
        name: this.recipeTemplate.name,
        steps: this.recipeTemplate.steps,
        id: Math.random(),
      }
      addRecipe(recipe);
      setIndigrentList([]);
      this.$router.push('/');
    }
  },
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
