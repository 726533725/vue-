<template>
  <div>
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icont :list="icontInfo"></index-icont>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcont from './icont'
import axios from 'axios'
export default {
  name: 'index',
  components:{
    IndexHeader,
    IndexSwiper,
    IndexIcont
  },
  data () {
    return {
      swiperInfo: [],
      icontInfo: []
    }
  },
  methods:{
    getIndexData () {
      axios.get('/api/index.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swipreList
        this. icontInfo = data.iconList
    },
    handleGetDataErr () {
      console.log('error')
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style></style>
