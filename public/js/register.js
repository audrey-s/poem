//var uname=document.querySelector("#uname");
//var upwd1=document.querySelector("#upwd1");
//var upwd2=document.querySelector("#upwd2");
//var phone=document.querySelector("#phone");
//
//function getFocus(){
//    //找要修改的元素
//    //为自己穿txt_focus
//    this.className="txt_focus";
//    //找到旁边的div，清除其class
//    //this.parentElement.nextElementSibling.children[0].className="";
//}
//function vali(txt,reg){
//    //清除文本框的class
//    txt.className="";
//    //查找旁边的div
//    var span=$(txt).parent().next().children();
//    console.log(span);
//    //如果用正则验证自己的内容通过
//    if(reg.test(txt.value))
//    //设置旁边的div的class为vali-success
//        span.className="vali_success";
//    else
//        span.className="vali_fail";
//}
//
//uname.onfocus=getFocus();
//upwd1.onfocus=getFocus();
//upwd2.onfocus=getFocus();
//phone.onfocus=getFocus();
//
////为文本框绑定失去焦点事件
//uname.onblur=function(){
//    vali(this,/^[a-zA-Z0-9]*$/);
//}
//upwd1.onblur=function(){
//    vali(this,/^\d{6}$/);
//}
//upwd2.onblur=function(){
//    vali(this,/^\d{6}$/);
//}
//phone.onblur= function () {
//    vali(this,/^1[34578]\d{9}$/);
//}


//注册功能
$("#btn-register").click(function(){
    var n=$("#uname").val();
    var p1=$("#upwd1").val();
    var p2=$("#upwd2").val();
    var p=$("#phone").val();
    var e=$("#email").val();
    console.log(n,p1,p,e);
    //if(!vali(this,/^[a-zA-Z0-9]*$/)){uname.focus();return;}
    //if(!vali(this,/^\d{6}$/)){upwd1.focus();return;}
    //if(!vali(this,/^1[34578]\d{9}$/)){phone.focus();return;}
    if(n==""){alert("用户名不能为空");return;}
    if(p1==""){alert("密码不能为空");return;}
    if(p==""){alert("手机号不能为空");return;}
    if(p1!=p2){alert("密码和确认密码不相同，请重新输入");return;}
    $.ajax({
        type:"POST",
        url:"/register",
        data:{uname:n,upwd:p1,phone:p,email:e},
        success:function(data){
            console.log(data);
            if(data.code==1){
                alert(data.msg+"3s后自动跳转到登录页面");
                var timer=setInterval(function(){
                    location.href="login.html";
                },3000);
            }
        }
    });
});