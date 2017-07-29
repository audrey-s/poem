
//DOM内容加载后
$(function(){
    $('#usermainRight2').hide();
    //功能 动态加载
    $.ajax({
        type:"GET",
        url:"/center",
        data:{uid:sessionStorage['uid']},
        success:function(data){
            console.log(data);
            $(".t-content").html(data[0].rtime);
            $(".w-content").html(data.length);
            $(".badge").html(data.length);
            $(".user").html(sessionStorage["uname"]);
            $(".img-responsive").attr({src:data[0].pi});
        }
    });



});

//按钮点击事件：将写的内容 写入到数据库中
$("#btn-new").click(function () {
    var t=txtTitle1.value;
    var d=dataType1.value;
    var c=editor1.value;
    console.log(t,d,c);
    $.ajax({
        type:'POST',
        url:"/new",
        data:{uid:sessionStorage['uid'],p_cate:d,p_detail:c,p_title:t},
        success:function(data){
            $("#txtTitle2").html("标题："+t);
            $("#editor2").html("发表内容："+c);
            $('#usermainRight1').hide();
            $('#usermainRight2').show();
        }

    })
});









