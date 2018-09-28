# vue-seo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install (如果丢包进行以下操作)
npm install vue-meta-info --save
然后main.js 
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)

然后webpack.dev.conf.js 中间件中加入      
    new PrerenderSpaPlugin(
      // 编译后的html需要存放的路径
      path.join(__dirname, '../dist'),
      // 列出哪些路由需要预渲染
      [ '/', '/three','/two','/one' ]
    ),



```


