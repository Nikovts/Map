<template>
  <div class="main-container ">
    <div class="d-flex flex-column">
      <div class="d-flex flex-row heading p-4">
        <h3 class="m-0 py-3">
          SET-UP AFFILIATE LINKS
        </h3>
        <button class="button-head" @click="save">
          SAVE CHANGES
        </button>  
      </div>
      <div class="px-5 ">  
        <div class="d-flex flex-row py-4 ">
          <select v-model="filter" class="col-8 show main-color">          
            <option v-for="(option,index) in filterOptions" :key="index" :value="option.code">
              {{ option.name }}
            </option>
          </select> 
          <div class="col-4 d-flex flex-end">
            <button class="button-check d-flex" @click="checkAll">
              <div class="checkmark" >
              </div>  
              CHECK ALL
            </button> 
            <button class="button-remove d-flex" @click="removeAll">
              <div class="cross mx-2">             
              </div> 
              REMOVE ALL          
            </button> 
          </div>       
        </div>        
        <div 
          class="d-flex flex-row py-4 item-center  font-7 border-row"  
          v-for="(book,index) in filteredBookmakers" 
          :key="index" 
          draggable="true" 
         @dragstart="dragStart(index, $event)"
         @dragover.prevent           
         @dragend="dragEnd" 
         @drop="dragFinish(index)"
        >
          <div class="col-3 d-flex flex-row ">
            <span class="mx-2 p-2">
              {{index+1}}
            </span>
            <!-- <input type="checkbox" v-model="book.active" class="border-grey check-box"> -->
            <div class="border-grey check-box" @click="checkActive(book)">              
              <div :class="{ 'checkmark-book': book.active ==1 }">
              </div>
            </div>  
            <div class="mx-2 px-2">
              <img width="60px" height="auto" src="../assets/logoBet.png" />
            </div>
            <div class="mx-2 p-2">
              {{book.name}} 
            </div>    
          </div> 
          <div class="col-9 d-flex flex-column ">
            <div  class="col-12 d-flex flex-row item-center mb-2">
              <div class="col-1">
              </div>  
              <div class="col-1">
                Default:
              </div>
              <div class="  border-grey py-2 link left-border" v-if="book.links.default">
                {{book.links.default}}
              </div>
              <div class=" border-grey py-2 link left-border" v-else>
                no link available
              </div>
              <div class="d-flex button-add" @click="openCountryLinks(book)">
                <span class="add-link">
                  ADD LOCAL LINK 
                </span> 
                <span class="plus">
                  +
                </span>  
              </div>
            </div>
            <div class="col-12 d-flex flex-row item-center " v-if="book.openCountryLinks">
              <select v-model="book.countryCode" class="col-2 border-grey country font-7 main-color py-1">          
                <option v-for="(option,index) in countries" :key="index" :value="option.code" >
                  {{ option.name }}
                </option>
              </select>
              <div class="d-flex flex-row input-all item-center border-grey">
                <input v-model="book.links[book.countryCode]" class="main-color font-7  input-link  py-2">
                <div class="cross ml-a close" @click="closeCountryLinks(book)">             
                </div> 
              </div>  
            </div>   
          </div>     
        </div>         
      </div>   
    </div>  
  </div>
</template>

<script>

import countries from '@/assets/countries.json'

export default {
  data(){
    return{
      bookmakers: [],
      filter:'All',
      countries: [{name:"Default", code:"default"}],
      dragging:-1   
    }
  },
  created(){ 
    this.bookmakers=JSON.parse(localStorage.getItem('bookmakers') || "[]"); 
    this.countries.push(...countries); 
  },
  methods: {   
    dragStart(which, ev) {
      ev.dataTransfer.setData('text/plain', null);
      ev.dataTransfer.dropEffect = 'move'
      this.dragging = which;
    },
    dragEnd() {
      this.dragging = -1
    },
    dragFinish(to) {      
      this.bookmakers.splice(to, 0, this.bookmakers.splice(this.dragging, 1)[0]); 
      for (let index = 0; index <= to; index++) {
        let element = this.bookmakers[index];
        element.order=index+1;        
      }     
    },
    save() {
      localStorage.setItem('bookmakers',JSON.stringify(this.bookmakers));      
    },
    checkAll() {
      this.bookmakers.forEach(element => {
        element.active=1;
      });
    },
    removeAll() {
      this.bookmakers.forEach(element => {
        element.active=0;
      });
    },
    checkActive(book) {      
      book.active==1?book.active=0:book.active=1;
    },
    openCountryLinks(book) {
      book.openCountryLinks=true;
    },
    closeCountryLinks(book) { 
      book.openCountryLinks=false;
    }
  },
  computed: { 
    filteredBookmakers() {
      if (this.filter=='All') {
        return this.bookmakers;   
      } else if (this.filter=='Active'){
        return this.bookmakers.filter(el=>el.active==1);   
      } else if (this.filter=='Inactive'){
        return this.bookmakers.filter(el=>el.active==0);   
      } else {
        return [this.bookmakers.find(el=>el.id==this.filter)];
      }       
    },
    filterOptions() {
      let options=[{name:'Show all bookmakers',code:"All"} ,{name:'Show all active bookmakers', code:"Active"},{ name:'Show all inactive bookmakers', code:'Inactive'}]
      this.bookmakers.forEach(element => {
        options.push({name: element.name,
                      code:  element.id});
      });
      return options;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.main-container {  
  margin: 2rem 5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  height: 83vh;
  overflow: overlay;
}

.flex-end {
  justify-content: flex-end;
}

.col-1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 10%;
  flex: 0 0 10%;
  max-width: 10%;
}

.col-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}

.col-3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  max-width: 30%;
}

