<template>
  <div>
    <h1>ComSim is Here</h1>
    <h1>props data:{{name}}</h1>
    <v-text-field
        name="componentvalue"
        label="componentvalue"
        id="componentvalue"
        v-model="inputvalue"
    ></v-text-field>
    
    <v-btn @click="callMainAlertName(inputvalue)" color="success">calltext</v-btn>
    <v-btn @click="callMainAlertNameEvent(inputvalue)" color="success">calltextEvent</v-btn>
    <v-btn @click="callMain()" color="success">alert</v-btn>
    <v-btn @click="callMainEvent()" color="success">alertEvent</v-btn>
  </div>
</template>

<script>
import{ EventBus} from '@/EventBus'
export default {
    props:['name','personaldata'],
    data(){
        return{
            inputvalue:''
        }
    },
    methods:{
        callMain(){
            this.$emit('callAlert')
        },
        
        callMainEvent(){
            EventBus.$on('callAlert')
        },
        callMainAlertName(item){
            console.log(item);
            this.$emit('callAlertName',item)
        },
        callMainAlertNameEvent(item){
            this.$emit('callAlertName',item)
        }
    }

}
</script>
import{ EventBus } from '@/EventBus'
<style>

</style>