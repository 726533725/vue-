<template>
   <swiper :options="swiperOption">
    <swiper-slide>
        <img src="http://img1.qunarzz.com/piao/fusion/1804/45/0ac34e31b4a1fb02.jpg_640x200_7b7e09c7.jpg"/>
    </swiper-slide>
    <swiper-slide>
        <img src="http://img1.qunarzz.com/piao/fusion/1804/1b/6c766b79e2045102.jpg_640x200_3e44c74a.jpg"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
 </swiper>
</template>

<script>
export default {
  name: 'index-swiper',
    data () {
      return {
        swiperOption: {
          loop: true
        }
      }
    }
}
</script>

<style></style>
