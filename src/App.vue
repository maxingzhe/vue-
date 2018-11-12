<template>
  <div>
    <p>click {{count}} times count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {


    computed: {
      ...mapState(['count']),  // {count () {return this.$store.state.count}}
      ...mapGetters(['evenOrOdd']), // {eventOrOdd () {this.$store.getters.evenOrOdd}}
    },

    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }

    /*computed: {
     evenOrOdd () {
     return this.$store.getters.evenOrOdd
     },
     count () {
     return this.$store.state.count
     }
     },*/

    /*methods: {
     increment () {
     this.$store.dispatch('increment')
     },
     decrement () {
     this.$store.dispatch('decrement')
     },
     incrementIfOdd () {
     this.$store.dispatch('incrementIfOdd')
     },
     incrementAsync () {
     this.$store.dispatch('incrementAsync')
     },
     }*/
  }

</script>

<style>

</style>
