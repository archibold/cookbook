<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
  .sidebar {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
