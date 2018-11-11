<template>
  <li :style={background:bgCorol} @mouseenter="handleenter(true)" @mouseleave="handleenter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props:{
      todo:Object,
      deleteTodo:Function,
      index:Number
    },
    data(){
      return{
        bgCorol:'white',
        isShow:false
      }
    },
    methods:{
      handleenter(isEnter){
        this.bgCorol=isEnter ? '#cccccc' : '#ffffff'
        this.isShow =isEnter
      },
      deleteItem(){
        const {todo,deleteTodo,index} = this
        if(confirm(`你确定要删除${todo.title}吗？`)){
          deleteTodo(index)
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
