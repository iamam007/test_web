<template>
  <div>
    <h1>Simple Page</h1>
    <h1 v-if="value>100">{{name}}</h1>
    <div v-if="show">
    <h1>{{address}}</h1>
    <h1 v-if="show">{{locoation.x}},{{locoation.y}}</h1>
    </div>
    <v-btn color="pink" @click="show = !show">show</v-btn>
    <v-btn color="info" @click="callaLert()">alert</v-btn>
    <v-text-field
        name="inputname"
        label="Name for Alert"
        id="inputname"
        v-model="inputname"
    ></v-text-field>
    <v-btn color="info" @click="callAlertName(inputname)">alertName</v-btn>
    <ComSimple @callAlert="callAlert" @callAlertName="callAlertName" :name="name" :personaldata="personaldata"/>
    <v-card width="200" v-for="(item,index) in personaldata" :key="index">
        <v-img :src="item.pic"></v-img>
        <v-card-title primary-title>
            {{item.name}}
        </v-card-title>
        <v-card-subtitle>
            {{item.address}} <br>
            locoation {{item.locoation.x}},{{item.locoation.y}}
        </v-card-subtitle>
        <v-card-actions>
            <v-btn color="success" @click="callAlertName(item.name)">callName</v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import{ EventBus} from '@/EventBus'
import ComSimple from '../components/ComSimple.vue'
export default {
    components:{
        ComSimple
    },
    data(){
        return{
        inputname:'',
        name:'I am am',
        address:'KKC',
        locoation:{x:'123',y:'456'},
        show:false ,
        value:105,
        personaldata:[
            {
                name:'I ake',
                address:'KKC',
                locoation:{x:'123',y:'456'},
                pic:'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oAIsMtCl0Ftf087vegAnTgA9QyBbEzUANQAZDv~tplv-tej9nj120t-origin.webp'
            },
            {
                name:'I king',
                address:'BNK',
                locoation:{x:'768',y:'456'},
                pic:require('../assets/co2.png')
            }
        ]
        }
    },
    mounted(){
        EventBus.$on('callAlert',this.callAlert)
        EventBus.$on('callAlertName',this.callAlertName)
    },
    methods:{
        callAlert(){
            alert('Hello คุณกดปุ่ม Alert')
        },
        callAlertName(item){
            alert('ชื่อของเขา ' + item)
        }
    }

}
</script>

<style>

</style>