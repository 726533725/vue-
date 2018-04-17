<template>
    <div>index</div>
</template>

<script>
// import IndexHeader from './header'
// import IndexSwiper from './swiper'
import axios from 'axios'
export default{
  name: 'index',
  components:{
    
  },
  methods: {
    getIndexData(){
      axios.get('/api/index.json').then(this.handleGetDataSucc.bind(this)).catch(this.handleGetDataError.bind(this))
    },
    handleGetDataSucc(res){
      console.log(res)
    },
    handleGetDataError(res){
      console.log('error')
    }
  },
  created () {
    this.getDayTripInfo();  
  },
  watch: {
    '$route' (){
      this.getDayTripInfo()
    }
  },
  methods:{
    getDayTripInfo(){
      axios.get('/api/daytrip.json?id='+this.$route.params.id)
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataError.bind(this))
    },
    handleGetDataSucc (res){
      console.log(res)
    },
    handleGetDataError (){

    }
  }
}
</script>

<style>

</style>
