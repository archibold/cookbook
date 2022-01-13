<template>
  <Container>
    <LoginBox/>
  </Container>
</template>

<script>
import Container  from '@/components/base/Container.vue'
import LoginBox  from '@/components/LoginBox.vue'

export default {
  name: 'Login',
  components: {
    Container,
    LoginBox,
  }
}
</script>

<style scoped>
</style>
