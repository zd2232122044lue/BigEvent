//用来保存网站中的一些配置信息
//使用config.js统一管理接口地址
//--作用:后期维护时,接口地址变化可以在config.js中统一修改,无需到每个HTML文件中操作

//基地址
var BASE_URL = 'http://localhost:8000/';

//用户登录地址
var LOGIN = BASE_URL + 'admin/login';
//退出登录地址
var LOGOUT = BASE_URL + 'admin/logout';
//获取用户信息地址
var MSG = BASE_URL + 'admin/getuser';