import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import meishifenlei from '@/views/modules/meishifenlei/list'
    import news from '@/views/modules/news/list'
    import meishipingjia from '@/views/modules/meishipingjia/list'
    import yonghu from '@/views/modules/yonghu/list'
    import meishixinxi from '@/views/modules/meishixinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import config from '@/views/modules/config/list'
    import meishidian from '@/views/modules/meishidian/list'
    import meishidingdan from '@/views/modules/meishidingdan/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/meishifenlei',
        name: '美食分类',
        component: meishifenlei
      }
          ,{
	path: '/news',
        name: '美食资讯',
        component: news
      }
          ,{
	path: '/meishipingjia',
        name: '美食评价',
        component: meishipingjia
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/meishixinxi',
        name: '美食信息',
        component: meishixinxi
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/meishidian',
        name: '美食店',
        component: meishidian
      }
          ,{
	path: '/meishidingdan',
        name: '美食订单',
        component: meishidingdan
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
