<template>
  <div>
    <index-header :city="city"></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icont :list="icontInfo"></index-icont>
    <index-iocat></index-iocat>
    <index-seach></index-seach>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcont from './icont'
import IndexIocat from './iocat'
import IndexSeach from './seach'
import axios from 'axios'

export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcont,
    IndexIocat,
    IndexSeach
  },
  data () {
    return {
      city: '',
      swiperInfo: [],
      icontInfo: []
    }
  },
  methods:{
    getIndexData () {
      axios.get('/api/index.json?city=' + this.$store.state.city)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swipreList
        this. icontInfo = data.iconList
        this.city = data.city
        if(!this.$store.state.city) {
          this.$store.commit('changeCity', data.city)
        }
    },
    handleGetDataErr () {
      console.log('error')
    }
  },
  created () {
    this.getIndexData()
  },
}

</script>

<style></style>
