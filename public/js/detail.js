/////detail/${o.pid}/${sessionStorage['uid']}
//$(".title-jump").on("click",".item-info h4>a",function(e){
//    e.preventDefault();
//    $.ajax({
//        url:'/detail/'+pid+'/'+sessionStorage['uid'],
//        type:'GET',
//        success:function(data) {
//            console.log(data);
//        }
//    })
//});

console.log(location.search);
var arr=location.search.slice(1).split("&");
var arr1=[];
for(var i=0;i<arr.length;i++){
    var sub=arr[i].split("=");
    //console.log(sub);
    arr1.push(sub[1]);
}
console.log(arr1);
//功能 动态加载详情信息uid:sessionStorage['uid'],
    $.ajax({
        type:"GET",
        url:"/detail/"+arr1[0]+"/"+arr1[1],
        data:{},
        success:function(data){
            //console.log(data);
            $('.panel-title').html(data[0].p_title);
            $('.panel-body>pre').html(data[0].p_detail);
            var span=document.querySelectorAll('.text-left span');
            $(span[0]).html(data[0].c_count);
            $(span[1]).html(data[0].r_count);
            $(span[2]).html(data[0].p_time);
            var html='';
            for(var i=0;i<data.length;i++){
                var o=data[i];
                html+=`<li class="list-group-item"><div class="media">
                <div class="media-left media-middle">
                    <img class="media-object" src="${o.oip}" width="80">
                </div>
                <div class="media-body">
                    <p>${o.c_detail}</p>
                    <p>${o.c_time}</p>
                </div>
            </div></li>`;

            }
            $('.has-content').html(html);
        }
    });


//发表评论
$('#btn-content').click(function(){
    var c=$('#new-comment').val();
    console.log(c);
    $.ajax({
        type:"GET",
        url:"/comment",
        data:{uid:sessionStorage['uid'],c_detail:c},
        success: function (data) {
            console.log(data);
            location.href='detail.html?pid='+arr1[0]+'&uid='+arr1[1];
        }
    });
});













