## 二次封装库

`axios` ---> `http.js`

基于`vue`、`element-ui`、`axios`的二次封装

<br/>

## 富文本编辑器UEditor（现代化）

- 使用`php`作为静态文件服务器配置语言
* 先搭建`LAMP`服务器（apache + php + linux）
* 依旧`UEditor`官方文档进行文件上传大小的修改（使用`whereis`命令进行文件检索）
* 将`./server/gbk-php`放到`/var/www/html`目录下
* 修改文件夹权限`chmod 777 /var/www/html/gbk-php`

- `Vue-cli 3.0`构建的`Vue`
* 将`./web/ueditor`放到`public`目录下，并修改配置文件
* `UEDITOR_HOME_URL`统一为`/ueditor/`
* `serverUrl`为请求的静态文件服务器接口

- 使用`vue-ueditor-wrap`进行封装

地址：https://github.com/HaoChuan9421/vue-ueditor-wrap

- demo

地址：http://editor.xuanzai.top/

- 静态服务器接口

地址：http://upload.xuanzai.top:8080/gbk-php/php/controller.php

<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/ueditor/QQ%E5%9B%BE%E7%89%8720190704175121.png">

<br/>

## mock服务器

- 使用`Doclever`提供的`mock`服务器

> Mock Server地址：http://www.doclever.cn:8090/mock/5d14a4c24a9da91cd64cbe26
> Mock Js文件：net.js（和内网测试是同一个文件，需要安装node环境，安装包点击下载：window  mac）
> 使用方法：在本地用node运行net.js ,加上mock server地址和你需要请求的真实地址的根地址，当您的接口文档的状态为开发完成的时候，net.js不会去请求mock server地址而去请求真实地址（举例：node net.js http://www.doclever.cn:8090/mock/5d14a4c24a9da91cd64cbe26 http://localhost:8081) ,然后将您开发工程下的根地址替换为localhost:36742即可开启您的Mock之旅！

