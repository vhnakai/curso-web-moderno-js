<template>
  <div id="app">
    <h1>Problema monthyhall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas?</label>
        <input type="text" id="portsAmount" size="3" 
            v-model.number="portasAmount">
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual porta é premiada? </label>
        <input type="text" id="selectedPort" size="3" 
            v-model.number="selectedPort">
      </div>
      <button v-if="!started" @click="started = true">Start</button>
      <button  v-if="started" @click="started = false">Restart</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i ==selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>

import Door from './components/Door'
export default {
  name: 'App',
  components:{ Door },
  data: function(){
    return{
      started: false,
      portsAmount: 3,
      selectedPort: null
    }
  }

}
</script>

<style>

body{
  color: #fff;
  background: linear-gradient( to right,#314755,#26a0da) ;
}

#app{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1{
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;

}

</style>