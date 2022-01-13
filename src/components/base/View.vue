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
    overflow: auto;
    height: 100%;
    flex: 1;
  }

  @media only screen and (max-width: 600px) {
    .view {
      flex-direction: column;
    }
  }
</style>
