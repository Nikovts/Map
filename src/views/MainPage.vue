<template>   
  <div class="mt-main">   
    <div id="map" class="map"> 
      <div class="dropdown" >
        <select v-model="selected" @change="showCity">
          <option disabled value="">Select city</option>
          <option v-for="(city,i) in cities"  :key="i">
            {{city}}
          </option>
        </select>
      </div>
    </div>
  </div>  
</template>

<script>

import getCoordinates from '../services/api'

export default {
  name: 'MainPage',
  components: {
    
  },
  data: () => ({
    map:{},
    marker:{},
    cities: [
      "New York",
      "Los Angeles",
      "San Francisco"
    ],
    selected:''     
    
  }),
  methods: {
    showCity(){
    if (this.selected != '') {
      
      getCoordinates(this.selected)
        .then(responce=>{
         
          let lat = responce[0].lat;
          let lon = responce[0].lon;
        
          this.marker.setLatLng([lat, lon]);
          this.marker.addTo(this.map);      
        })
     
     
    }    
    }  
    
  },  
  mounted () {
    this.map = L.map('map');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.setView([39.368, -99.536], 5);

    this.marker = L.marker();    
  } 
  
};
</script>
<style>

.mt-main {
  margin-top: 5vh;
  height: 90vh; 
}

.map {
  width: 100%;
  height:100%; 
}

.dropdown {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1000;
  margin-top: 1rem;
  margin-right: 1rem;
}

</style>