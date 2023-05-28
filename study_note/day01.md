1.初始化项目

node_modules文件夹： 项目依赖文件夹

public文件夹：放置静态资源(图片),存在该文件夹中的静态资源，webpack进行打包时会原封不动到dist文件夹中.

src文件夹：

​	assets文件夹：放置多个组件共用的静态资源，在webpack打包时，会当作一个模块，打包到js文件当中

​	components文件夹：非路由组件(全局组件)

​	App.vue 唯一根组件

​	main.js	程序入口文件

babel.config.js: 配置文件(babel相关)

package.json文件：项目身份证，项目名称、有哪些依赖、怎么运行

package-lock.json:缓存性文件

README.md	说明性文件



2.项目其他配置

2.1浏览器运行自动打开

— package.json

"scripts": {

  "serve": "vue-cli-service serve --open",

  "build": "vue-cli-service build",

  "lint": "vue-cli-service lint"

 },

2.2 eslint校验关闭

根目录下，创建vue.config.js文件，比如，声明变量但是未使用，eslint会报错

module.exports = defineConfig({

 transpileDependencies: true,

 lintOnSave: false

})

2.3src文件夹简写方法，配置别名

jsconfig.json配置别名@提示，@代表src文件夹，找的时候方便

{

 "compilerOptions": {

  "baseUrl": "./",

  "paths": {

   "@/*": [

​    "src/*"

   ]

  },

}

}



3.项目路由分析

vue-router

路由： KV键值对

key: URL(地址栏中路径)

value: 相应路由组件



路由组件：

Home首页路由组件、Search、Login、Register



非路由组件：

Header,

Footer	登录|注册页没有



4.完成非路由组件Header和Footer业务

不以HTML+CSS为主，主要搞业务、逻辑

开发项目时

1）写静态页面(HTML+CSS)

2）拆分组件

3）获取服务器数据动态展示

4）完成相应动态业务



注意1：创建组件时，组件结构+组件样式+图片资源

注意2：通过less、less-loader(5版本)处理less，把less样式变为css样式

注意3：需要在style标签上加lang=less才能识别less



4.1使用组件的步骤(非路由组件)

- 创建或定义
- 引入
- 注册
- 使用

5.路由组件搭建

- pages|views文件夹：放置路由组件

  

5.1配置路由

项目中配置的路由放置在router文件夹中，



5.2总结

路由组件与非路由组件区别：

1.路由组件放置在pages|views文件夹，非路由组件放在components组件中

2.路由组件需要在router文件夹进行注册（使用的即为组件名），非路由组件一般以标签形式使用

3.注册完路由，两种组件身上都有\$route/\$router属性



$router:一般获取路由信息[路径，query，params等]

$router:一般用来编程式导航进行路由跳转[push|replace]



5.3路由的跳转

两种形式：

声明式导航router-link,

编程式导航push|replace,业务逻辑多于声明式导航



6.Footer组件显示与隐藏

Footer组件：Home，Search显示；Login，Register隐藏。

6.1根据组件身上的$route获取当前路由信息，通过路由路径判断Footer显示与隐藏。

6.2配置路由时，可以给路由添加元信息，路由需要配置对象，key需符合规范



7.路由传参

7.1路由跳转方式

声明式导航：router-link	务必有to属性，可以实现路由跳转

编程式导航：利用组件实例的$router.push|replace方法

7.2传参的两种写法

params参数：属于路径当中一部分，配置路由时需要占位

query参数：不属于路径一部分，类似于ajax中的queryString /home?k=v&m=1 不需要占位

三种方式：

```js
// 路由传递参数
            // 第一种字符串形式
            // this.$router.push('/search/'+ this.keyword + "?k="+ this.keyword.toUpperCase())

            // 第二种方式：模板字符串
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)

            // 第三种方式：对象写法
            this.$router.push({
                name:"search",
                params:{
                    keyword: this.keyword
                }, 
                query:{
                    k:this.keyword.toUpperCase()
                }
            })
```



8.路由传参相关面试题

1）对象写法能否结合params一起使用

不可以，传参时，对象写法可以是name,path形式，但是path写法不能与params参数一起使用

2）如何指定params可传可不传

如果路由要求传递params参数，但是未传，则URL会出现问题

指定params参数可传可不传，配置路由时占位后面加一个？

3）params传递的是空串，URL也会出现问题

使用undefined

4）传递props数据