.col-7 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 60%;
  flex: 0 0 60%;
  max-width: 60%;
}

.col-8 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 70%;
  flex: 0 0 70%;
  max-width: 70%;
}

.col-9 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 80%;
  flex: 0 0 80%;
  max-width: 80%;
}

.p-2 {
  padding: 0.5rem;
}

.p-4 {
  padding: 1rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-5 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-1 {
  padding-top: 0.44rem;
  padding-bottom: 0.44rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.ml-a {
  margin-left: auto;
}

.mx-2 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.m-0 {
  margin: 0;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.font-7 {
  font-size: 0.75rem;
}

.item-center {
  align-items: center;
}

.main-color {
  color: #2c3e50;
  background-color: #f9f9f9
} 

.heading {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ecf6ff;
  font-style: italic;
  align-items: center;
}

.button-head {
  margin-left: auto;
  font-style: italic;
  color: white;
  padding: 0.1rem 1.8rem;
  background-color: #00b1ff;
  border-radius: 25px;
  border: none;
  font-size: 0.75rem;
  height: 2.5rem;
  cursor: pointer;
}

.button-check {
  align-items: center;
  margin: 0 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 8px;
  color: white;
  background-color: #031d37;
  border: none;
  cursor: pointer;
}

.button-remove {
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 8px;
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
}

.button-add {
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #25d15f;
  color: white;
  cursor: pointer;
  border: 1px solid #25d15f;
  align-items: center;
  justify-content: space-evenly;
}

.checkmark {
  display: inline-block;
  transform: rotate(45deg);
  height: 12px;
  width: 6px;
  margin: 0 0.7rem 0 0.3rem;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
} 

.show {
   border: 1px solid #d6d8d9;
   border-radius: 8px;
}  

.checkmark-book {
  display: inline-block;
  transform: rotate(45deg);
  height: 12px;
  width: 6px;  
  border-bottom: 1px solid #25d15f;
  border-right: 1px solid #25d15f;  
}

.check-box {
  min-width: 1.1rem;
  height: 1.1rem;
  margin:  0.3rem 0.5rem;
  cursor: pointer;  
}

.border-grey {
  border: 1px solid #d6d8d9;
}

.border-row {
  border-bottom: 1px dashed #d6d8d9;
  cursor:move;
}

.country {
  margin-right: 0.2rem;
  margin-left: -0.2rem;
  border-radius: 8px;
}

.add-link {
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
}

.link {
  width: 75%;
  text-align: left;
  padding-left: 0.5rem;   
  margin-right: -0.5rem;
}

.input-all {
  width: 100%;  
  border-radius: 8px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.input-link {
  border: none;
  background-color: #f9f9f9; 
  width: 95%; 
}

.left-border {
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}

.close {  
  cursor:pointer;
}

.plus {
  padding: 0.1rem;
  font-size: 1.5rem;
  padding-right: 0.5rem;
}

.cross:before {
    content: '\2715';
    font-size: 16px;
}

select:focus-visible {
    outline: none;
}

input:focus-visible {
    outline: none;
}


// .heading {
     
//  
// }

// .disclaimer {

//   font-size: 14px;
//   padding: 20px 0 30px 20px;
//   text-align: left;
//   font-weight: 600;

//   span {

//     display: block;
//   }
// }

// .tasks-list {

//   padding: 20px 20px 0 40px;
//   border-radius: 4px;

//   li {

//     font-size: 18px;
//     text-align: left;
//     margin-bottom: 14px;
//     list-style: decimal;
//   }
// }

// .endpoint {
//   background: #ebedf0;
//   padding: 10px;
//   display: inline-block;
//   border-radius: 2px;
//   font-weight: bold;
//   margin: 0 10px;
// }
</style>
