<template>
  <div id="app" >    
      <MainPage/>    
  </div>
</template>
<script>

import MainPage from './views/MainPage.vue';

export default {
  components: {   
    MainPage
  }
}
</script>


<style lang="scss">

body {

  padding: 0;
  margin: 0;
}

html {
  font-size: 12px;
    
  @media screen and (min-width: 1100px) {
    font-size: 14px;
  }
    
  @media screen and (min-width: 1400px) {
    font-size: 16px;
  }
}

#app {

  height: 100vh;
  overflow: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e1e7ed; 

}


</style>
