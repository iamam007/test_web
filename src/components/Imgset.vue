<template>
  <div>
    <h1>รวมภาพ</h1>
    <v-img width="300" height="300" src="https://i.pinimg.com/originals/80/b0/f2/80b0f2796a38d04d4c0af7abd61e4a36.png"/>
    <v-img width="300" height="300" src="../assets/chin1.png"/>
    <v-img width="300" height="300" src="../assets/c3.png"/>
    <v-img width="300" height="300" :src="img" />
    <v-img width="300" height="300" :src="pic" />
  </div>
</template>

<script>
export default {
data(){
    return{
        img:'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oAIsMtCl0Ftf087vegAnTgA9QyBbEzUANQAZDv~tplv-tej9nj120t-origin.webp',
        pic:require('../assets/co2.png')
    }
}
}
</script>

<style>

</style>