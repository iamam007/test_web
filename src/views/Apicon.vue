<template>
  <div>
    <v-row>
      <v-col cols="12">
      <h1>apicon</h1>
      <v-btn @click="NewItem()" color="success">NewItem</v-btn>
      </v-col>
      <v-col cols="3" v-for="(item,index) in apidata" :key="index">\
        <v-card >
        <v-img src="https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oAIsMtCl0Ftf087vegAnTgA9QyBbEzUANQAZDv~tplv-tej9nj120t-origin.webp"></v-img>
        <v-card-title primary-title>
            {{item.id}}
        </v-card-title>
        <v-card-subtitle>
            {{item.name}}
        </v-card-subtitle>
        <v-card-actions>
            <!-- <v-btn color="success" @click="callAlertName(item.name)">callName</v-btn> -->
        </v-card-actions>
    </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialogedit"
      max-width="500px"
    >
      <v-card>
        <v-card-title primary-title>
          NewItem
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                name="id"
                label="id"
                id="id"
                v-model="postdata.id"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                name="name"
                label="name"
                id="name"
                v-model="postdata.name"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn text color="error" @click="clearData()">cancel</v-btn>
          <v-btn text color="success" @click="saveSelect()">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
data(){
  return{
    apidata:[],
    dialogedit: false,
    postdata:{
      id:'',
      name:''
    },
    postdefault:{
      id:'',
      name:''
    },
  }
},
created(){
  this.getData()
},
methods:{
  newItem(){
    this.postdata={...this.postdafault}
    this.dialogedit=true
  },
  clearData(){
    this.postdata={...this.postdafault}
    this.dialogedit=false
  },
  saveSelect(){
    this.savePostData()
  },
  getData(){
    try {
      // this.axios.get('http://localhost:5000/test_connect'
      this.axios.get('http://localhost:5000/Get/test_ou'
      // ,{headers:{'Authorization':'Bearer tokon'}}
      ).then((response)=>{
        this.apidata=response.data
        console.log(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  },
  async savePostData(){
    try {
      const {data} = await this.axios.post('http://localhost:5000/testrpa_ou_insert',this.postdata)
      alert(data.massage)
      this.getData()
      this.clearData()
    } catch (error) {
      console.log(error);
    }
  }
},
}
</script>

<style>

</style>