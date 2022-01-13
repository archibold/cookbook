<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style scoped>
  .container {
    flex: 3;
    height: 100%;
  }
</style>
