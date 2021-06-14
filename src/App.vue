<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Page :messages = "messages" />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Page from '@/pages/Test1'
export default {
  name: 'App',
  data () {
    return {
      messages: ['Hello Jest', 'Hello Vue']
    }
  },
  components: {
    Page
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
