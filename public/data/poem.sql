SET NAMES GBK;
DROP DATABASE IF EXISTS poem;
CREATE DATABASE poem CHARSET=UTF8;
USE poem;

/**用户注册信息表**/
CREATE TABLE user_login(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(32),
upwd VARCHAR(32),
phone VARCHAR(32),
email VARCHAR(32),
rtime VARCHAR(100)
);
INSERT INTO user_login VALUES(1,'tom','123456','13522222222','10210@qq.com','2010-01-01');
INSERT INTO user_login VALUES(2,'lucy','654321','13522222222','10210@qq.com','2010-01-01');
INSERT INTO user_login VALUES(3,'jimmy','987654','13810000000','10210@qq.com','2010-01-01');

select * from user_login;

/**用户详细信息表**/
CREATE TABLE user_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,    
  pi VARCHAR(32),
  ctime VARCHAR(100),
  userId INT    /*用户编号*/
);

INSERT INTO user_detail VALUES(null,'Images/4.jpg',now(),1);
INSERT INTO user_detail VALUES(null,'Images/5.jpg',now(),2);
INSERT INTO user_detail VALUES(null,'Images/3.jpg',now(),3);

/**用户作品发表内容**/
CREATE TABLE poem_detail(
  pid INT PRIMARY KEY AUTO_INCREMENT,    
  pic VARCHAR(32),
  p_cate INT,      #1-诗词类 2-文化 3-旅游 4-热点新闻
  p_detail VARCHAR(500),   /*作品内容*/
  p_title VARCHAR(100),    /*作品标题*/
  r_count INT,           /*阅读数量*/
  c_count INT,           /*评论数量*/
  p_time VARCHAR(100),      /*发表时间*/
  uid INT                /*用户编号*/
);

INSERT INTO poem_detail VALUES
(null,'Images/5.jpg',1,'
	依旧的早上六点四十
        依旧的晚上四点半
	按部就班却不就班
	即使食堂的菜依旧那么难吃
	但丝毫不影响蓝色的天空
	不牵动遍地四季的花草树木
	即使不是那样的心情
	但丝毫不影响地球的转动
	不耽搁世界的改变
	心在呐喊
	细胞在撕裂
	我在做什么
	鬼知道我又经历了什么','给rambow',100,50,now(),1),
(null,'Images/5.jpg',1,'
	依旧早八点
	中国队0-1不敌伊朗
	画风突变的媒体大红字写着
	请加油 再加油
	让人哭笑不得
	无聊时看过一场国足比赛
	不是球迷的我已然看呆90分钟
	下半场50分钟解说仍为国足解围说没进入状态
	我只能应声呵呵
	但在中韩热浪期间
	突闻大胜韩国
	不禁哈哈哈哈','趣闻',28,10,now(),1),
(null,'Images/5.jpg',1,'
	说走过的路看过的书都会像烙印一样
	展现在面容上
	我去过一些地方看过一些人文
	城市的气质却没彰显在脸上
	只有肤浅和小白
	漫步朋友圈的时候
	ZQ 我以前的同事 一个性格开朗多多国语言的上海姑娘
	去过的地方走过的路比我想的都远
	近些天她又晒出最北边城市挪威
	脸上开朗的笑容 深邃的眼神 饱满的孩提心展现给我
	那种说走就走 说看世界就去看世界的心 我好生羡慕和赞叹
	回想自己
	只是去过一些地方
	真正留在心里的呢
	仍是一张白纸
	又怎敢奢求在脸上彰显文化气质呢
	早上看到一篇文章《先看过世界再结婚》
	出去看看的心又开始砰咚
	徐志摩 林徽因 等
	烂漫又不乏底蕴的语言
	只怕真的是看了世界 读了很多书 才能真正悟出来的吧
	而属于我的世界的路才刚刚架起桥梁
	加油~','先看过世界再结婚',5500,121,now(),1),
(null,'Images/5.jpg',1,'测试语句4','琵笆仙 咏平遥古城',512,121,now(),1),
(null,'Images/5.jpg',1,'测试语句6','浣溪沙：忆江南',23,12,now(),1),
(null,'Images/5.jpg',1,'测试语句7','第一首：颂词',122,1,now(),1),
(null,'Images/5.jpg',1,'测试语句8','小园梅',422,111,now(),1),
(null,'Images/5.jpg',2,'测试语句1','周仓能进关帝庙只因做对一件事',512,121,now(),2),
(null,'Images/5.jpg',2,'测试语句2','周作人究竟是怎么死的？',23,12,now(),2),
(null,'Images/5.jpg',2,'测试语句3','东方出版社吴王夫差和伍子胥情同父子',122,1,now(),2),
(null,'Images/5.jpg',2,'测试语句4','艰难旅程1',299,11,now(),2),
(null,'Images/5.jpg',2,'测试语句5','艰难旅程2',322,111,now(),2),
(null,'Images/5.jpg',2,'测试语句6','艰难旅程3',422,11,now(),2),
(null,'Images/5.jpg',2,'测试语句7','艰难旅程4',122,11,now(),2),
(null,'Images/5.jpg',2,'测试语句8','艰难旅程5',122,11,now(),2),
(null,'Images/5.jpg',3,'测试语句1','去西藏净化心灵，你和我和他',512,121,now(),3),
(null,'Images/5.jpg',3,'测试语句2','周庄和乌镇的美',23,12,now(),3),
(null,'Images/5.jpg',3,'测试语句3','那些年我们一起走过的路',122,1,now(),3),
(null,'Images/5.jpg',3,'测试语句4','不知道还要走多远',299,11,now(),3),
(null,'Images/5.jpg',3,'测试语句5','泰国之旅',322,111,now(),3),
(null,'Images/5.jpg',3,'测试语句6','那些你们不知道的景点',422,11,now(),3),
(null,'Images/5.jpg',3,'测试语句7','艰难旅程',122,11,now(),3),
(null,'Images/5.jpg',3,'测试语句8','最美的日出',122,11,now(),3),
(null,'Images/5.jpg',4,'测试语句1','叶匡政：当代语文教育扼杀了汉字文化',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句2','揭发者斯诺登的伟大时刻',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句3','大学校长的声望从何而来？',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句4','考古与公众有多远之',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句5','留住一个必然消失的世界',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句6','有多少意外可以重来？',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句7','钱多就是专业投资者吗？',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句8','租房而住的罗永浩答年轻网友问',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句9','这个时代是如何赚钱的？',122,11,now(),0),
(null,'Images/5.jpg',4,'测试语句10','房贷利率上调会伤及刚需，你怎么看？',122,11,now(),0);


/**用户评论内容**/
CREATE TABLE comment_detail(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  c_detail VARCHAR(500),   /*评价内容*/
  c_time VARCHAR(100),	   /*评论时间*/
  otherid INT,	          /*评论用户的编号*/
  oip VARCHAR(32),	     /*评论用户的头像*/
  oid INT                /*用户编号*/
);

INSERT INTO comment_detail VALUES
(NULL, '写的非常好，哈哈哈',now(),2,'Images/5.jpg',1),
(NULL, '我觉得还缺点什么东西啊',now(),3,'Images/3.jpg',1);


