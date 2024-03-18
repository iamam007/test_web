<template>
  <div>
    <h1>Score Page</h1>
    
    <v-text-field
        name="name"
        label="score"
        id="score"
        v-model="inputname"
    ></v-text-field>
    <h1 v-if="0<=inputname<50">{{item.score}}</h1>
    <h1 v-if="49<inputname<60">{{item.score}}</h1>
    <h1 v-if="59<inputname<70">{{item.score}}</h1>
    <h1 v-if="69<inputname<80">{{item.score}}</h1>
    <h1 v-if="79<inputname<100">{{item.score}}</h1>
    <v-btn color="info" @click="callAlertName(score)">ok</v-btn>
   
  </div>
  
  
</template>

<script>
export default {
    data(){
        return{
        inputname:'',
        name:'คะแนน',
        score:'F',
        locoation:{x:'123',y:'456'},
        show:true ,
        value:49,
        }
        
    },
}

</script>

<style>

</style>