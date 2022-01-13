<template>
  <div class="view">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'View',
}
</script>

<style scoped>
  .view {
    display: flex;
    flex-direction: row;
    padding: 5px;
    overflow: hidden;
    height: 100%;
  }
</style>
