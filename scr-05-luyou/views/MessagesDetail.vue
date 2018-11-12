<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
  const allMessageDetails = [
    {id:1,title:'message001',content:'message001:content'},
    {id:2,title:'message002',content:'message002:content'},
    {id:3,title:'message003',content:'message003:content'},
  ]
  export default {
    computed:{
      messageDetail(){
        const id = this.$route.params.id*1
        return allMessageDetails.find(md=>md.id===id)
      }
    }
  }
</script>

<style scoped>

</style>
