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
    flex: 2;
    display: flex;
    flex-direction: column;
    background: #2b2b2b;
    padding: 10px;
    overflow: hidden;
  }
</style>
