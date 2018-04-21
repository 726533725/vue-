<template>
 <ul class="iconse">
     <li class="araes-item" v-for="item of list" :key="item.id">
         <img class="araes-img" :src="item.imgUrl"/>
         <p class="araes-desc">{{item.title}}</p>
         <div class="mp-hotsale-price">
             <span class="mpg-price">
                 {{item.price}}
                 <em class="mpg-price-num">{{item.num}}</em>
             </span>{{item.word}}
         </div>
     </li>
 </ul>
</template>

<script>

export default {
  name: 'index-top',
  props:{
      list: Array,
    }
}
</script>

<style lang="stylus" scoped>
    .iconse
        height: 3rem
        display: flex
        overflow-x :auto
        .araes-item
            margin: .2rem
            height: 2.9rem
            .araes-img
                height: 2rem
            .araes-desc
                margin-top: .12rem
                color: #212121
                font-size: .24rem
                line-height: .32rem
                text-align: center
            .mp-hotsale-price
                color: #616161;
                font-size: .24rem;
                line-height: .36rem;
                text-align: center;
                .mpg-price
                    color: #ff8300
                    .mpg-price-num
                        font-size: .28rem
               
                   
</style>
