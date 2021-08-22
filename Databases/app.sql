-- 删除数据库
DROP DATABASE vite_app;
-- 创建数据库
CREATE DATABASE vite_app;
USE vite_app;

-- 创建新闻表
CREATE TABLE IF NOT EXISTS `news_tb` (
   `id` INT UNSIGNED AUTO_INCREMENT, 
   -- 新闻类别
   `news_type` VARCHAR(100) NOT NULL,
   -- 新闻标题
   `news_title` VARCHAR(100) NOT NULL,
   -- 新闻作者
   `news_author` VARCHAR(40) NOT NULL, 
   -- 作者头像
   `news_avater` VARCHAR(100) NOT NULL, 
   -- 新闻图片1
   `news_picture1` VARCHAR(500),
   -- 新闻图片2
   `news_picture2` VARCHAR(500),
   -- 新闻图片3
   `news_picture3` VARCHAR(500),
   -- 新闻内容
   `news_content` TEXT NOT NULL,
   -- 最新修改时间
   `news_update_time` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--  插入数据
INSERT INTO news_tb ( news_type,news_title, news_author,news_avater,news_picture1,news_picture2,news_picture3,news_content,news_update_time ) VALUES ('recommend','调皮员工模仿老板瘸腿，下一秒收获“死亡凝视”：找到扣工资理由','电波曳长空','http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg','https://img13.360buyimg.com/ddimg/jfs/t1/205367/38/2456/1106880/6121f27fEfa6d7ca9/a7fa9e494fc0024f.jpg','https://img10.360buyimg.com/ddimg/jfs/t1/202205/15/2571/3380421/6121f29fE847b35a0/76b209b820df6658.jpg','https://img12.360buyimg.com/ddimg/jfs/t1/201124/22/2857/3061956/6121f295Ea785adf1/84e8d4b2d64b19c5.jpg','sfssff当时的方式的方式大','2020-10-10 10:23:12');

INSERT INTO news_tb ( news_type,news_title, news_author,news_avater,news_picture1,news_picture2,news_picture3,news_content,news_update_time ) VALUES ('recommend','双打世界上海市实施广东省山东省','啦啦啦','http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg','https://img13.360buyimg.com/ddimg/jfs/t1/205367/38/2456/1106880/6121f27fEfa6d7ca9/a7fa9e494fc0024f.jpg','','','个杀害萨方式是河北省','2018-10-12 10:34:12');



-- 创建新闻详情表
CREATE TABLE IF NOT EXISTS `news_detail_tb` (
   `id` INT UNSIGNED AUTO_INCREMENT, 
   `news_id` VARCHAR(100) NOT NULL,
   `password` VARCHAR(40) NOT NULL,
   `news_content` VARCHAR(100) NOT NULL,
   `news_comments` VARCHAR(100) NOT NULL,
   `video_update_time` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 创建评论表
CREATE TABLE IF NOT EXISTS `comments_tb` (
   `id` INT UNSIGNED AUTO_INCREMENT, 
   `user` VARCHAR(100) NOT NULL,
   `avater` VARCHAR(100) NOT NULL,
   `comments` VARCHAR(40) NOT NULL,
   `mark` VARCHAR(100),
   `video_update_time` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 创建推荐表
CREATE TABLE IF NOT EXISTS `comments_tb` (
   `id` INT UNSIGNED AUTO_INCREMENT, 
   `user` VARCHAR(100) NOT NULL,
   `avater` VARCHAR(100) NOT NULL,
   `comments` VARCHAR(40) NOT NULL,
   `mark` VARCHAR(100),
   `video_update_time` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 创建科技列表
CREATE TABLE IF NOT EXISTS `comments_tb` (
   `id` INT UNSIGNED AUTO_INCREMENT, 
   `user` VARCHAR(100) NOT NULL,
   `avater` VARCHAR(100) NOT NULL,
   `comments` VARCHAR(40) NOT NULL,
   `mark` VARCHAR(100),
   `video_update_time` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 创建视频表
CREATE TABLE IF NOT EXISTS `video_tb` (
   `id` INT UNSIGNED AUTO_INCREMENT, 
   `video_title` VARCHAR(100) NOT NULL,
   `video_author` VARCHAR(40) NOT NULL,
   `video_link` VARCHAR(100),
   `video_update_time` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--  生成数据
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','http://stream4.iqilu.com/ksd/video/2020/02/17/97e3c56e283a10546f22204963086f65.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/upload_transcode/202002/17/20200217104524H4D6lmByOe.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/upload_transcode/202002/17/20200217101826WjyFCbUXQ2.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/upload_transcode/202002/16/20200216050645YIMfjPq5Nw.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/article/202002/16/3be2e4ef4aa21bfe7493064a7415c34d.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://stream7.iqilu.com/10339/upload_transcode/202002/09/20200209105011F0zPoYzHry.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://v-cdn.zjol.com.cn/276984.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://v-cdn.zjol.com.cn/276987.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://v-cdn.zjol.com.cn/276990.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://v-cdn.zjol.com.cn/277000.mp4','2021-12-10 12:23:12');
INSERT INTO video_tb (video_title, video_author,video_link,video_update_time ) VALUES ('电波曳长空','ssd是上海市','https://v-cdn.zjol.com.cn/277004.mp4','2021-12-10 12:23:12');



-- 创建用户表
CREATE TABLE IF NOT EXISTS `user_tb` (
   `id` INT UNSIGNED AUTO_INCREMENT, 
   `user` VARCHAR(100) NOT NULL,
   `password` VARCHAR(40) NOT NULL,
   `mark` VARCHAR(100),
   `video_update_time` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;