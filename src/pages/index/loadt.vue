<template>
<div>
  <div>
      <h2 class="mp-modtitle">周末去哪玩</h2>
      <div>
          <div class="mp-product-item" v-for="item of list" :key="item.id">
              <div class="product-imgcontainer">
                  <img class="img-ret" style="width: 100%" :src="item.imgUrl">
              </div>
              <div class="mp-product-info">
                  <p class="product-name">{{item.name}}</p>
                  <p class="product-desc">{{item.desc}}</p>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'index-loadt',
  props: {
      list:Array
  }
}
</script>

<style lang="stylus" scoped>
        .mp-modtitle
            height: .8rem
            padding-left: .26rem
            line-height: .8rem
            color: #212121
            .mp-product-item
                position: relative
                height: 2rem
                margin-bottom: .1rem
                background: #fff
                .product-imgcontainer
                        overflow: hidden
                        height: 0
                        padding-bottom: 37.4375%
                .mp-product-info
                        position: relative
                        padding: .14rem .2rem .2rem .2rem
                        .product-name
                            overflow: hidde
                            padding-right: 1.4rem
                            color: #212121
                            font-size: .28rem
                            line-height: .48rem
                            white-space: nowrap
                            text-overflow: ellipsis
                        .product-desc
                            overflow: hidden
                            padding-right: 1.4rem
                            color: #616161
                            font-size: .24rem
                            line-height: .42rem
                            white-space: nowrap
                            text-overflow: ellipsis
</style>
