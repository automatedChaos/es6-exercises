<template>
  <div id="app">

    <app-header> </app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'app',
  created: function(){
    console.log("APP CREATED!");
  },
  components: {
    AppFooter, AppHeader, AppContent
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width:100%;
}

html,
body,
input,
textarea,
buttons {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height:100%;
  width:100%;
}

</style>
