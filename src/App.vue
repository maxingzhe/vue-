<template>
  <h2 v-if="!repoName">LODING...</h2>
  <p v-else>
    most star repo is
    <a :href="repoUrl">{{repoName}}</a>
  </p>
</template>

<script>
  import axios from 'axios'
export default {
  data(){
    return{
      repoName:'',
      repoUrl:''
    }
  },
  async mounted(){
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
//    this.$http.get(url)
//      .then(response=>{
//        const result = response.data
//        const mostrepo = result.items[0]
//        this.repoName = mostrepo.name
//        this.repoUrl = mostrepo.html_url
//      })
//      .catch(response=>{
//        alert('请检查你的网络')
////      })
//    axios.get(url)
//      .then(response=>{
//        const result = response.data
//        const mostrepo = result.items[0]
//        this.repoName = mostrepo.name
//        this.repoUrl = mostrepo.html_url
//      })
//      .catch(response=>{
//        alert('请检查你的网络，亲')
//      })
    try{
      const response = await axios.get(url)
      const result = response.data
      const mostrepo = result.items[0]
      this.repoName = mostrepo.name
      this.repoUrl = mostrepo.html_url
    }catch(e){
      alart('请检查你的网络，亲~~')
    }
  }
}
</script>

<style>

</style>
