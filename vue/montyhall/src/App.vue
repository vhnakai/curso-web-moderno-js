<template>
  <div id="app">
    <h1>Problema monthyhall</h1>
    <Door number="1" :hasGift="true" />
  </div>
</template>

<script>

import Door from './components/Door'
export default {
  name: 'App',
  components:{ Door }

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