<template>
  <div class="body">
    <city-header></city-header>
    <city-search @searchCity="handleShowCity"></city-search>
    <city-show v-if="show" :showCity="showCity"></city-show>
    <city-list :hostCityInfo="hostCityInfo"      :domesticCityList="domesticCityList"></city-list>  
  </div>
</template>

<script>
import CityHeader from './cityList'
import CitySearch from './cityShow'
import axios from 'axios'
export default {
  name: 'cityIndex',
  componets: {
    CityHeader,
    CitySearch,
    CityList,
    cityShow
  },
  data() {
    return {
      hotCityInfo: [],
      domesticCityList: [],
      showCity: [],
      show:false
    }
  },
  methods: {
    getCityListData () {
      axios.get('/api/cityList.json?city=' +this.$store.state.city).then(this.handleGetDataSucc.bind(this)).catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.hotCityInfo = data.hotCityInfo
      this.demesticCityList = data.china
    },
    handleGetDataErr () {
      console.log('error')
    },
    handleShowCity (e) {
      this.showCity = []
      var cittyListLength = this.domesticCityList.length
      if (e) {
        var reg = /^[\u4e00-\u9fa5]+$/
        if(reg.test(e)) {
          this.showCity= []
          for (var i = 0; i < cittyListLength;i++){
            var chineseCityList = this.domesticCityList[i][1]
            var chineseCityListLength = chineseCityList.length
            for (var j = 0; j < chineseCityListLength; j++){
              var str = chineseCityList[j].cityarea
              if(str.indexOf(e) !== -1){
                this.showCity.push(str)
              }
            }
          }
        }else {
          this.showCity =[]
          for (var k = 0; k < cityListLength; k++) {
            var enlishCityList = this.domesticCityList[k][1]
            var englishCityLength = englishCityList.length
            for (var l = 0; l<engilishCityLength; l++){
              var obj = englishCityList[l]
              if (obj.itemName.indexOf(e)!== -1){
                this.showCity.push(obj.cityarea)
              }
            }
          }
        }
        if (this.showCity) {
          this.show = true
        } else {
          this.show = false
        }
      } else {
        this.showCity = []
        this.show = false
      }
    }
  },
  created () {
    this.getCityListData()
  }
}
</script>

<style lang="stylus" scoped>
.body
  overflow hidden
</style>

