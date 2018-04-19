<template>
  <div>
    <div class="city-Show" v-for="item of showCity">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'cityShow',
  props: {
    showCity: Array
  }
}
</script>

<style lang="stylus" scoped>
  .city-Show
    border-top 1px solid #f5f5f5
    color #212121
    font-size .28rem
    line-heifht .76rem
    overflow hidden 
    padding-left .2rem
    text-overflow ellipsis
    white-space nowrap
    width:100%
</style>


