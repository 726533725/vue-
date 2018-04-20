<template>
    <div class="mp-group">
        <div class="mp-group-title">
            <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
            <span class="mp-title">本周热门榜单</span>
            <router-link to="/bar" class="mp-title-more">全部榜单</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index-seach',
 
}
</script>

<style lang="stylus" scoped>
    .mp-group
        display: flex
        height: 2rem
        .mp-group-title
            position relative
            width: 100%
            height: .47rem
            .mp-title-img
                display: inline-block
                overflow: hidden
                width .3rem
                height: .3rem
                vertical-align: top 
            .mp-title
                display: inline-block
                margin-left:.08rem
                height: .44rem
                color: #212121
                font-size: .32rem
                line-height: .44rem
            .mp-title-more
                position: absolute
                top: .1rem
                right: .4rem
                color: #616161
                font-size: .24rem
                line-height: .28rem    
           
</style>
