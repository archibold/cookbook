<template>
  <div class="action-button">
    <button v-on:click="onClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    onClick() {
      this.$emit('onAction');
    }
  }
}
</script>

<style scoped>
  .action-button {
    position: absolute;
    right: 25px;
    bottom: 25px;
    border-radius: 190px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1c1c1c;
    color: #2b2b2b;
    font-size: 25px;
  }

  .action-button:hover {
    color: #577da0;
  }
</style>
