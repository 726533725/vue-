<template>
<div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pageList" :key="index">
        <div class="arae-icon">
            <div class="arae-item" v-for="item of page" :key="item.id">
                <img  class="arae-img" :src="item.imgUrl" >
                <p class="arae-desc">{{item.title}}</p>
            </div>
          </div>
      </swiper-slide>
     <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>

export default {
  name: 'index-icont',
  props:{
      list:Array
  },
  data() {
    return {
       swiperOption: {
        pagination: '.swiper-pagination'
     }
    }
  },
  computed: {
      pageList () {
          const pages = []
          this.list.forEach((value,index)=>{
              const page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page] =[]
              }
              pages[page].push(value)
          })
          return pages
      }
  }
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow: hidden
        height: 3.8rem
       .arae-icon
            display: flex
            flex-wrap: wrap
            .arae-item
                width: 25%
                height: 1.9rem
                .arae-img
                    display: block
                    margin: .2rem auto
                    width: .66rem
                    height: .66rem
                .arae-desc
                    overflow: hidden
                    white-space: nowrap
                    text-overflow: ellipsis
                    line-height: .3rem
                    text-align: center    
</style>
