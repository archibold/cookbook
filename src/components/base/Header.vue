<template>
  <div class="header">
    <router-link to="/" class="title">{{ title }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
  .header {
    border: 1px solid black;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: black;
  }
  .title {
    font-size: 25px;
    color: #1c1c1c;
    text-decoration: none;
  }
  .title:hover {
    color: #577da0;
  }
</style>
