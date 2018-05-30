<template>
  <div>
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icont :list="icontInfo"></index-icont>
    <index-iocat></index-iocat>
    <index-seach></index-seach>
    <index-top :list=" topInfo"></index-top>
    <index-like></index-like>
    <index-list :list="listInfo"></index-list>
    <index-loadt :list="loadtInfo"></index-loadt>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcont from './icont'
import IndexIocat from './iocat'
import IndexSeach from './seach'
import IndexTop from './top'
import IndexLike from './like'
import IndexList from './list'
import IndexLoadt from './loadt'
import axios from 'axios'

export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcont,
    IndexIocat,
    IndexSeach,
    IndexTop,
    IndexLike,
    IndexList,
    IndexLoadt
},
  data () {
    return {
      city: '',
      swiperInfo: [],
      icontInfo: [],
      topInfo: [],
      listInfo: [],
      loadtInfo: []
    }
  },
  methods: {
    getIndexData () {
      axios.get('/api/index.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      console.log(res)
        const data = res.data.data
        this.swiperInfo = data.swipreList
        this. icontInfo = data.iconList
        this.city = data.city
        if(!this.$store.state.city) {
          this.$store.commit('changeCity', data.city)
        }
        this.topInfo = data.topList
        this.listInfo = data.likeList
        this.loadtInfo = data.loadtList
    },
    handleGetDataErr () {
      console.log('error')
    }
  },
  created () {
    this.getIndexData()
  },
  watch : {
    '$store.state.city' () {
      this.getIndexData()
    }
  }
}

</script>

<style></style>
