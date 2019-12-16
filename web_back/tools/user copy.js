//使用user.js统一管理用户接口的ajax操作
//--作用:后期维护时,接口使用方式变化可以在user.js中管理

var user = {


    //设置login方法,用来进行登录请求操作

    //第一版本
    // login: function (data, success) {
    //     $.ajax({
    //         type: 'post',
    //         url: LOGIN,  //对地址进行特殊处理 config.js
    //         data: {
    //             user_name: data.yonghuming,   //user_name:  接口中的参数,固定的
    //             password: data.password
    //         },
    //         success: success
    //     });
    // }




    //第二版本
    /*设置options参数,需要传入以下属性
        data(请求参数)
        success(保存成功登录时的操作)
        fail(保存登录失败时的操作)
   */
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,  //对地址进行特殊处理 config.js
            data: {
                user_name: options.data.yonghuming,   //user_name:  接口中的参数,固定的
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        });
    },


    //设置logout方法,实现退出功能
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    }



}
