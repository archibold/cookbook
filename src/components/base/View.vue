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

  @media only screen and (max-width: 600px) {
    .view {
      background-color: lightblue;
      flex-direction: column;
    }
  }
</style>
