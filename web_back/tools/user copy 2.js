//使用user.js对项目中与用户操作有关的请求

var user = {

    //login 版本1
    // login: function (data, success) {
    //     $.ajax({
    //         type: 'post',
    //         url: LOGIN,
    //         data: {
    //             user_name: data.uname,
    //             password: data.password
    //         },
    //         success: success
    //     });
    // }

    //login 版本2
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.uname,
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


    //logout  
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