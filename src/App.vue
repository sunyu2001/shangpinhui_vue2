<template> 
  <div id="app">
    <Header></Header>

    <!-- 路由组件出口地方 -->
    <router-view></router-view>

    <!-- 在Home、Search显示；在登录、注册隐藏 -->
    <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default{
  name: '',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
