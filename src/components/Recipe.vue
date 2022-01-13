<template>
  <div class="recipe">
    <Sidebar class="sidebar">
      <div class="indigrent-list" >
        <div v-for="indigrent in recipe.indigrentList" :key="indigrent">
          <div class="indigrent">
            {{indigrent.name}}
          </div>
        </div>
      </div>
    </Sidebar>
    <Container class="container">
      <div class="name">
        {{ recipe.name }}
      </div>
      <div class="steps">
        {{ recipe.steps }}
      </div>
    </Container>
  </div>
</template>

<script>
import Container  from '@/components/base/Container.vue'
import Sidebar  from '@/components/base/Sidebar.vue'

export default {
  name: 'Recipe',
  components: {
    Container,
    Sidebar,
  },
  props: ['recipe'],
  methods: {
    onEdit() {
      // this.$emit('onRemove', this.indigrient.id)
    }
  },
}
</script>

<style scoped>
.sidebar {
  padding-top: 60px;
  overflow: hidden;
}

.indigrent {
  margin: 10px;
  min-height: 25px;
}
.name, .steps {
  padding: 15px;
}

.container {
  overflow: auto;
}
.steps {
  white-space: break-spaces;
}
.recipe {
  display: flex;
  height: 100%;
}

.indigrent-list {
  overflow: auto;
}
</style>
