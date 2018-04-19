<template>
  <div class="body">
	  <city-header></city-header>
  
	</div>
</template>

<script>
  import CityHeader from './header'
  
export default {
    name: 'cityIndex',
    components: {
      CityHeader,
  },
}
</script>

<style lang="stylus" scopde>
	.body
		overflow: hidden
</style>
