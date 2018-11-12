import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Messages from '../views/Messages.vue'
import MessagesDetail from '../views/MessagesDetail.vue'
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/messages',
          component:Messages,
          children:[
            {
              path:'/home/messages/detail/:id',
              component:MessagesDetail
            }
          ]
        },
        {
          path:'',
          component:News
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
