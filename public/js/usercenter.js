//功能 动态加载用户中心信息
    $.ajax({
        type:"GET",
        url:"/center",
        data:{uid:sessionStorage['uid']},
        success:function(data){
            console.log(data);
            if(data.length==0){
                location.href="login.html";
            }else{
                var html="";
                for(var i=0;i<data.length;i++){
                    var o=data[i];
                    html+=`<li class="title-jump">
                    <div class="item-info">
                                <h4>${o.p_time} | <a href="detail.html?pid=${o.pid}&uid=${o.uid}">${o.p_title}</a></h4>
                                <div>
                                    <a href="#">评论(<span>${o.c_count}</span>)</a>|<a href="#">阅读(<span>${o.r_count}</span>)</a>|<span>${o.p_time}</span>
                                </div>
                            </div> </li>
                           `;
                }
                $("#p-content").html(html);
                $(".t-content").html(data[0].rtime);
                $(".w-content").html(data.length);
                $(".badge").html(data.length);
                $(".user").html(sessionStorage["uname"]);
                $(".img-responsive").attr({src:data[0].pi});
            }
        }
    });











//页面加载成功事件
//$(function(){
//    show(1);
//});
//
//
////分页显示   为页面添加点击功能
//$("ol.pager").on('click','li a',function(e){
//    e.preventDefault();
//    var pno = $(this).html();
//    show(pno);
//});
//
//
////获取当前页内容ajax，并且更新页面ajax，保存函数
//function show(pno){
//    $.ajax({
//        type:"GET",
//        url:"/center",
//        data:{pno:pno,uid:sessionStorage['uid']},
//        success:function(data){
//            console.log(data);
//            if(data.length==0){
//                location.href="login.html";
//            }else{
//                var html="";
//                for(var i=0;i<data.length;i++){
//                    var o=data[i];
//                    html+=`<li class="title-jump">
//                    <div class="item-info">
//                                <h4>${o.p_time} | <a href="detail.html">${o.p_title}</a></h4>
//                                <div>
//                                    <a href="#">评论(<span>${o.c_count}</span>)</a>|<a href="#">阅读(<span>${o.r_count}</span>)</a>|<span>${o.p_time}</span>
//                                </div>
//                            </div> </li>
//                           `;
//                }
//                $("#p-content").html(html);
//                $(".t-content").html(data[0].rtime);
//                $(".w-content").html(data.length);
//                $(".badge").html(data.length);
//                $(".user").html(sessionStorage["uname"]);
//                $(".img-responsive").attr({src:data[0].pi});
//            }
//
//
//
//        }
//    });
//
//    //产品分页
//    $.ajax({
//        url:"/center/"+pno,
//        success:function(data){
//            var html='';
//            for(var i=1;i<=data.page;i++){
//                html+=`<li><a href="#">${i}</a></li>`;
//            }
//            $("ol.pager").html(html);
//        }
//    });
//
//}





