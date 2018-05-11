<template>
  <div>
    <index-header></index-header>
    <index-mind></index-mind>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexMind from './mind'
import axios from 'axios'

export default {
  name: 'indexDetail',
  components: {
    IndexHeader,
    IndexMind
    }
}
</script>

<style></style>
