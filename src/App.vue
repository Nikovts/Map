<template>
  <div id="app" class="d-flex flex-column">    
    <Header />
    <div class="d-flex flex-row mt-main col-12">
      <ul id="nav" class="d-flex flex-column sidebar col-1">
        <li class="list d-flex" >          
          <router-link to="/" class="link-box" >Set-up Affiliate Links</router-link>          
        </li>
        <li class="d-flex list">
          <router-link to="/setup" class="link-box" >Setup Live Stream Links</router-link>
        </li>  
        <li class="d-flex list">
          <router-link to="/how" class="link-box">How It Works</router-link>
        </li> 
      </ul>
      <router-view class="col-11"/>      
    </div>  
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
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

#nav {
  padding: 0;
  margin: 0;
  background-color: rgb(3, 29, 55);
  a {    
    color: white;
    text-decoration: none;    
    display: inline-block;
    width: 100%;
    text-align: left;

    &.router-link-exact-active      {
    background: #283e5b;
    border-left: 3px solid #00b1ff;        
  }
  }
}

.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.flex-row {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.flex-column {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.col-1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 17%;
  flex: 0 0 17%;
  max-width: 17%;
}

.col-11 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 83%;
  flex: 0 0 83%;
  max-width: 83%;
}

.pt-1 {
  padding-top: 0.25rem;
}

.pt-3 {
  padding-top: 0.75rem;
}


.list {
  list-style: none;
  font-size: 12px;
  border-bottom: 1px solid #282c2e;
  
}

.mt-main {
  margin-top: 5vh;
  height: 90vh; 
}

.link-box {
  padding: 0.75rem 3rem;   
  
}

@media (max-width: 1350px){

.link-box {
  padding: 0.75rem 2rem;   
  
}
}


</style>
