// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta:{
                show: true
            }
        },
        {
            path: "/search/:keyword",
            component: Search,
            meta:{
                show: true
            },
            name: "search",
            // 布尔值写法 params
            // props: true,

            // 对象写法
            // props: {
            //     a: 1,
            //     b: 2
            // }

            // 函数写法，可以将params、query参数，通过props传递给路由组件
            props: ($route)=>{
                return {
                    keyword: $route.params.keyword,
                    k: $route.query.k
                }
            }
        },
        {
            path: "/register",
            component: Register,
            meta:{
                show: false
            }
        },
        {
            path: "/login",
            component: Login,
            meta:{
                show: false
            }
        },

        // 重定向，项目启动之后，访问/,立马定向到首页
        {
            path: '*',
            redirect: "/home"
        }

    ]
})