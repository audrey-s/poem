//加载模块
const express=require("express");
const http=require("http");
const mysql=require("mysql");
const qs=require("querystring");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"poem",
    connectionLimit:10
});
var app=express();
var server=http.createServer(app);
server.listen(8081);
app.use(express.static("public"));

//程序可自动跳转到页面
app.get("/",(req,res)=>{
    res.redirect("index.html");
});

//处理动态请求---注册 /register
app.post("/register",(req,res)=>{
    req.on("data",(data)=>{
        var obj=qs.parse(data.toString());
        console.log(obj);
        pool.getConnection((err,conn)=>{
            var sql="INSERT INTO user_login VALUES(null,?,?,?,?,now())";
            //uname:n,upwd:p1,phone:p,email:e
            conn.query(sql,[obj.uname,obj.upwd,obj.phone,obj.email],(err,result)=>{
                if(err)throw error;
                res.json({code:1,msg:"注册成功"});
            });
            conn.release();
        });
    });
});

//处理动态请求---登录 /login
app.post("/login",(req,res)=>{
    req.on("data",(data)=>{
        var obj=qs.parse(data.toString());
        var n=obj.uname;
        var p=obj.upwd;
        console.log(n,p);
        pool.getConnection((err,conn)=>{
            var sql="SELECT * FROM user_login WHERE uname=? AND upwd=?";
            conn.query(sql,[n,p],(err,result)=>{
                if(result.length==1){
                    res.json({"code":1,"msg":"用户登录成功","uid":result[0].uid});
                }else{
                    res.json({"code":2,"msg":"用户名或密码有误"});
                }
            });
            conn.release();
        })
    })
});


//处理用户中心页面的加载 /center
app.get("/center",(req,res)=>{
    var uid=req.query.uid;
    //console.log(uid);
    pool.getConnection((err,conn)=>{
        var sql="SELECT * from poem_detail,user_detail,user_login WHERE poem_detail.uid=user_detail.userId AND user_login.uid=user_detail.userId AND user_login.uid=?";
            conn.query(sql,[uid],(err,result)=>{
                if(err)throw error;
                res.json(result);
                console.log(result);
            });
            conn.release();
        });
});

//处理分页 /center/:page
//app.get("/center/:page",(req,res)=>{
//    var page=req.params.page;
//    console.log(page);
//    pool.getConnection((err,conn)=>{
//        var sql="SELECT count(*) from poem_detail,user_detail,user_login WHERE poem_detail.uid=user_detail.userId AND user_login.uid=user_detail.userId AND user_login.uid=?";
//        conn.query(sql,[page],(err,result)=>{
//            if(err)throw error;
//            res.json(result);
//           // console.log(ceil(intval(result[0])/8));
//            res.json({"page":1});
//            console.log(result);
//        });
//        conn.release();
//    });
//});



//处理详情页 /detail/:pid/:uid
app.get("/detail/:pid/:uid",(req,res)=>{
    var uid=req.params.uid;
    var pid=req.params.pid;
    console.log(req.params);
    pool.getConnection((err,conn)=>{
        var sql="SELECT * from poem_detail,comment_detail WHERE poem_detail.uid=? AND poem_detail.pid=? AND comment_detail.oid=poem_detail.uid ORDER BY comment_detail.c_time DESC";
        conn.query(sql,[uid,pid],(err,result)=>{
            if(err)throw error;
            res.json(result);
            console.log(result);
        });
        conn.release();
    });
});


//处理评论内容   /comment
app.get("/comment",(req,res)=>{
    var uid=req.query.uid;
    var detail=req.query.c_detail;
    pool.getConnection((err,conn)=>{
        var sql="INSERT INTO comment_detail VALUES(null,?,now(),3,'Images/3.jpg',?)";
        conn.query(sql,[detail,uid],(err,result)=>{
            if(err)throw error;
            res.json(result);
            //console.log(result);
            if(result.length==0){res.json([])}
        });
        conn.release();
    });
});


//处理首页 /index
app.get("/index",(req,res)=>{
    pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM poem_detail ORDER BY p_time DESC LIMIT 5 ";
        conn.query(sql,(err,result)=>{
            if(err)throw error;
            res.json(result);
            //console.log(result);
        });
        conn.release();
    });
});


// /poemr 热门博客排行
app.get("/poemr",(req,res)=>{
    pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM poem_detail WHERE p_cate=1 ORDER BY r_count DESC LIMIT 5 ";
        conn.query(sql,(err,result)=>{
            if(err)throw error;
            res.json(result);
            console.log(result);
        });
        conn.release();
    });
});


// /poemc 热度排行
app.get("/poemc",(req,res)=>{
    pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM poem_detail WHERE p_cate=1 ORDER BY c_count DESC LIMIT 5 ";
        conn.query(sql,(err,result)=>{
            if(err)throw error;
            res.json(result);
            console.log(result);
        });
        conn.release();
    });
});


// /new 处理用户写入的文章
app.post("/new",(req,res)=>{
    req.on("data",(data)=>{
        var obj=qs.parse(data.toString());
        var u=obj.uid;
        var c=obj.p_cate;
        var d=obj.p_detail;
        var t=obj.p_title;
        var p='';
        pool.getConnection((err,conn)=>{
            var sql="INSERT INTO poem_detail VALUES(null,?,?,?,?,0,0,now(),?)";
            conn.query(sql,[p,c,d,t,u],(err,result)=>{
                if(result.length==1){
                    res.json({"code":1,"msg":"用户发表成功","uid":result[0].uid});
                }else{
                    res.json({"code":2,"msg":"网络出现异常"});
                }
            });
            conn.release();
        })
    })
});

