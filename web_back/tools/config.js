//用来保存网站中的一些配置信息
//使用config.js统一管理接口地址
//--作用:后期维护时,接口地址变化可以在config.js中统一修改,无需到每个HTML文件中操作

//通过全大写、使用_连接的变量名进行接口地址管理

//基地址
var BASE_URL = 'http://localhost:8000';

//后续接口地址都基于基地址拼接即可
//用户登录地址
var LOGIN = BASE_URL + 'admin/login';
//退出登录地址
var LOGOUT = BASE_URL + 'admin/logout';