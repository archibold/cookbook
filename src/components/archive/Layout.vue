<template>
    <Header class="header" :title="'Cookbook'"/>
    <View class="view">
      <Sidebar class="sidebar" :style="{width: this.sidebarLength}"/>
      <Container class="container"/>
    </View>
</template>

<script>
import Header  from '@/components/base/Header.vue'
import View  from '@/components/base/View.vue'

import Sidebar  from '@/components/base/Sidebar.vue'
import Container  from '@/components/base/Container.vue'
import { getItem } from '@/service/storage.js'

const sidebarLength = getItem('sidebarLength') || '50px';

export default {
  name: 'App',
  components: {
    Header,
    View,
    Sidebar,
    Container,
  },
  data()  {
    return {
      sidebarLength,
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c1c1c;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
}
.header {
}

.view {
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 5px;
}

.sidebar {
  flex: 1;
  height: 100%;
  background: #2b2b2b;
  padding: 10px;
  margin-right: 1px;
}

.container {
  flex: 3;
  height: 100%;
  background: #2b2b2b;
  padding: 10px;
}
</style>
