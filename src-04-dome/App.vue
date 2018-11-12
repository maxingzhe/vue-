<template>
  <div class="container">
    <Search/>
    <UserMian/>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Mian from './components/Mian.vue'
  export default{
    components:{
      Search,
      UserMian:Mian
    }
  }
</script>

<style>

</style>
