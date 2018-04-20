<template>
  <ul class="mp-listime-con">
      <li class="mp-listime-con-right">
          <span class="mp-iconfont iconfont">&#xe70e;</span>定位失败
      </li>
      <li class="mp-listime-con-left">
          <span class="mp-iconfont iconfont">&#xe689;</span>5折泡温泉
      </li>
  </ul>
</template>

<script>
export default {
  name: 'index-iocat'
}
</script>

<style lang="stylus" scoped>
    .mp-listime-con
        display:flex
        width: 100%
        background: #fff
        .mp-listime-con-right
            width: 50%
            height: .98rem
            font-size: .28rem
            color: #212121
            line-height: .98rem
            text-align: center
        .mp-listime-con-left
            width: 50%
            height: .98rem
            font-size: .28rem
            color: #212121
            line-height: .98rem
            text-align: center
           .mp-iconfont
                margin-right: .05rem
                color: #616161
                font-size: .32rem
</style>
