//ҳ����سɹ��¼�
$(function(){
    $.ajax({
        url:'/index',
        type:'GET',
        success:function(data) {
            console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                var o=data[i];
                html+=`
                <li><a href="detail.html?pid=${o.pid}&uid=${o.uid}">${o.p_title}</a>
                        <span class="rt signature"><a href="#"></a></span>
                    </li>
                `;
            }
            $('.newest>ul:first').html(html);
        }
    });


//ʫ���������� r_count
    $.ajax({
        url:'/poemr',
        type:'GET',
        success:function(data) {
            console.log(data);
            var html=`
                     <li>
                            <div><i class="bill-1">1</i></div>
                            <div><a href="#">${data[0].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-2">2</i></div>
                            <div><a href="#">${data[1].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-2">3</i></div>
                            <div><a href="#">${data[2].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-item">4</i></div>
                            <div><a href="#">${data[3].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-item">5</i></div>
                            <div><a href="#">${data[4].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                `;
            $('#poem-part .tt-switch>ul').html(html);
        }
    });

//ʫ���ȶ����� c_count
    $.ajax({
        url:'/poemc',
        type:'GET',
        success:function(data) {
            console.log(data);
            var html=`
                     <li>
                            <div><i class="bill-1">1</i></div>
                            <div><a href="#">${data[0].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-2">2</i></div>
                            <div><a href="#">${data[1].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-2">3</i></div>
                            <div><a href="#">${data[2].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-item">4</i></div>
                            <div><a href="#">${data[3].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                        <li>
                            <div><i class="bill-item">5</i></div>
                            <div><a href="#">${data[4].p_title}</a>
                                <span class="rt signature"><a href="#"></a></span>
                            </div>
                        </li>
                `;
            $('#poem-part .dd-switch>ul').html(html);
        }
    });

});

//�����ת������ҳ�� /detail/:pid





$(".lt-dd").on("click","li",function(e){
    e.preventDefault();
    $(e.target).toggleClass("active")
            .siblings().removeClass('active');
    //��ȡ��ǰԪ�ص�href��ַ
    var i=$(e.target).attr("href");
    $('.'+i).attr("dispaly",'none');
});
