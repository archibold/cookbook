<template>
  <Sidebar />
  <Container />
</template>

<script>
import Sidebar  from '@/components/base/Sidebar.vue'
import Container  from '@/components/base/Container.vue'

export default {
  name: 'List',
  components: {
    Sidebar,
    Container,
  }
}
</script>

<style>
</style>
