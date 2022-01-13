<template>
  <Container class="container">
    {{ title }}
    <ActionButton @onAction="newRecipe"><font-awesome-icon icon="utensils" /></ActionButton>
  </Container>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
import Container  from '@/components/base/Container.vue'

export default {
  name: 'Introduction',
  components: {
    ActionButton,
    Container,
  },
  data() {
    return {
      title: "This is your own cookbook"
    }
  },
  methods: {
    newRecipe() {
      this.$router.push('/new-recipe')
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
</style>
