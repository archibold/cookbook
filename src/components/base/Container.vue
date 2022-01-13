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
    flex: 5;
    height: 100%;
    background: #2b2b2b;
    padding: 10px;
    overflow: hidden;
  }
</style>
