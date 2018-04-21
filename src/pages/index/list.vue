<template>
  <div class="sights">
      <ul class="sights-con">
          <li class="mp-like-item" v-for="item of list" :key="item.id">
              <div class="mp-like-imgcon">
                  <img  class="mp-like-img" :src="item.imgUrl" alt="">
                  <div class="mp-like-tag" :style="item.background">{{item.tag}}</div>
              </div>
              <div class="mp-like-info">
                  <div class="mp-like-title mp-ellipsis">{{item.title}}</div>
                  <div class="mp-like-comment">
                      <span class="mpf-starlevel">
                          <strong class="mpf-starlevel-gain" :style="item.iconfont"></strong>
                      </span>
                      <span class="mp-comment-num">{{item.num}}</span>
                  </div>
                    <div class="mp-like-price">
                        <span class="mpg-price">
                           {{item.price}}
                            <em class="mpg-like-num">{{item.money}}</em>
                        </span>
                        {{item.word}}
                        <span class="mp-like-address">{{item.address}}</span>
                    </div>
                </div>   
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'index-list',
  props: {
      list:Array
  }
}
</script>

<style lang="stylus" scoped>
     .sights-con
       margin-left: .24rem
       .mp-like-item
            position: relative
            overflow: hidden
            padding: .2rem 0
            .mp-like-imgcon
                float: left
                overflow: hidden
                width: 2rem
                height: 2rem
                .mp-like-img
                    width: 100%
                .mp-like-tag
                    position: absolute
                    top: .2rem
                    left: 0
                    width: 1.02rem
                    height: .38rem
                    background-size: 100%
                    color: #fff
                    font-size: .2rem
                    line-height: .38rem
                    text-indent: .04rem
            .mp-like-info
                overflow: hidden
                padding-left: .22rem
                .mp-like-title mp-ellipsis
                        margin-top: .26rem
                        height: .44rem
                        color: #212121
                        font-size: .32rem
                        line-height: .44rem
                .mp-like-comment
                        margin-top: .14rem;
                        height: .34rem; 
                        .mpf-starlevel
                                display: inline-block;
                                position: relative;
                                width: 1.66rem;
                                height: .28rem;
                                line-height: .28rem;
                                font-size: .28rem;
                                letter-spacing: .06rem
                                .mpf-starlevel-gain
                                    z-index: 2
                                    color: #ffb436
                                .iconfont
                                    font-size: .014rem !important    
                        .mp-comment-num
                            color: #616161
                            font-size: .24rem
                            line-height: .34rem
                            vertical-align: text-bottom
                .mp-like-price
                        position: relative
                        margin-top: .22rem
                        color: #616161
                        font-size: .24rem
                        line-height: .4rem
                        .mpg-price
                            color: #ff8300   
                            .mpg-like-num
                                font-size: .4rem 
                .mp-like-address
                        position: absolute
                        right: .24rem
                        bottom: 0                            
</style>
