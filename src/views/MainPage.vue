<template>
  <div >    
    <SetupLinks />
  </div>
</template>

<script>
// @ is an alias to /src

import SetupLinks from '@/components/SetupLinks.vue';
import bookmakers from '@/assets/bookmakers.json'

export default {
  name: 'MainPage',
  components: {
    SetupLinks
  },  
  created(){ 
    let booklist=bookmakers;
    booklist.forEach((element,index) => {
      element.openCountryLinks=false; 
      element.countryCode='default'; 
      element.links ? null : element.links={}; 
      element.order ? null : element.order=index+1; 
    }); 
    localStorage.setItem('bookmakers',JSON.stringify(booklist));
  }  
};
</script>
<style>


</style>