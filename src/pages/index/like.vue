<template>
    <div class="mp-group">
        <div class="mp-group-title">
            <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            <span class="mp-title">猜你喜欢</span>
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
        height: .7rem
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
</style>
