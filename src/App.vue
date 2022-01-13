<template>
  <Header class="header" :title="'Cookbook'"/>
  <View>
    <router-view/>
  </View>
</template>

<script>
import Header  from '@/components/base/Header.vue'
import View  from '@/components/base/View.vue'

export default {
  name: 'App',
  components: {
    Header,
    View,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c1c1c;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

</style>
