<template>
  <div>
    <div class="mp-header" style="position: fixed; width: 100%; top: 0px; left: 0px; display: block; opacity: 1;">
        <router-link to="/" class="mp-header-left">
                    <div class="header-left iconfont">
                &#xe624;
            </div>
           </router-link>
         <h1 class="mp-header-title"></h1>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'index-header',
   mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log(scrollTop)
    },
}
</script>

<style lang="stylus" scoped>
    .mp-header
        height: .88rem;
        background: #00bcd4;
        z-index: 91
        .mp-header-left
            left: 0
            top: 0
            width: .8rem
            height: .88rem;
            line-height: .88rem
            color: #fff
        .mp-header-title
            overflow: hidden
            margin: 0 1rem
            line-height: .88rem
            white-space: nowrap
            text-overflow: ellipsis
            font-size: .32rem
            text-align: center
            color: #fff
       
            
</style>
