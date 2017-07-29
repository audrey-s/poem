//按钮提交的时候进行判断
$("#btn-login").click(function(){
    var n=uname.value;
    var p=upwd.value;
    //用户名验证：可以包含数字或字母
    var reg1=/^[a-zA-Z0-9]*$/;
    var reg2=/^\d{6}$/;
    if(!reg1.test(n)){
        alert("用户名格式不正确");
        return;
    }
    if(!reg2.test(p)){
        alert("密码格式不正确");
        return;
    }
//用户名和密码验证成功时，发起ajax请求
    $.ajax({
        url:'/login',
        type:'POST',
        data:{upwd:p,uname:n},
        success:function(data){
            if(data.code==1){
                //alert("登录成功！将自动跳转到用户中心");
                console.log(data);
                //将用户名uid/uname保存session会话
                sessionStorage["uid"]=data.uid;
                sessionStorage["uname"]=n;
                //自动跳转到usercenter.html
                var timer=setTimeout(function(){
                    location.href="usercenter.html";
                },1000);
            }else{
                alert("登录失败"+data.msg);
            }
        }
    });

});
