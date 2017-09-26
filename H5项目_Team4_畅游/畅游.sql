/*
SQLyog Enterprise v12.08 (64 bit)
MySQL - 5.0.45-community-nt : Database - tourism
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tourism` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `tourism`;

/*Table structure for table `activity` */

DROP TABLE IF EXISTS `activity`;

CREATE TABLE `activity` (
  `ActivityId` int(15) NOT NULL auto_increment,
  `ActivityTitle` varchar(200) NOT NULL,
  `ActivityContent` varchar(1000) NOT NULL,
  `StartTime` varchar(50) NOT NULL,
  `EndTime` varchar(50) NOT NULL,
  `ActPicSencha` varchar(500) default NULL,
  PRIMARY KEY  (`ActivityId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `activity` */

insert  into `activity`(`ActivityId`,`ActivityTitle`,`ActivityContent`,`StartTime`,`EndTime`,`ActPicSencha`) values (6,'金秋最美枫叶【四川】【成都-稻城亚丁-丹巴-俄初山彩林】8天7晚自由行','第一天：成都—雅安—夹金山—丹巴(全程约450公里，行车约8小时） \r\n第二天：丹巴＿甲居藏寨＿八美＿塔公＿新都桥(全程单边160公里，行车时间为3至4小时左右) \r\n第三天：新都桥＿68km＿雅江140km＿理塘＿146km＿稻城（全程约350多公里,行车约8小时） \r\n第四天：稻城＿傍河＿贡嘎郎吉岭寺＿香格里拉镇＿扎灌崩＿冲古寺＿珍珠海＿冲古寺＿扎灌崩＿亚丁村(全程150公里，稻城至香格里拉镇行车为3小时，香格里拉镇至扎灌崩行车为１个小时左右） \r\n第五天：亚丁村＿扎灌崩＿冲古寺＿洛绒牛场＿牛奶海＿五色海＿洛绒牛场＿冲古寺＿扎灌崩＿香格里拉镇 \r\n第六天:香格里拉镇—俄初山—稻城(147公里左右) \r\n第七天：稻城＿146km＿理塘＿140km＿雅江＿68km＿新都桥(全程约350多公里,行车约13小时) \r\n第八天：新都桥－30km—折多山—46km—康定—49km—泸定—28km—二郎山—110km—雅安—137km—成都（全程约330公里，行车约8小时） \r\n\r\n0月8号起拼团价格3450元／人(8天用车＋7晚住宿＋亚丁门票和观光车＋甲居门票＋塔公寺门票＋泸定桥门票＋旅游意外险) \r\n至少五人起成团， 一车不超过12人 QQ  729951290','2016-10-25','2016-12-10',NULL),(7,' 28机车少年、玩车旅行8载','每一次都是属于自己的旅行，再远也要去。 每天忙着工作、忙着生活、无论如何，要给自己一点放松的时间。 本人是一个喜欢一直在路上的游子，幽默风趣，喜欢极限运动，热爱旅行的80末小子，旅行已经成了生活的一部分，去走走看看，不自虐，不奢侈，不穷游。2014年骑行中国西北15000公里，用车轮丈量了西部之大，何为丝绸之路，丝绸重地等等所谓的蛮荒之地。西北风情无言形容、大漠孤烟直，长河落日圆。戈壁、沙漠、草原、湖泊、森林、雪域高山等等。体验不同西北名族的异域风情。后续待之...','2016-10-20','2016-12-10',NULL),(8,'##评论赢惊喜##  攻略在手，说走就走','期待有一场完美的旅行。但前提是，出行前能有一份靠谱的攻略游记。\r\n\r\n海绵想与你分享四季变幻的风景，也请你写下关于你的心情和感受，好吗？\r\n\r\n\r\n\r\n参与方式：周一、三、五，海绵会在这里与你分享一篇攻略游记，点开传送门阅读并写下您的想法~海绵会在本周的活动中，抽取一名用心写下评论的幸运小伙伴，送他一份神秘礼物哦','2016-10-22','2016-11-05',NULL);

/*Table structure for table `activitypic` */

DROP TABLE IF EXISTS `activitypic`;

CREATE TABLE `activitypic` (
  `ActivityTitle` varchar(200) default NULL,
  `Pic` varchar(1000) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `activitypic` */

insert  into `activitypic`(`ActivityTitle`,`Pic`) values ('金秋最美枫叶【四川】【成都-稻城亚丁-丹巴-俄初山彩林】8天7晚自由行','58875006-28bb-49b6-8a78-4f992bf18b4b.jpeg'),('金秋最美枫叶【四川】【成都-稻城亚丁-丹巴-俄初山彩林】8天7晚自由行','529972b4-b122-41ae-8eff-022b0e293d6c.jpeg'),('金秋最美枫叶【四川】【成都-稻城亚丁-丹巴-俄初山彩林】8天7晚自由行','de4e060e-15f1-4b6d-8f46-c0dd745e4976.jpeg'),(' 28机车少年、玩车旅行8载','0b204de6-a6aa-4770-aa25-ed62c8ef83ee.jpeg'),(' 28机车少年、玩车旅行8载','eab48c99-b53e-4ad7-b055-824dc2b0dce6.jpeg'),(' 28机车少年、玩车旅行8载','dfe6e493-93d8-436f-8798-770cc1343091.jpeg'),('##评论赢惊喜##  攻略在手，说走就走','0796ef19-24ac-4c46-85d0-6fee0485f5fb.jpeg'),('##评论赢惊喜##  攻略在手，说走就走','9196dfbd-ead5-4fc2-bc8c-d9f9b5932517.jpeg'),('##评论赢惊喜##  攻略在手，说走就走','87930c4d-1dee-4cb3-aaa5-0ad1f148aae6.png');

/*Table structure for table `address` */

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `UserName` varchar(50) NOT NULL,
  `personName` varchar(50) default NULL,
  `Address` varchar(200) default NULL,
  `PhoneNumber` varchar(50) default NULL,
  `code` varchar(50) default NULL,
  PRIMARY KEY  (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `address` */

/*Table structure for table `city` */

DROP TABLE IF EXISTS `city`;

CREATE TABLE `city` (
  `CityId` int(11) NOT NULL,
  `ProvineId` int(11) NOT NULL,
  `CityName` varchar(20) NOT NULL,
  PRIMARY KEY  (`CityId`),
  KEY `ProvineId` (`ProvineId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `city` */

insert  into `city`(`CityId`,`ProvineId`,`CityName`) values (10201,102,'杭州市'),(10202,102,'宁波市'),(10203,102,'温州市'),(10204,102,'嘉兴市'),(10205,102,'湖州市'),(10206,102,'绍兴市'),(10207,102,'金华市'),(10208,102,'衢州市'),(10209,102,'舟山市'),(10210,102,'台州市'),(10211,102,'台州市');

/*Table structure for table `collect` */

DROP TABLE IF EXISTS `collect`;

CREATE TABLE `collect` (
  `UserName` varchar(50) NOT NULL default '',
  `TravelNoteId` int(11) NOT NULL,
  PRIMARY KEY  (`UserName`,`TravelNoteId`),
  KEY `TravelNoteId` (`TravelNoteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `collect` */

insert  into `collect`(`UserName`,`TravelNoteId`) values ('12345aa',52),('lichen',52),('lichen',53),('zhaoliyin',53),('12345aa',54),('lichen',54),('12345aa',55),('lichen',55),('12345aa',56),('2_差有有有',56),('12345aa',109),('2_差有有有',109);

/*Table structure for table `destination` */

DROP TABLE IF EXISTS `destination`;

CREATE TABLE `destination` (
  `DestinationId` int(11) NOT NULL auto_increment,
  `DestinationName` varchar(50) NOT NULL default '',
  `Ddescribe` varchar(500) NOT NULL default '',
  `Pic` varchar(500) default NULL,
  `content` varchar(2000) default NULL,
  PRIMARY KEY  (`DestinationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `destination` */

/*Table structure for table `exchange` */

DROP TABLE IF EXISTS `exchange`;

CREATE TABLE `exchange` (
  `Exchangeno` int(11) unsigned NOT NULL auto_increment,
  `UserId` int(11) default NULL,
  `GoodId` int(11) NOT NULL,
  `GoodIntegral` varchar(10) NOT NULL,
  `Count` varchar(20) NOT NULL default '1',
  `GoodName` varchar(20) NOT NULL,
  PRIMARY KEY  (`Exchangeno`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

/*Data for the table `exchange` */

insert  into `exchange`(`Exchangeno`,`UserId`,`GoodId`,`GoodIntegral`,`Count`,`GoodName`) values (6,NULL,101,'45000','1','Silver 运动摄像机'),(7,NULL,102,'1500','1','飞科 大功率电吹风机2200W'),(8,NULL,103,'3900','1','锐玛 专业双肩相机包 藏青'),(9,NULL,104,'750','1','飞科毛球修剪器 充电式'),(10,NULL,105,'1300','1','小米（MI）小米智能手环'),(11,NULL,106,'1300','1','小米（MI）小米智能手环'),(12,NULL,107,'1300','1','小米（MI）小米智能手环'),(13,NULL,108,'1300','1','小米（MI）小米智能手环'),(14,NULL,109,'5000','1','骆驼 户外登山徒步双肩背包50L 墨绿'),(15,NULL,110,'3700','1','AKG头戴式耳机 折叠便携式耳机 红色'),(16,NULL,103,'3900','1','锐玛 专业双肩相机包 藏青'),(17,NULL,102,'1500','1','飞科 大功率电吹风机2200W'),(18,NULL,102,'1500','1','飞科 大功率电吹风机2200W'),(19,NULL,102,'1500','1','飞科 大功率电吹风机2200W'),(20,NULL,102,'1500','1','飞科 大功率电吹风机2200W'),(21,NULL,101,'45000','1','Silver 运动摄像机'),(22,NULL,101,'45000','1','Silver 运动摄像机'),(23,NULL,102,'1500','1','飞科 大功率电吹风机2200W'),(24,NULL,101,'45000','1','Silver 运动摄像机'),(25,NULL,101,'45000','1','Silver 运动摄像机'),(26,NULL,101,'45000','1','Silver 运动摄像机'),(27,NULL,105,'1300','','小米（MI）小米智能手环'),(28,NULL,108,'5000','','骆驼 户外登山徒步双肩背包50L 墨绿'),(29,NULL,102,'1500','','飞科 大功率电吹风机2200W');

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `GoodId` int(30) unsigned NOT NULL auto_increment,
  `GoodName` varchar(30) NOT NULL,
  `GoodIntegral` varchar(10) NOT NULL,
  `Quantity` varchar(20) NOT NULL,
  `GoodsDescribe` text,
  `GoodPic` varchar(200) default NULL,
  `GoodsPic` varchar(255) default NULL,
  PRIMARY KEY  (`GoodId`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;

/*Data for the table `goods` */

insert  into `goods`(`GoodId`,`GoodName`,`GoodIntegral`,`Quantity`,`GoodsDescribe`,`GoodPic`,`GoodsPic`) values (101,'Silver 运动摄像机','45000','30','<div class=\'shouhuo\'>\r\n       <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/></p>\r\n       \r\n       <p>关于物流：由京东商城／圆通／顺丰等进行配送</p>\r\n       \r\n       <p>退货说明：兑换商品属于积分奖励，一律不予退货</p>\r\n       \r\n       <p>换货须知：若商品存在质量问题，请务必在收货后3日内</p>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       \r\n       <p>特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div>  ','ee151312-d700-41d7-a797-2d5e0da477f2.jpeg','57a3e98eN9dcf4605.jpg'),(102,'飞科 大功率电吹风机2200W','1500','40','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/>\r\n       关于物流：由京东商城／圆通／顺丰等进行配送<br/>\r\n       退货说明：兑换商品属于积分奖励，一律不予退货<br/>\r\n       换货须知：若商品存在质量问题，请务必在收货后3日内<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div> ','wKgBs1e8GXCABrfTAAAy7Ms2szQ24(2).jpeg','57a057adN441472df.jpg'),(103,'锐玛 专业双肩相机包 藏青','3900','50','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/>\r\n       关于物流：由京东商城／圆通／顺丰等进行配送<br/>\r\n       退货说明：兑换商品属于积分奖励，一律不予退货<br/>\r\n       换货须知：若商品存在质量问题，请务必在收货后3日内<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div> ','018d8c5e-c956-4976-9144-7481fb14ffbd.jpeg','5732d508N59624ee3.jpg'),(104,'飞科毛球修剪器 充电式','750','10','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/>\r\n       关于物流：由京东商城／圆通／顺丰等进行配送<br/>\r\n       退货说明：兑换商品属于积分奖励，一律不予退货<br/>\r\n       换货须知：若商品存在质量问题，请务必在收货后3日内<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div> ','e37c4f00-7345-4ebc-b532-4b7e924914f7.jpeg','56775564N21be4347.jpg'),(105,'小米（MI）小米智能手环','1300','50','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/>\r\n       关于物流：由京东商城／圆通／顺丰等进行配送<br/>\r\n       退货说明：兑换商品属于积分奖励，一律不予退货<br/>\r\n       换货须知：若商品存在质量问题，请务必在收货后3日内<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div> ','2c90490e-2f73-4c38-a2f1-1463f77f25c2.jpeg','55ff7130N160f94e9.jpg'),(106,'罗技M185 无线鼠标 黑色灰边','1280','20','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/>\r\n       关于物流：由京东商城／圆通／顺丰等进行配送<br/>\r\n       退货说明：兑换商品属于积分奖励，一律不予退货<br/>\r\n       换货须知：若商品存在质量问题，请务必在收货后3日内<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div> ','wKgBs1eysyaAaTcKAAAlDdolAv458.jpeg','578ee87bN53415627.jpg'),(107,'德尔玛 小巧香薰静音净化加湿器   M1806','1800','1','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/>\r\n       关于物流：由京东商城／圆通／顺丰等进行配送<br/>\r\n       退货说明：兑换商品属于积分奖励，一律不予退货<br/>\r\n       换货须知：若商品存在质量问题，请务必在收货后3日内<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div> ','wKgBs1ey6mmAO-gMAAAqlfUhXQc95.jpeg','571d94ffNc9a695cd.jpg'),(108,'骆驼 户外登山徒步双肩背包50L 墨绿','5000','20','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/>\r\n       关于物流：由京东商城／圆通／顺丰等进行配送<br/>\r\n       退货说明：兑换商品属于积分奖励，一律不予退货<br/>\r\n       换货须知：若商品存在质量问题，请务必在收货后3日内<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div> ','eaeac362-d59b-4bc0-a64b-9239bb9588c4.jpeg','TB2RDc.cFXXXXa4XpXXXXXXXXXX_!!648476316.jpg'),(109,'AKG头戴式耳机 折叠便携式耳机 红色','3700','1','<div>\r\n    <p>发货时间：每月01日－15日兑换的商品，于当月31日前发出<br/>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每月16日－31日兑换的商品，于次月15日前发出<br/></p>\r\n       <p>关于物流：由京东商城／圆通／顺丰等进行配送</p>\r\n       <p>退货说明：兑换商品属于积分奖励，一律不予退货</p>\r\n       <p>换货须知：若商品存在质量问题，请务必在收货后3日内</p>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系积分商城掌柜进行退换<br/>\r\n       <p>特殊说明：1.收货地址暂不支持港、澳、台及海外地址<br/>\r\n         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.商品可能会有临时缺货的情况，还请大家谅解</p>\r\n</div>  ','8c66eb6e-5dd2-4e11-92ac-60ab0855c7af.jpeg','572082dcNc32990eb.gif');

/*Table structure for table `goods_success` */

DROP TABLE IF EXISTS `goods_success`;

CREATE TABLE `goods_success` (
  `GoodId` int(20) NOT NULL,
  `UserId` int(30) NOT NULL,
  `GoodName` varchar(40) NOT NULL,
  `UserName` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `goods_success` */

/*Table structure for table `integral` */

DROP TABLE IF EXISTS `integral`;

CREATE TABLE `integral` (
  `UserId` int(10) default NULL,
  `GoodIntegral` varchar(10) NOT NULL,
  `UserName` varchar(20) NOT NULL,
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `integral` */

insert  into `integral`(`UserId`,`GoodIntegral`,`UserName`) values (1059,'20500','12345aa'),(1060,'1350','zhaoliyin'),(1061,'3000','lichen'),(1066,'10050','2_差有有有'),(NULL,'5','My_Name_丽');

/*Table structure for table `manager` */

DROP TABLE IF EXISTS `manager`;

CREATE TABLE `manager` (
  `ManagerId` int(11) NOT NULL auto_increment,
  `ManagerName` varchar(10) NOT NULL,
  `Mpassword` varchar(20) NOT NULL,
  `pic` blob,
  PRIMARY KEY  (`ManagerId`)
) ENGINE=InnoDB AUTO_INCREMENT=2004 DEFAULT CHARSET=utf8;

/*Data for the table `manager` */

insert  into `manager`(`ManagerId`,`ManagerName`,`Mpassword`,`pic`) values (2001,'胖小编','1222',NULL),(2002,'阳阳小编','222222222',NULL),(2003,'小编海绵','123',NULL);

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `OrderId` int(11) NOT NULL auto_increment,
  `UserName` varchar(50) NOT NULL,
  `GoodId` varchar(50) NOT NULL,
  `GoodName` varchar(50) NOT NULL,
  `Consignee` varchar(100) NOT NULL,
  `ReceiptAddress` varchar(200) default NULL,
  `ReceiptCode` varchar(100) default NULL,
  `ReceiptTEl` varchar(100) default NULL,
  `OrderTime` varchar(50) NOT NULL,
  PRIMARY KEY  (`OrderId`),
  KEY `UserId` (`UserName`),
  KEY `GoodId` (`GoodId`),
  KEY `provineId` (`ReceiptAddress`),
  KEY `CityId` (`ReceiptCode`),
  KEY `CountyId` (`ReceiptTEl`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

/*Data for the table `orders` */

insert  into `orders`(`OrderId`,`UserName`,`GoodId`,`GoodName`,`Consignee`,`ReceiptAddress`,`ReceiptCode`,`ReceiptTEl`,`OrderTime`) values (17,'12345aa','102','飞科 大功率电吹风机2200W','a','a','aa','a','2016-11-03 23:22:28.007'),(18,'12345aa','102','飞科 大功率电吹风机2200W','a','aa','aa','aaaa','2016-11-03 23:23:34.108'),(19,'12345aa','101','Silver 运动摄像机','aa','aa','aa','aa','2016-11-03 23:24:22.373'),(20,'12345aa','104','飞科毛球修剪器 充电式','a','aa','aa','aa','2016-11-03 23:25:04.294'),(21,'12345aa','104','飞科毛球修剪器 充电式','a','aa','aa','aa','2016-11-03 23:25:06.341'),(22,'12345aa','104','飞科毛球修剪器 充电式','a','aa','aa','aa','2016-11-03 23:25:26.294'),(23,'12345aa','104','飞科毛球修剪器 充电式','aS','ASAS','SAAS','ASS','2016-11-03 23:25:32.582'),(24,'12345aa','102','飞科 大功率电吹风机2200W','邢','江苏省苏州市','110','18896997025','2016-11-03 23:30:09.236'),(25,'12345aa','101','Silver 运动摄像机','邢振领','苏州','110','18896997025','2016-11-04 09:23:22.800'),(26,'12345aa','102','飞科 大功率电吹风机2200W','sas','sas','aa','aaa','2016-11-04 11:34:36.348');

/*Table structure for table `praise` */

DROP TABLE IF EXISTS `praise`;

CREATE TABLE `praise` (
  `UserName` varchar(100) NOT NULL,
  `TravelNoteId` varchar(100) NOT NULL,
  PRIMARY KEY  (`UserName`,`TravelNoteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `praise` */

insert  into `praise`(`UserName`,`TravelNoteId`) values ('12345aa','37'),('12345aa','54'),('12345aa','55'),('12345aa','59'),('2_差有有有','54'),('2_差有有有','56'),('lichen','52'),('lichen','53'),('lichen','54'),('lichen','55'),('zhaoliyin','51');

/*Table structure for table `provine` */

DROP TABLE IF EXISTS `provine`;

CREATE TABLE `provine` (
  `provineId` int(11) NOT NULL auto_increment,
  `provineName` varchar(20) default NULL,
  PRIMARY KEY  (`provineId`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;

/*Data for the table `provine` */

insert  into `provine`(`provineId`,`provineName`) values (102,'浙江'),(103,'江苏');

/*Table structure for table `question` */

DROP TABLE IF EXISTS `question`;

CREATE TABLE `question` (
  `QuestionId` int(11) NOT NULL auto_increment,
  `QuestionName` varchar(50) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `QuestionContent` text NOT NULL,
  `QuestionTime` varchar(50) NOT NULL,
  PRIMARY KEY  (`QuestionId`),
  KEY `UserId` (`UserName`)
) ENGINE=InnoDB AUTO_INCREMENT=123342 DEFAULT CHARSET=utf8;

/*Data for the table `question` */

insert  into `question`(`QuestionId`,`QuestionName`,`UserName`,`QuestionContent`,`QuestionTime`) values (123330,'秘鲁普诺办玻利维亚签证问题','zhaoliyin','<p>1.持有秘鲁旅游签证到达秘鲁普诺是否可以在那申请玻利维亚签证去玻旅游？ 2.若可以申请，是在玻利维亚驻秘鲁普诺领馆申请吗？ 3..请问玻利维亚驻秘鲁普诺领馆的电话和邮箱是？</p>','2016-10-25 18:36:19.781'),(123331,'去俄罗斯旅游可以住当地朋友家吗？需要做外藉游客登记吗？','lichen','<p>各位，我在BOOKING上看到有些酒店有一个外藉游客登记费用。貌似俄罗斯有规定，在一个城市待超过7天，就要去当地什么部门进行注册。一般入住的酒店，会直接帮忙注册。那如果是住ARIBNB或者朋友家里呢？我是想问问，这个一定要注册登记吗？如果没有登记，会不会对个人出入境，以及下次签证有什么影响？</p>','2016-10-25 18:38:06.863'),(123332,'旧护照有水印破损，上面的挪威申根签是好的，能否办理新护照，新旧护照一起使用，还是需要转签','chenqiaoen','<p>前段时间办理了一个挪威的申根签，但是现在挪威申根签所在的护照有破损，现在办理新护照，请问下，新护照下来后，是否可以一起使用新旧护照出入境？如果不行，能否将旧护照上的有效签证转移到新护照上..</p>','2016-10-25 18:39:03.361'),(123337,'新西兰皇后镇（及附近）待5-6天，怎么安排行程比较好？','My_Name_丽','<p>春节过后，一家三口去新西兰旅行，想在皇后镇(及附近）呆5-6天，怎么安排行程比较好？我们考虑的是，镇上逛逛一天（孩子四岁，不想太累），如果比较远的话，就考虑包车（3-4天），</p><p><br/></p><p>求各位大神的经验？谢谢！</p><p><br/></p>','2016-11-07 00:33:43'),(123338,'从格雷梅坐夜班大巴到费特希耶之后，乘坐什么交通工具到死海？','My_Name_丽','<p>1.听说要坐小巴前往，请问在哪里坐呢？小巴车站具体在哪里？‘</p><p>2.你们建议在费特希耶住呢还是在死海住？</p><p>3.死海离鱼市是不是很近？4.费特希耶坐大巴到棉花堡4个小时吗？有哪几个班次的时间呀？我是想下午坐车去棉花堡的，中途是否要在</p><p>Denizli转车？</p><p>5.棉花堡到伊斯坦布尔怎么去？附近有没有机场？</p><p><br/></p>','2016-11-07 00:40:00'),(123339,'去塔岛自驾用什么卡作手机导航？谢谢','My_Name_丽','<p><span style=\"color: rgb(50, 50, 50); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Hiragino Sans GB&quot;, 宋体, sans-serif; line-height: 26px; widows: 1; background-color: rgb(255, 255, 255);\">去塔岛自驾用什么卡作手机导航？谢谢</span></p>','2016-11-07 01:02:47'),(123340,' 芬兰自由行，关于交通问题','2_差有有有','<p>准备去芬兰看极光，麻烦问下：</p><p>1，是不是每个机场门口都能打到出租车？</p><p>2，是不是酒店能提供当地出租车的服务？</p><p>3，有没有uber呢？</p><p>谢谢拉</p><p><br/></p>','2016-11-07 01:07:41'),(123341,'你好','12345aa','你好好','2016-11-07 09:59:55.570');

/*Table structure for table `question_answer` */

DROP TABLE IF EXISTS `question_answer`;

CREATE TABLE `question_answer` (
  `AnswerId` int(11) NOT NULL auto_increment,
  `AnswerContent` varchar(500) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `QuestionId` int(11) NOT NULL,
  `AnswerTime` varchar(50) NOT NULL,
  PRIMARY KEY  (`AnswerId`),
  KEY `UserId` (`UserName`),
  KEY `QuestionId` (`QuestionId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `question_answer` */

insert  into `question_answer`(`AnswerId`,`AnswerContent`,`UserName`,`QuestionId`,`AnswerTime`) values (1,'你住别人家住7天去啊，反正我最多住了3晚沙发，没人鸟这个注册的，出境时问都不会问。','lichen',123331,'2016-10-06'),(2,'可以。是。embassypages.com自己找。','chenqiaoen',123332,'2016-10-13'),(3,'旭川到层云峡，每天只有7班往返的班车巴士。其中只有一班去往大雪湖，而大函因为台风被损毁目前还在维修，巴士不停站。一日游只能搭乘巴士到层云峡站然后到滝见台，看两个瀑布后搭乘返程的巴士回到层云峡，搭乘缆车上山，大致就是这些行程了。','12345aa',123330,'2016-10-24'),(4,'旭川到层云峡，每天只有7班往返的班车巴士。其中只有一班去往大雪湖，而大函因为台风被损毁目前还在维修，巴士不停站。一日游只能搭乘巴士到层云峡站然后到滝见台，看两个瀑布后搭乘返程的巴士回到层云峡，搭乘缆车上山，大致就是这些行程了。','2_差有有有',123330,'2016-11-03 18:30:56.946'),(5,'11111qqqqqq','2_差有有有',123330,'2016-11-03 21:05:03.850'),(6,'aaa','2_差有有有',123332,'2016-11-04 11:30:36.277');

/*Table structure for table `strategynote` */

DROP TABLE IF EXISTS `strategynote`;

CREATE TABLE `strategynote` (
  `StrategyNoteId` int(10) NOT NULL auto_increment,
  `StrategyName` varchar(20) default '',
  `StrategyContent` text,
  `StrategyNoteTime` varchar(50) NOT NULL default '',
  `StrategyProfile` text,
  `StrategyPic` varchar(200) default NULL,
  PRIMARY KEY  (`StrategyNoteId`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8;

/*Data for the table `strategynote` */

insert  into `strategynote`(`StrategyNoteId`,`StrategyName`,`StrategyContent`,`StrategyNoteTime`,`StrategyProfile`,`StrategyPic`) values (109,'手把手教你拿下英国签证','<p>签证费要多少钱？</p><p>以前游客都会申请六个月多次往返签证，85英镑；一至两年签324英镑；五年签588英镑。但是显然，现在的大英帝国对中国公民更加友好，新系统里85英镑可以申请两年多次往返的旅行签证，已经没有了6个月的选项。如果进入的是老系统，即使选择6个月多次往返也会自动升级到两年多次往返，不用担心。</p><p><br/></p><p>非加急状态的普通申请，大部分人可以在两周内拿到的两年往返签最终费用为850人民币。如果需要办理加急服务打算在三到五天内拿到签证，费用是2050人民币。更着急的小伙伴需要办理24小时出签服务的，费用是6850人民币。（敲黑板划重点，提前安排好行程是多么的重要，省钱啊。）</p><p><br/></p><p>相对来讲，英国签证的出签率比较低，申请的材料也比较复杂，如果觉得自己没把握的小伙伴可以找代办，算上时间成本，反而代办更划算一些。例如同样是六个月多次往返的签证官网价格850，代办只需九百左右。时间成本也是成本哦。</p><p>英国使馆有一项很贴心的服务叫做：如意签。</p><p><br/></p><p>英国在中国共有15个签证申请中心，比任何国家都多，但是依然有很多人无法前往使馆办理。所以英国使馆在北京、沈阳、济南、武汉、重庆、成都、上海、杭州、南京、广州、深圳、福州、西安、昆明和长沙共15个城市开通了如意签服务。</p><p><br/></p><p>使用如意签服务，会有专人上门来采集指纹和收集材料，免去你自己跑使馆的麻烦。</p><p><br/></p><p>怎样使用如意签：</p><p><br/></p><p>第一步：发邮件到ukvisasondemand@vfshelpline.com预约。请至少提前3天预约。</p><p><br/></p><p>第二步：在得到确认后的24小时内付费。使馆会在你付费成功后确认你的预约日期。</p><p><br/></p><p>第三步：服务人会将在预约的日期和时间到达你所在的城市，接收你的申请和采集指纹。</p><p><br/></p><p>此服务的价格是多少？</p><p><br/></p><p>如意签服务的价格根据申请人的人数和地点有所不同。具体价格请查看网站： www.vfsglobal.co.uk/china</p><p><br/></p><p>如意签能接收大型团队申请吗？</p><p><br/></p><p>可以。接收一个人的申请或者团队申请会有不同的价格。</p><p><br/></p><p>使用如意签会让我的签证得到更快的处理吗？</p><p><br/></p><p>会和审理其他签证一样的速度审理如意签。符合英速签申请条件的申请人同样可以使用英速签服务。</p><p><br/></p><p>使用如意签会提高我签证通过的几率吗？</p><p><br/></p><p>会以审理其他签证一样的审核标准审理如意签。在2014年，96%申请非定居签证的中国客户获得了签证。比上一年增长了11%。</p><p><br/></p><p>如意签申请的流程安全吗？</p><p><br/></p><p>是的，工作人员会有严格的流程确保你的指纹数据的安全。</p><p><br/></p><p>我可以在其他城市使用这个服务吗？</p><p><br/></p><p>如意签服务暂时仅适用于昆明、长沙、西安、北京、沈阳、济南、武汉、重庆、成都、上海、杭州、南京、广州、深圳和福州共15个城市。</p><p><br/></p><p>我需要预约吗？</p><p><br/></p><p>是的，必须在预约之后才会提供此服务。这是为了确保英国指纹和签证流程的诚信和安全。</p><p><br/></p><p>更多信息请访问网站www.vfsglobal.co.uk/china 或发送邮件到UKvisasondemand@vfshelpline.com 。</p><p><br/></p><p>不同类型的签证都需要注意什么？</p><p><br/></p><p>旅行签证：</p><p><br/></p><p>01. 在英国当地没有直系亲属。</p><p>02. 全程交通预定单以及行程单一定要提供，旅行规划越详细越好。</p><p><br/></p><p>探亲访友签证：</p><p><br/></p><p>01. 邀请方的有效居留证明 (复印件):护照首页末页签字页、有效签证页/居留证/工作许可/学习许可复印件、在校证明/学生证、在职证明等。&nbsp;</p><p>02. 对方的住宿证明，如：租房合同复印件.如邀请人有房产，需提供房税证明以及邀请人居所内人员清单。&nbsp;</p><p>03. 邀请函（英文的原件)：邀请方出具的邀请信并签名，需包含如下信息： ①邀请人的地址、详细联系方式（电话、邮箱等）； ②申请人的姓名、护照号； ③双方的关系说明； ④访问的目的和停留时间、地点； ⑤在境外住宿地址及谁来承担在境外旅行居住的费用。&nbsp;</p><p>04. 亲属关系需要提供出生证、结婚证、派出所证明、亲属关系公证等。访友目的请提供合影照、书信、通话记录等证明材料，无需公证。&nbsp;</p><p>05. 警察局警署证明:在英国当地无犯罪记录证明。</p><p><br/></p><p>Tips：</p><p>a.邀请方承担费用的证明 (复印件):如果由邀请方承担境外停留期间的费用，需提供邀请人收入及财政状况证明。&nbsp;</p><p>b.如果有直系亲属在英国上学/工作/持有永居证明，建议按照探亲来申请签证。&nbsp;</p><p>c.如果出境记录较少，有朋友或者亲戚在英国，建议按照访友办理签证。只要您的家人或者朋友在英国的身份是合理的，都可以以个人的名义发送邀请函邀请国内的人员去英国。</p><p><br/></p><p>拥有英国签证还可以去哪？</p><p>英国签证相对来说申请审核比较严格。所以好不容易拿到签证，除了英国，你知道还有哪些地方可以去吗？</p><p><br/></p><p>01. 翡翠岛国—爱尔兰：拥有英国“C”类短期签证且已入境英国的游客可以免签（至2016年10月）前往。&nbsp;</p><p>Tips：持英国永居或其它超过6个月的长期签证者反而不免签。</p><p><br/></p><p>02. 海外属地—直布罗陀：靠近西班牙，是很受英国人喜爱的海滨度假胜地。拥有12个月以上的英国签证，或者至少6个月的多次签证，或者7天以上的申根签证就能直接去。&nbsp;</p><p>Tips：当地没有中国使馆，请拿好证件。</p><p><br/></p><p>03. 皇家属地—泽西岛：离法国更近。面积不大，持英国签证者可自由出入。</p><p><br/></p><p>04. 山水小国—黑山共和国：地中海边的多山小国，拥有英美加签证者单次入境可免签7天。</p><p><br/></p><p>05. 国中国—圣马力诺：被意大利环抱的小国，单次入境免签90天。但它没有自己的机场，因此你还需要申根签证进入意大利。</p><p><br/></p><p>06. 塞尔维亚共和国：内陆小国，持欧盟（包括英国）和美国永居签证者单次入境免签90天。</p><p><br/></p><p>07. 多米尼加共和国：持有效的英美加或申根签证的中国公民，只要在多米尼加共和国机场购买旅游卡就可以免签30天。</p><p><br/></p>','2016-11-02 14:32:27.209','英国—曾经的日不落帝国，二次世界大战之前可谓是世界老大哥。 你可能早就听说过赫赫有名的大本钟、泰晤士河、牛津大学、剑桥大学。甚至在少年时就学过徐志摩的“轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩.....”。 运动少年可能想看一次真正的英超，文艺少女也会想喝一次纯正的英式下午茶，魔法迷会想看一次哈利波特的魔法世界。这里的一切都在吸引着你，有了行程，有了规划，只差签证就可以出发。 现在就让我来教你一步步拿下签证，开启英国之旅~',NULL),(112,'味蕾之都的冰火双体验','<p>重庆城区的景点听起来比较多，但是很多都是可以看一眼就走的标志性建筑，而且距离不是太远。这次介绍的四天行程没有包含武隆天坑地缝和大足石刻（会有专门一篇攻略来介绍这些地方哟），所以完全可以两天走完。但是重庆不光是用眼睛欣赏，用脚丈量就足够的，它还有大量的美食等着填饱你的胃，还有充满特色的山城文化等着你体验。所以个人建议在重庆游玩的话至少要三天以上。在这里，我们需要放慢脚步，慢慢走，慢慢吃。</p><p>D1. 十八梯—解放碑—洪崖洞—千厮门嘉陵江大桥</p><p>D2. 重庆海昌加勒比海水世界—南山一棵树观景园</p><p>D3. 磁器口古镇—白公馆—渣滓洞—长江索道</p><p>D4. 四川美术学院（黄桷坪校区）—涂鸦一条街—李子坝地铁站—皇冠大扶梯—朝天门</p><p>十八梯其实已经被拆迁的差不多了，也许再过个一两年就不复存在了，当初几千户的居民现在只有零星的百户还坚守在这里，如果不是这些“钉子户”，现在的你们也无法看到这么原汁原味的老重庆。对于当地人来说，这里没什么吸引力，因为从小到大他们都是在类似的环境中成长，但是对于不是山城出生的我们来说，这里的每一个角落都有着别样的韵味。从略带荒凉的十八梯老区可以看到不远处的解放碑，那里是繁荣都市的缩影，仿佛此时的十八梯就是一个被遗忘的角落，让人有种时空飞逝的错觉。</p><p><img src=\"/images/ueditor/793728563605016576.jpeg\" title=\"\" alt=\"Stra_2_4.jpeg\"/>从十八梯出来溜达个十几分钟就能到解放碑了。游客通常都会来这合影一张，毕竟它是全国唯一一座纪念中华民族抗日战争胜利的国家纪念碑，标示着重庆对于国家的伟大贡献。这里好似北京的王府井，上海的南京路一样。以碑为中心的十字路口，延伸出的四条步行街上有高大上的奢侈品商场、星级酒店，也有接地气的小吃店、青年旅社，如果想安排住宿的话，这附近是非常好的选择。著名的八一路好吃街就在旁边，走累了，在街边来一碗好又来酸辣粉，或者爱丽丝烤串、廖记棒棒鸡那是相当棒啊。</p><p><img src=\"/images/ueditor/793728731352010752.jpeg\" title=\"\" alt=\"Stra_2_7.jpeg\"/></p><p><br/></p><p>如果你很向往宫崎骏描绘的世界，那你一定会爱上充满奇幻风格的洪崖洞。从解放碑步行过来可以看到一架海盗船，但是这里其实是洪崖洞的九楼哦，想拍全景需要坐电梯下到三层或者去千厮门嘉陵江大桥上拍。这里的夜景特别美，白天倒是一般。这座木质结构的吊脚楼群是重庆最具民族特色的房屋建筑。从最高处一层层走下来，有民族美食街、特产街、外国风情街等等，就仿佛穿越次元墙来到了千与千寻的梦幻世界之中。</p><p><br/></p><p><br/></p><p>不管是不是为了拍摄洪崖洞的全景，我们都有必要夜游千厮门嘉陵江大桥。它和长江上的东水门大桥有着一样的梭形桥塔、一样的斜拉索，并称为“重庆两江大桥”。6号线经过时的轰隆隆之感，也算是当地的一大特色。站在此处，可以从独特的视角审视重庆，渝中半岛林立的高楼代表了时代的进程，洪崖洞璀璨的灯火告诉你传统是如何在现代绽放光明，千厮门大桥秀美的外形映衬在嘉陵江晃动的倒影中，这是山城夜景的代表。如果是白天来的话，一定要看看两江交汇的神奇景象。</p><p><img src=\"/images/ueditor/793728871819251712.jpeg\" title=\"\" alt=\"Stra_2_5.jpeg\"/></p><p><br/></p><p>到了火炉重庆怎么可以不玩水呢！重庆海昌加勒比海水世界位于避暑胜地——南山。每到夏季，带着一家老小的重庆人都会来这儿避暑纳凉。这里林木葱郁，山峦相望，仿佛一座远离城市喧嚣的世外桃源。它不仅有充满异域风情的加勒比海文化，同时还具有浓郁而神秘的玛雅旧城风貌，炫酷的玛雅图腾、精美的雕刻彩陶、斑斓的城墙壁画遍及整个园区，是一个让人在炎炎夏日体验刺激与冰爽的大型水主题公园。</p><p><img src=\"/images/ueditor/793729024777129984.jpeg\" title=\"\" alt=\"Stra_2_9.jpeg\"/><img src=\"/images/ueditor/793729050878283776.jpeg\" title=\"\" alt=\"Stra_2_10.jpeg\"/></p>','2016-11-02 16:18:51.727',' 山城重庆，有着麻的顺辣的爽的火锅，也有体验刺激与清凉的水上世界。虽然不大却错综复杂，别的城市你可以理解为2D平面，而这里却是三维立体。拿着手机导航明明已经走到了目的地，可是眼前依然是一堵墙。走进大门明明应该是一楼大厅，可是电梯告诉你此时在八楼。很多的不可思议在这里都变成了理所当然。美食和景点都在吸引着你，可是面对陌生的城市又会有些许担心，别怕，现在让我来告诉你重庆应该如何逛吃逛吃逛吃吧！',NULL),(113,' 再不去就来不及了 即将消失的7大美景','<p>当然，如同加德满都的达拉哈拉塔同样被毁的名胜古迹不算少数，阿富汗的巴米扬大佛、中国的圆明园、希腊的帕特农神庙等，都是令人遗憾的存在。除此之外，还有很多名城正在因为各种各样的原因慢慢在消失，如果不想错过这些美景，趁现在还来得及，十一长假不妨好好计划一番，不给自己留遗憾！</p><p><img src=\"/images/ueditor/793731695584088064.jpeg\" title=\"\" alt=\"Stra_3_1.jpeg\"/></p><p>威尼斯--文艺复兴时期的重镇之一，一座建立在水上的城市。近百年来，世界上再也没有哪座城市像她那样受到如此多的赞美。可是，水城威尼斯正在渐渐下沉。由于长期被水浸泡，圣马可广场、随处可见的雕像和教堂墙壁留下的斑斑污渍。</p><p><br/></p><p>二战后，为满足发展需求，威尼斯人大量开采地下水，这种行为虽然后来被禁止，但恶果已不可挽回，致使整个城市在20年内下沉了30厘米。而且全球变暖的趋势，也加速了这座水城的毁灭，威尼斯目前正以每年两毫米的速度下沉，以此推断，一个世纪内，它将沉为水下天堂。</p><p><br/></p><p><strong>马尔代夫</strong></p><p><strong><img src=\"/images/ueditor/793734551812837376.jpeg\" title=\"\" alt=\"Stra_3_2.jpeg\"/></strong></p><p></p><p><br/></p><p>马尔代夫是全球最出名的蜜月圣地，由1190个珊瑚岛组成，其中100多个岛上修建了度假村，一岛一酒店是马尔代夫的旅游特色。这里还是麦兜最想去的地方哦！</p><p><br/></p><p>可是这个美丽的海岛国的平均海拔只有1-2米，全球变暖导致海平面不断上升，这里的居民也称许多绿地已经慢慢的被海水淹没，据统计，马尔代夫93个岛屿已经遭受海水侵蚀，预估100年后将不再适合人类居住，将会被海水吞噬。如此梦幻的马尔代夫，如果在有生之年不感受一番，着实是人生一大憾事！</p><p><strong><br/></strong><br/></p><p><strong><br/></strong></p><p><br/></p><p><br/></p>','2016-11-02 16:42:02.789',' 去年尼泊尔大地震的时候，闻名世界的加德满都的达拉哈拉塔(Dharahara Tower)毁于一旦，很多人都在痛心疾首，“我还没有见过真面目，就再也见不到了！” 去过的人拿着照片缅怀，一阵叹息！',NULL);

/*Table structure for table `strategypic` */

DROP TABLE IF EXISTS `strategypic`;

CREATE TABLE `strategypic` (
  `StrategyName` varchar(200) default NULL,
  `StrategyPic` varchar(200) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `strategypic` */

insert  into `strategypic`(`StrategyName`,`StrategyPic`) values ('手把手教你拿下英国签证','b7433131-7773-4ea5-aa11-ce0b8e4ccac5.jpeg'),('手把手教你拿下英国签证','3040799c-c372-4a4e-8616-84dcbf2e8a3b.jpeg'),('手把手教你拿下英国签证','8102bf02-5902-49c2-acae-aac222d18e10.jpeg'),('手把手教你拿下英国签证','57421321-004d-4407-b509-af24fbde8dfc.jpeg'),('味蕾之都的冰火双体验','f75d460a-5a0f-47ef-bd18-a14628178436.jpeg'),('味蕾之都的冰火双体验','559df314-df65-4983-a895-21b4dea99a4f.jpeg'),('味蕾之都的冰火双体验','c02cfba2-f0e6-4638-8044-b803d3f5f9bd.jpeg'),(' 再不去就来不及了！那些即将消失的全球7大美景','e1ffd042-b626-4f58-b8b1-c4746da0758c.jpeg'),(' 再不去就来不及了！那些即将消失的全球7大美景','911a113d-6870-4a84-b859-a55e9c97fe5d.jpeg'),(' 再不去就来不及了！那些即将消失的全球7大美景','d4af8d25-70e4-4de4-9037-7562e57e6061.jpeg'),(' 再不去就来不及了！那些即将消失的全球7大美景','57a9571f-abf4-4c42-be93-996f56fe564e.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','4d35901d-c62c-4274-9f5c-9a532a2e94c5.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','d545f186-e7a5-4d04-9b0c-659d99139206.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','38a2b726-fa98-4772-965a-002b2d0e8019.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','c098bbb9-e0ba-42f7-b4d8-885b2b0f1e51.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','4974c6a3-c523-480d-874b-f058e3721df6.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','e9a7da3d-53e3-4773-ad56-55cd29215d1c.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','39453bba-cfce-45ee-a776-8497e47fd988.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','f443808f-f3b2-4264-877e-779f67a71a4f.jpeg'),(' 再不去就来不及了 即将消失的全球7大美景','410ed4fb-4349-4c21-84d3-2399b8eda6f2.jpeg'),(' 再不去就来不及了 即将消失的7大美景','603d918b-e873-4de9-98ce-fc48842df1e9.jpeg'),(' 再不去就来不及了 即将消失的7大美景','9de5d8dd-2b9e-409f-8375-d44768c649a5.jpeg'),(' 再不去就来不及了 即将消失的7大美景','e7f23d80-f685-482e-a215-df7e6bf4e5c2.jpeg');

/*Table structure for table `travel_answer` */

DROP TABLE IF EXISTS `travel_answer`;

CREATE TABLE `travel_answer` (
  `TanswerId` int(11) NOT NULL auto_increment,
  `CommentId` int(11) NOT NULL,
  `TComment_content` varchar(500) NOT NULL,
  `TanswerTime` varchar(20) NOT NULL,
  PRIMARY KEY  (`TanswerId`),
  KEY `CommentId` (`CommentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `travel_answer` */

/*Table structure for table `travel_comment` */

DROP TABLE IF EXISTS `travel_comment`;

CREATE TABLE `travel_comment` (
  `CommentId` int(11) NOT NULL auto_increment,
  `TravelNoteId` int(11) NOT NULL,
  `UserName` varchar(1000) NOT NULL,
  `Comment_Contnet` varchar(500) NOT NULL,
  `CommentTime` varchar(50) NOT NULL,
  PRIMARY KEY  (`CommentId`),
  KEY `UserId` (`UserName`(255)),
  KEY `TravelNoteId` (`TravelNoteId`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

/*Data for the table `travel_comment` */

insert  into `travel_comment`(`CommentId`,`TravelNoteId`,`UserName`,`Comment_Contnet`,`CommentTime`) values (4,32,'12345aa','sasa','2016-10-31 10:11:32.064'),(5,32,'12345aa','sasa','2016-10-31 10:11:32.077'),(8,53,'12345aa','aaa','2016-10-31 10:15:03.447'),(14,53,'12345aa','good','2016-10-31 10:24:04.180'),(27,37,'12345aa','good','2016-10-31 13:55:47.230'),(28,37,'12345aa','good','2016-10-31 13:55:47.232'),(29,54,'12345aa','1111111','2016-10-31 14:06:20.622'),(30,54,'2_差有有有','文章很美','2016-11-02 16:06:28.355'),(31,32,'12345aa','kdshfkjsd','2016-11-03 11:21:20.561'),(32,54,'2_差有有有','wwwww','2016-11-03 16:30:25.499'),(33,56,'2_差有有有','dasd','2016-11-03 16:42:41.781'),(34,56,'2_差有有有','dasd','2016-11-03 16:42:41.777'),(35,51,'2_差有有有','dasd','2016-11-03 16:43:20.548'),(36,51,'2_差有有有','dasd','2016-11-03 16:43:20.549'),(37,55,'lichen','啊啊','2016-11-03 17:39:55.142'),(38,53,'lichen','嘻嘻嘻','2016-11-03 17:42:22.200'),(39,55,'12345aa','文章很好','2016-11-03 23:42:49.824'),(40,52,'12345aa','很好','2016-11-03 23:45:58.370'),(41,55,'12345aa','赞','2016-11-04 08:40:45.222'),(42,54,'12345aa','good','2016-11-04 08:49:25.349'),(43,57,'zhaoliyin','9天的行程竟然梅里和丙中洛都走过，厉害!楼主的帖子写的好详尽。赞一个！','2016-11-06 21:17:49.073'),(44,58,'2_差有有有','相当赞，计划自驾游去玩玩','2016-11-06 21:26:33.157'),(45,61,'12345aa','尽管砖头美玉飞过来','2016-11-07 13:44:03.275');

/*Table structure for table `travelnote` */

DROP TABLE IF EXISTS `travelnote`;

CREATE TABLE `travelnote` (
  `TravelNoteId` int(10) NOT NULL auto_increment,
  `userId` int(10) default NULL,
  `UserName` varchar(20) default '',
  `Tname` varchar(300) NOT NULL default '',
  `TrvaelContnet` text NOT NULL,
  `TravelImg` blob,
  `TravelNoteTime` varchar(50) NOT NULL default '',
  `PraiseNum` int(11) default NULL,
  PRIMARY KEY  (`TravelNoteId`),
  KEY `userId` (`userId`),
  CONSTRAINT `travelnote_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

/*Data for the table `travelnote` */

insert  into `travelnote`(`TravelNoteId`,`userId`,`UserName`,`Tname`,`TrvaelContnet`,`TravelImg`,`TravelNoteTime`,`PraiseNum`) values (32,NULL,'12345aa','叫我如何不想她---台湾','作为南京人一直有种台湾情结。刚巧美国打工时候认识不少台湾朋友于是带着这份情结踏上台湾这块土地。二来解答心中一直以来的种种疑惑。由于时间有限这次只选择了台中，台北，新北第一站-台中\r\n在台中待了3天\r\n这三天朋友要么开车要么骑车\r\n载着我到处跑\r\n特别感谢她的接待\r\n让我看到了一个热情热闹美丽的台中\r\n\r\n\r\n关于【心之芳庭】\r\n知道心之芳庭\r\n是因为蚂蜂窝里面的一个蜂友的帖子\r\n当时看到他的照片\r\n第一印象就是\r\n这个地方我一定要去\r\n因为太美了\r\n事实上也的确没让我们失望\r\n精美的建筑以及成片的绿色\r\n都让我们为之兴奋\r\n于是照片也拍得特别多',NULL,'2016-10-24 20:01:55',NULL),(34,NULL,'lichen',' 最后悔的就是来了——《帕劳》','帕劳共和国，台湾人称她为帛琉。位于菲律宾以东太平洋上，距离菲律宾约800公里，距离台湾约1600公里，香港约2700公里，是个群岛，包含200多个岛屿，其中9个岛屿是经常有人居住的，帕劳在历史上曾先后被西班牙、德国、日本所统治，二战后托管给美国，1994年独立。帕劳居民约20000人，百分之七十是本地土著，百分之三十是菲律宾人，语言上通行英语，在货币上通行美元。\r\n\r\n 在帕劳你会发现日本人居多，还有韩国人和台湾人。因为台湾与帕劳距离很近，交往也密切，帕劳几乎所有的物质都是靠进口，其中有一部分就是来自台湾。我们大陆人来帕劳旅行，找个好的导游是个关键的问题，要找成立久的和多年服务台湾客人的地接社，毕竟我们大陆今年赴帕劳的游客才增多，所以找这样的地接社，导游服务质量很好，我们玩的也开心。我们选择的是帕劳当地很有名气的一家KBT地接社，之前就是一直服务台湾客人了，导游的中文和英文都不错，就是国语说的带有台湾的腔调，这也许就是服务了太多的台湾游客造成的。我是来帕劳之前就在国内提前半个月就定好了，给我们定出海行程的是小颖，来之前许多不太了解的也是问她，人还蛮实在的东北女孩。之前要是早点找到小颖机票和酒店也就一起在她那定了，我俩还能省1000多。',NULL,'2016-10-23 20:39:55',NULL),(36,NULL,'zhaoliyin','彩云之南——昆明、大理、丽江5日游走','台历交替之际\r\n回忆着刚过去的一年走过的路\r\n7段旅途，4个国家，13个城市\r\n意外的发现似乎是中了海岛的魔咒吧\r\n一月三亚，六月济州岛，八月嵊泗，十月涠洲岛，以及上个月的巴厘岛\r\n一半的时间都在过夏天\r\n\r\n一年来和许小佳同学的恋爱算是走过磨合期尘埃落定\r\n我并不认为那些爱情里陪你到最后的必须是你最爱亦或称之为对的人\r\n世界那么大，人来人往皆是缘\r\n缘分来了，他走近你\r\n缘分尽了，他离开你\r\n能伴你同行的，是在你最需要他时恰巧出现在你身边\r\n能给你拥抱和温暖的人\r\n这些年，兜兜转转\r\n有辜负、有迷惘、有罢了\r\n有暗恋、有表白、有得不到、有道不明\r\n也许一个人要走很多的路\r\n经历过生命中无数突如其来的繁华与苍凉才会变得成熟\r\n\r\n我会艳羡青梅竹马的爱情\r\n也会感激参与我的人生向我走来的每一个身影\r\n那些教会我付出，包容，改变，收敛光芒，磨平棱角\r\n让我体会了怦然心动，心如死灰后仍相信真爱不灭\r\n人的一生\r\n都有一些说不出的秘密，挽不回的遗憾\r\n触不到的梦想，忘不了的爱\r\n这些都是时光给予的馈赠\r\nI want to be your favoriet hello and your hardest goodbye',NULL,'2016-10-21 20:49:55',NULL),(37,NULL,'zhaoliyin','触不到的梦想，忘不了的爱','因为台湾与帕劳距离很近，交往也密切，帕劳几乎所有的物质都是靠进口，其中有一部分就是来自台湾。我们大陆人来帕劳旅行，找个好的导游是个关键的问题，要找成立久的和多年服务台湾客人的地接社，毕竟我们大陆今年赴帕劳的游客才增多，所以找这样的地接社，导游服务质量很好，我们玩的也开心。我们选择的是帕劳当地很有名气的一家KBT地接社，之前就是一直服务台湾客人了，导游的中文和英文都不错，就是国语说的带有台湾的腔调，这也许就是服务了太多的台湾游客造成的。我是来帕劳之前就在国内提前半个月就定好了，给我们定出海行程的是小颖，来之前许多不太了解的也是问她，人还蛮实在的东北女孩。之前要是早点找到小颖机票和酒店也就一起在她那定了，',NULL,'2016-10-25 20:00:51',NULL),(50,NULL,'2_差有有有','勇闯摩洛哥（十一天自由行之六城纪事+冗长tips 全篇完）','<p>开头的话</p><p><br/></p><p><br/></p><p>摩洛哥归来已经整整半个月，路上就策划的游记却迟迟没有动笔，几乎每天呆坐窗前冥思苦想。之前在穷游写过九篇了还从来没有这么</p><p><br/></p><p>纠结过呢！不知怎地今天没来由哼起了那句老歌“想说爱你并不是很容易的事， 那需要太多的勇气， 想说忘记你也不是很容易的事，&nbsp;</p><p><br/></p><p>我只有伫立在风中，想你……”</p><p><br/></p><p>……真是好契合好契合现在的心情啊，标题顺势就落在鲜亮亮的“勇”字上，OK啦，那就开篇吧！</p><p><br/></p><p>是什么吸引我们去摩洛哥？小时候读的《一千零一夜》？早年看过的《北非谍影》？三毛的西撒哈拉？还是Bertie Higgins那略带忧郁的《卡萨布兰卡》……唔，都是，也都不是，说来也简单得不要不要的，居然只是一张照片里的色彩，没错，就是舍夫沙万那一往情深的蓝、蓝、蓝……</p><p><br/></p><p>天（摄于沃卢比利斯罗马古城遗迹）</p><p><img src=\"/images/ueditor/792904702986686464.jpg\" alt=\"MN2.jpg\"/></p><p><br/></p><p>地（摄于舍夫沙万城外）</p><p><img src=\"/images/ueditor//792896392841531392.jpg\" alt=\"792896392841531392.jpg\"/></p><p><br/></p><p>墙之梦（摄于马拉喀什的里亚德）<img src=\"/images/ueditor//792896433748578304.jpg\" alt=\"792896433748578304.jpg\"/></p><p><br/></p><p>花之梦（摄于马拉喀什马约尔花园）</p><p><img src=\"/images/ueditor//792897468915388416.jpg\" alt=\"792897468915388416.jpg\"/></p><p><br/></p><p>交通：</p><p>&lt;城际交通&gt;</p><p>首选火车，虽稍贵于长途大巴，但有空调比较舒适，即便有晚点现象但时间上大体可控。一般选择二等车厢即可。</p><p><br/></p><p>摩洛哥铁路“ONCF”网站地址：http://www.oncf.ma/Pages/Accueil.aspx</p><p><br/></p><p>次选长途大巴，最好选择CTM公司，车况好运行和服务比较正规，我们因车次的原因坐过的Nejme Chamal公司稍差。</p><p><br/></p><p>末选出租车，司机素质无法预测，经历过的高下落差很大，且普遍缺乏契约精神，到达时多要钱或不想找零的现象几乎全覆盖。</p><p><br/></p>',NULL,'2016-10-31 09:44:25',NULL),(51,NULL,'zhaoliyin','印度最西北，是梦中的克什米尔【从克什米尔南下喜马偕尔，瑞诗凯诗的30天印度之旅】','<p>克什米尔，是个小梦</p><p><br/></p><p>2011年底，我第一次到印度。那是我间隔年的第4个月，曼谷的飞机到加尔各答。从出机场开始，之前旅行的倦怠好似突然就一扫而空。到达背包客聚集的旅馆，开始一个月的义工生活，每天感受着穿越市集的混乱嘈杂但是生机勃勃。在满街仅占一席之地却足以谋生的小摊，和印度人来来往往的穿梭姿态中，脸上一直挂着笑容，再不经意地得到笑容的回应。那也是我第一次开始了解印度。</p><p><br/></p><p>随后的旅行，走走停停，住了各种沙发，感受了各种温情。那时年轻，没有成见，只把所见，当作当然。在大街上走着走着，突然停下来拿一把干草喂一匹正在休息的拉车的马；或者走路时要绕过发呆的牛，小心避让满地的牛粪，也是只觉兴奋快乐，未觉是天下大奇。</p><p><br/></p><p>三个月就这么过得飞快。大家都说，对于印度，要么爱，要么恨。遇到太多来了无数次，或者待了很久很久的旅行者，他们的爱恨显而易见。而我，也许注定是要用把签证用到最后一天，来表达这个国家所带来的复杂感情。一定会再回来的，那时心里，早已如此认定。</p><p><br/></p><p>在加尔各答旅馆的多人间看了第二遍《Three Idiots》（在后来又看了好多次），开头配着音乐的山路风景，和结尾高原上的学校，恍如仙境的雪山蓝湖，在那时就已把拉达克这个名字，种在了心底。无奈正当冬季，大雪封山，只有盼着下次，等待它开山的短暂的夏季。只是并不知下次，到底是何时。</p><p><br/></p><p>14年房车旅行，在新藏线途径班公错，后来从新疆出境巴基斯坦，又经过风之谷和吉尔吉特。当时只觉遗憾，没有去到K2的大本营斯卡杜。后来才知道，这些地方竟都和克什米尔有关。虽然知道有过战争，现在依旧是争议边界，但那时的“克什米尔”这个词，对于我来说就是雪山峡谷和充满野性的美景，就像它美丽的名字一样。所以还曾发下宏愿说想要绕着新疆塔什库尔干，巴基斯坦的克什米尔，印度的克什米尔，再到西藏走个大环线。被人戏谑说还没等你走到边境线，早就被乱枪打死。于是，印度，拉达克，克什米尔，就像在我心里，编起了一首小合唱。直到今年夏天，朋友说计划了印度旅行。“印度”这个名字，让这首小合唱，又阻挡不住地登上舞台。</p><p><br/></p><p>“那今年的假期，就去克什米尔吧！”</p><p>结果，朋友的印度之旅不小心烂尾，倒是圆了我的克什米尔小梦。</p><p><br/></p><p>画笔下的克什米尔之旅</p><p><br/></p><p>因为又开始学画画，所以这次旅行带上了画纸和水彩。这样子，夹子能用他的相机记录，而我也能用我的画笔记录我们的旅行。所以，这次就以画的形式先睹为快好了。</p><p><img src=\"/images/ueditor//792901899409035264.jpg\" alt=\"792901899409035264.jpg\"/></p><p><br/></p><p>在斯利那加，达尔湖上划着小船游荡。湖中一片片飘满的睡莲，被当地人称作“漂浮的花园”。总觉得莲叶漂浮在水面上，像一块块小盘子，也许装些水珠，也许只装了达尔胡的清透空气。</p><p><img src=\"/images/ueditor/792906042337005568.jpg\" alt=\"L2.jpg\"/></p><p><br/></p><p><br/></p><p>旅程和花销</p><p><img src=\"/images/ueditor/792906214680956928.jpg\" alt=\"L3.jpg\"/></p><p><br/></p><p>其实整段旅程，只有11天是真正在克什米尔地区，后来就继续南下了。但是因为它是旅行的缘起，也算是圆了一个小梦，所以还是叫它</p><p><br/></p><p>作克什米尔之旅吧！</p><p><br/></p><p>这次旅行，我们从在到达新德里机场的两小时后，就直接飞往了斯利那加。斯利那加5天，遇到大罢工。</p><p><br/></p><p>接着16小时的车程去到列城。列城6天，又是18小时的车程到达喜马偕尔邦的蒙拉里（蒙拉里就是地图里翻译的马纳利也是穷游翻译的默纳利，至于为什么是蒙拉里，就是个后面会讲的小故事了）。</p><p>蒙拉里4天，接着一整天的大巴到达西姆拉，喜马偕尔邦首府，一日游之后，转了小火车大火车，到达了恒河边的圣城瑞诗凯诗。为了学瑜伽和冥想，我临时改变计划，在瑞诗凯诗待了10天。夹子则提前回国。</p><p><br/></p>',NULL,'2016-10-31 09:49:46',NULL),(52,NULL,'lichen','寻找麦哲伦｜菲律宾（宿务＋薄荷岛＋马尼拉）完','<p>曾经有一个葡萄牙人，他坚信大地是圆形的，盼望做一件人类历史上破天荒的壮举——环绕地球航行。他向皇室提出了这个请求，结果葡萄牙皇室不鸟他，觉得没这必要。于是，他投奔西班牙。</p><p><br/></p><p>西班牙人乐了，又可以开辟东方新航线，又可以寻找香料，有何不可？塞维利亚的要塞司令非常欣赏他，答应了他的请求，并把女儿也嫁给了他。次年，这个年轻人的到了国王的接见，当然他的情商也确实不错——没有空手去——他给国王送上了一只精致的地球仪。国王心花怒放，马上替他组建船队。</p><p><br/></p><p>这个年轻人就是麦哲伦。</p><p><br/></p><p>当人们谈起人类第一次环球航行的时候，总会提及这个名字。而事实上，麦哲伦并没有完成全球航行，而是在他到达宿务的时候，插手小岛首领之间的内讧，被土著打死了。</p><p><br/></p><p>作为个一心想要环游世界的人，因为麦哲伦的故事，我在印象中第一次记住了宿务这个名字，并且列在了菲律宾的must see list里。</p><p><br/></p><p>4月去了菲律宾，先上一点图：</p><p><img src=\"/images/ueditor/792907942138613760.jpg\" style=\"\"/></p><p><img src=\"/images/ueditor/792907942243471360.jpg\" style=\"\"/></p><p><img src=\"/images/ueditor/792907942176362496.jpg\" style=\"\"/></p><p><br/></p><p>圣婴教堂 Basilica Minore del Santo Niño</p><p><br/></p><p>圣婴教堂，顾名思义，重点就是“圣婴”，也就是小耶稣。据说当时麦哲伦登陆宿雾，第一批土著接受洗礼的时候，麦哲伦送给首领的老婆这个小耶稣像。后来这里发生过一场大火，几乎所有的东西都付之一炬，只有这座圣婴像还完好无损。被士兵发现后，当地人便把它供奉在教堂里，视为他们的保护神。</p><p><br/></p><p>圣婴教堂，建于1565年，这是菲律宾历史最悠久的教堂。但是之后它被大火烧了3次，现在看到的是18世纪重建的。后来啊，在2013年宿雾经历了一场地震，教堂上的bell又掉下来了，又重建……</p><p><br/></p><p>我到达的星期五，正巧碰到的弥撒，人多的简直让人震惊。人生第一次看到弥撒啊，当时在胡志明的教堂等半天，都没等到。这次真是无心插柳柳成荫。</p><p><img src=\"/images/ueditor/792908389041704960.jpg\" style=\"\"/></p><p><img src=\"/images/ueditor/792908389138173952.jpg\" style=\"\"/></p><p><br/></p><p><br/></p>',NULL,'2016-10-31 09:58:42',NULL),(54,NULL,'2_差有有有','额济纳胡杨林，那一抹亮眼的金黄色','<p>既然在年初感受了春天的美妙，那么到了秋天自然要去採下秋色，这样才完美。除了银杏树、白桦林，更能使人赞叹的就是胡杨林了。</p><p>胡杨林被称为“沙漠英雄树”，生而不死一千年，死而不倒一千年，倒而不朽一千年。比较热门看胡杨林的地方一是新疆塔里木胡杨林，另一个就是内蒙的额济纳胡杨林了，考虑到新疆路途较远和安全问题，我们选择了后者。</p><p>行程：兰州——张掖丹霞国家地质公园——马蹄寺——嘉峪关——金塔胡杨林——額济纳胡杨林——居延海——祁连山——西宁</p><p><br/></p><p><br/></p><p><img src=\"/images/ueditor/792916714965831680.jpeg\" style=\"\"/></p><p><img src=\"/images/ueditor/792916714886139904.jpeg\" style=\"\"/></p><p><br/></p><p>到达兰州后，去到马子禄牛肉面吃下第一碗兰州牛肉面，“一清二白三红四绿五黄”是牛肉面的特色：一清（汤清）、二白（萝卜白）、三红（辣椒油红）、四绿（香菜、蒜苗绿）、五黄（面条黄亮）。但是我和先生一直认为后面吃到的舌尖尖牛肉面更好吃。</p><p><br/></p><p><img src=\"/images/ueditor/792917187160576000.jpeg\" alt=\"j3.jpeg\"/></p><p><br/></p><p><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">马蹄寺地处</span><a href=\"http://www.mafengwo.cn/travel-scenic-spot/mafengwo/11635.html\" class=\"link _j_keyword_mdd\" data-kw=\"祁连山\" target=\"_blank\" style=\"color: rgb(77, 77, 77); text-decoration: none; cursor: pointer; outline: 0px; font-size: 14px; border-bottom: 1px solid rgb(148, 142, 142); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; line-height: 25px; white-space: normal; widows: 1;\">祁连山</a><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">脚下，距今已逾1600年。传说天马下凡时踩在了这里的一块岩石上，蹄印留下，因而得名。而传说中的马蹄印迹现存于普光寺马蹄殿内，成为镇寺之宝。</span><br style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; white-space: normal; widows: 1;\"/><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">三十三天佛洞是马蹄寺最主要的建筑，沿山开凿了七层洞窟，洞窟层层叠叠，每层之间都有隧道相通。走进佛洞，沿着内部昏暗的阶梯一层层向上，可以看到众多的古老佛像。不过在“文化大革命”时期寺院损失惨重，石窟佛像、壁画破坏殆尽，现在看到的多为改革开放之后重新修复，万幸的是大雄宝殿、站佛殿、观音殿、药师殿等多为明万历年间旧迹。</span><br style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; white-space: normal; widows: 1;\"/><br style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; white-space: normal; widows: 1;\"/><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">山中的颜色已经丰富起来了。</span></p><p><img src=\"/images/ueditor/792917509757079552.jpeg\" style=\"\"/></p><p><img src=\"/images/ueditor/792917509845159936.jpeg\" style=\"\"/></p><p><br/></p><p><br/></p>',NULL,'2016-10-31 10:35:04',NULL),(55,NULL,'lichen','【带上孩子世界环游】之诺亚方舟停靠的地方，那是亚美尼亚失去的远方','<p>亚美尼亚是这次带着问问四国行的第二站，也是我此行在到达之前最期待的一个国家，那个在圣经中记载下的诺亚方舟的美丽传说，那个仿佛海市蜃楼一般与荒野之中的修道院融为一体的亚拉圣山，无不让人魂牵梦绕想要置身于这般幻境之中。<br/></p><p><br/></p><p>我的朋友常说回来听你讲讲在路上的故事呗，可我每次听到这句话时，总觉得一定是三五人围成一桌，好酒满上，牛逼吹起来，搞笑的故事讲起来，惊险的历程描述的绘声绘色外加表情肢体相配合，仿佛让听的人也进到故事里一般的精彩。可是……可是我真的不是个口述故事的好手，估摸着再美好的故事都能被我讲的平淡无趣吧。</p><p><img src=\"/images/ueditor/792977391076118528.jpg\" alt=\"d1.jpg\"/></p><p><br/></p><p>好多人问你为什么这么多年一直在写写写，记录着自己的小情怀和小生活。那是因为和喜欢独处，喜欢一个人旅行一样，书写也是一种与内心对话最好的方式之一。</p><p><br/></p><p>尽管升为人母之后的独处时光越来越少，但我仍常常在深夜的一盏灯下，喝一杯自己的酒，写一段只给自己看的话。那感觉真好，不留恋过去，做着当下世俗标准之外却是内心想要做着的事，以及一切随缘的未来。</p><p><br/></p><p><img src=\"/images/ueditor/792977572794339328.jpg\" alt=\"d2.jpg\"/></p><p><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">就好像带孩子旅行，好坏的声音都有，有人说好厉害，太有勇气了，有人说不过是自己想玩又没人带孩子，这么小的孩子没记忆的，折腾孩子等等等等。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">听到赞美的话时其实我的内心是觉得言过其实有点羞愧的。因为总觉得即便只是言语上的夸奖，那也一定是自己做了能让别人受益的付出才受得起这样的赞美。可是……可是不管是旅行还是带着孩子，那不过是千百种生活方式中微小的一种，只是一件很私人和小到不值得去惊扰别人的事情。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">而对于后一种声音，同样要感恩能有这般的机会看到这个社会存在的各种不一样的声音，世界那么多条路，不管是崎岖还是艰难最后总会通到终点。珍惜那些路上遇见的，彼此欣赏或可以同行的人，和那些志趣不相投的人微笑着挥手。这便是我处事待人的坚持。</p><p><br/></p><p><img src=\"/images/ueditor/792977935928791040.jpg\" alt=\"d3.jpg\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">这个小生命的降临，让我越来越多的看到这个世界的单纯美好，让我知道幸福不单是自己的诗和远方，更是护送我的他去往他的远方。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">问问一直很皮实，别人都说我在散养孩子所以他的适应能力比较强，但是无论是生活还是旅行总不会永远随着人意，亚美尼亚的那段时间，问问第一次在旅途中生病，至今回想起那个他细弱的声音喊着妈妈的场景，那个我把他拥在怀里渴望将他抱得更紧一点，却始终觉得抱得还不够的心情，想到这里眼泪便又开始湿润眼眶，但是那一刻包括现在也还是并无后悔与退缩，反倒更确定了会带着他一直走下去。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">一个人的一生那么长，没有人会料到有多少风浪，也没有人知道躲避的另一端是否又是一个新的灾难。相比于给予他多少财富与所谓安定的生活环境，我更想……在还能陪伴于他左右的日子里，让他慢慢的、一点一点体会什么是承担与勇敢。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">孩子，不急的，你可以慢慢长大。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">妈妈的肩膀虽然狭小，可能会承不起你越来越重的分量，但是妈妈的内心足够宽广，可以成为你随时想要内心依靠和歇息的港湾。</p><p><br/></p>',NULL,'2016-10-31 14:35:02',NULL),(57,NULL,'2_差有有有','遥远的秘境——2014年12月三江并流之旅','<p><br/></p><p>时间为12月10日-18日，选择冬季去，主要原因是每年10到3月是三江并流的旱季，晴天多，看到梅里等雪山的机会也多，另外江水比较清澈，不像夏天雨季的时候是黄色的，其实三江并流的江水四季有四个颜色，我们来的时候才刚刚变清澈，呈现出蓝绿色，但还没有变成最美的宝蓝色。这里最好的季节是2、3月份，那时江水完全是冰川融水，颜色是宝石一样的蓝色，而各种花儿盛开，庄稼和树长出新绿，将是一片更缤纷绚烂的色彩。</p><p>&nbsp;</p><p>此行前六天几乎都是蓝天白云，空气清澈，阳光耀眼，如同在青藏高原。云南的几大雪山全部都看到了。上一回夏天经过此地，一座雪山也没看到，一直在雨区之中，季节选择真的非常重要。不过，虽然晴朗的天气有利于全面再现远处的风景，但这里的云雾也很美，尤其是怒江这样的地方，《德拉姆》基本上就都是在夏季云雾缭绕的天气中拍摄的，云雾营造出了更加神秘、遥远的气氛。所以到怒江的话，不必为天气发愁，阴晴雨雪都有不同的味道。只要雨不太大，影响能见度即可。另外在高山峡谷区，下雨会增加出行难度和地质灾害风险，所以雨量最大的时候还是要谨慎。</p><p><br/></p><p>路上的风景</p><p><br/></p><p>玉龙雪山：</p><p><img src=\"/images/ueditor/795252883808456704.jpeg\" title=\"\" alt=\"you2.jpeg\"/></p><p><br/></p><p>梅里雪山：</p><p><img src=\"/images/ueditor/795253144098574336.jpeg\" alt=\"you3.jpeg\"/></p><p><br/></p><p>丽江西面上高速去石鼓，其中有一段向北，沿线风景特别美，远处有一座雪山，可能是另一角度的玉龙，也可能是哈巴。天很蓝（对于东部人来说），阳光下山腰和河谷上的村庄，错落有致的房屋在树木的掩映之中，房子都是传统的建筑，可惜在高速上没法停下拍照。真心觉得，到丽江玩的同志们还不如多跑跑这些附近的村庄，丽江周围，美景还是有不少。</p><p>&nbsp;</p><p>大约三十公里后下高速，沿着弯曲的山路下坡，就看见金沙江了。上一次看到金沙江是在夏季，那是汹涌的黄色，这一次，江水宁静得多，像镜子般倒映着蓝天。去石鼓镇的一路都在江边，沿着山崖和江水蜿蜒前行，峰回路转，不断有让人惊奇的景色。对于习惯了东部地区丘陵和平原风貌的人来说，横断山和三江并流区的高山深峡，每一次遇到都会感到震撼。</p><p><br/></p>',NULL,'2016-11-06 21:15:51',NULL),(58,NULL,'zhaoliyin','青岛亲子游','<p>孩子暑假开始，为了不影响我九月进藏的假期。就近选择了青岛，全家自驾游。</p><p>第一天上午九点从连云港出发，十二点多到的宾馆。在艺龙定的青岛润航宾馆，（岳阳路10号）非常适合带车的游客，价位合适，酒店周边环境也不错。周边好多德式建筑，绿化更不用说了</p><p><br/></p><p><img src=\"/images/ueditor/795254866527260672.jpeg\" alt=\"y0.jpeg\"/><br/></p><p>路过的胶州湾大桥，大桥起自青岛主城区海尔路，经红岛到黄岛，大桥全长36.48公里，投资额近100亿，历时4年完工。全长超过我国杭州湾跨海大桥 &nbsp;和美国切萨皮克跨海大桥，是当今世界上最长的跨海大桥，也是世界第二长桥。大桥于2011年6月30日全线通车。2011年上榜吉尼斯世界纪录 &nbsp;和美国“福布斯 &nbsp;”杂志，荣膺“全球最棒桥梁”荣誉称号。（图片来源于网络）<br/></p><p>&nbsp; 刚开始我们并不知道这个大桥有多长，只是觉得总是开不到头。百度了一下，原来如此。</p><p><br/></p><p><br/></p><p><img src=\"/images/ueditor/795255340970151936.jpeg\" alt=\"y2.jpeg\"/></p><p>公主楼，坐落于居庸关 &nbsp;路16号的公主楼，精巧可爱，就像是童话 &nbsp;故事中的常有的模样，也许正是丹麦建筑风格才造就了著名童话作家安徒生 &nbsp;。公主楼建造于本世纪三十年代中期，占地近千平方米，建筑面积721.98平方米。 本世纪20年代，丹麦王国 &nbsp;曾在青岛设立领事馆。1929年，丹麦王子乘豪华客轮“飞欧尼亚”号到青岛，遍游青岛市区。他经过八大关一带时，见到此处风景宜人，濒临大海，宜于度假休养，遂令凡麦驻青领事赵亨 &nbsp;先生在此购地建造了这座丹麦风格的建筑。原准备请丹麦公主来青岛避暑消夏，但事实上，丹麦公主并未来过，然而&quot;公主楼&quot;的名字却从此流传出去。该建筑为北欧 &nbsp;滨海风格庭院建筑。主楼为砖木结构，地下一层地上三层，花岗岩砌基，屋脊双面陡坡呈尖耸状，开有可远眺海滨的气窗，墨绿色粉刷墙面上的楼层窗外，由白绿色马赛克 &nbsp;嵌饰框边，使建筑造型简捷、流畅、精巧、活泼。室内有壁橱、质地考究的木扶梯、地板及墙裙，房间小巧明亮，起居设施完备。室外西南有宽阔的草坪，衬托主建筑高雅、醒目、别具一格。<br/></p><p><br/></p><p><img src=\"/images/ueditor/795255546495242240.jpeg\" alt=\"y3.jpeg\"/></p><p><br/></p><p>儿子对教堂什么的一直很感兴趣，第二天又去了天主教堂，仿佛来到了童话世界。</p><p>&nbsp; &nbsp;青岛基督教堂，它是一座典型的德国古堡式建筑，由钟楼和礼堂两部分组成，主要材料是花岗岩。钟楼高39·1米，在上面可以观看远处大海的景色，里面的礼堂宽敞明亮，能容纳1000多人，大厅高18米，两侧分为楼上楼下两层。 该基督教堂原来是为德国人聚会礼拜的场所。1897年，德国占领胶澳地区后，德国“路德会”的柏林教会派了一位传教士来青岛传教。这位传教士在青岛的“总督府”与“总督楼”之间选了一块地方，开始建造基督教堂。最终于1908年4月19日动工，1910年10月23日竣工，历时近两年半。由于该教堂是专供德国信徒聚会礼拜的，所以人们把它称为“德国礼拜堂”。1925年它的全部教产被转让给美国基督教信义会协会，于是该基督教堂就成为这一地区外国人进行宗教活动的场所，因此后来又被称为“国际礼拜堂”。 1949年以后，它成为中国基督教徒的主要活动场所。近一些年来，随着东西方文化的不断融合，基督教在青岛已成为颇有影响的宗教，所以这里的宗教活动非常活跃。</p><p><br/></p><p><br/></p>',NULL,'2016-11-06 21:25:48',NULL),(59,NULL,'2_差有有有','新德里·斋普尔·阿格拉·穿越时空遇见你','<p>&nbsp;在印度这个特别的国度，尤其是德里，人身安全尤其需要注意（印度有合法卖枪支的商店），毕竟连约翰内斯堡的酒店都不需要安检，而在德里，进入酒店或者商场都是要经过安检的。但总的说来，印度人民给人喜爱拍照以及友善的印象。</p><p>&nbsp; &nbsp; 印度的天气比较燥热，比如我们去的这段时间，早晚比较凉，尤其是德里，下午比较热（长袖长裤比较合适），斋普尔和阿格拉也是早晚较凉，但气温整体比德里高，尤其下午，非常晒也很热。</p><p>&nbsp; &nbsp; 在德里和阿格拉，不知道是因为水没净化干净还是其他什么原因，自来水是咸的。我因为之前看到网上的信息有些害怕，所以自己从国内托运了好多矿泉水囧。但我们团有人就是当地自来水烧开了喝，没有出现拉肚子和任何不适的情况。</p><p>&nbsp; &nbsp; 如今印度的金三角这三个城市，公共厕所也是有的，而且还蛮干净，只是需要收取大约10卢比（1RMB)的费用。</p><p>&nbsp; &nbsp; 至于路边摊什么的，我觉得只要你去那个地方见了那个环境，自己就不会再对路边摊有任何兴趣噜。</p><p>&nbsp; &nbsp; 印度有百货商场，但是据说没有超市。导游的解释是，印度有很多开小商店的老板，他们不允许印度出现超市，这样会抢了他们的生意，新德里曾经有一个富二代开了一家超市，结果没几天就发生了爆炸。</p><p><br/></p><p><br/></p><p>第一日 初到德里</p><p><br/></p><p>&nbsp;不知道在每个人心里，印度印象是个什么样子？我去之前，身边任何一个朋友、亲戚，甚至范围扩大到认识的人，他们没有一个人去过这个地方。我唯一的认知全都来源于网络。我以为印度极度脏乱差，臭气熏天，毕竟之前小伙伴的小伙伴说一定要带香水！没有厕所，交通极其混乱。我带着各种忐忑踏上了前往印度的飞机。</p><p>&nbsp; &nbsp; 但至少，印度给人的第一印象几乎是颠覆的，浅色的地毯铺在地上，宽敞的候机大厅。以及，最特别的入境处，——</p><p>&nbsp; &nbsp; 那一整排神的手指。</p><p>&nbsp; &nbsp; 它们真真正正的告诉你，欢迎你来到印度。这个神无所不在的国度。</p><p>&nbsp; &nbsp; 有小伙伴记得阿米尔汗演的那部印度电影吗，《我的个神啊》。这次印度之行让我深深意识到，这部电影对于印度来讲，就是天大的大不敬！！</p><p><br/></p><p><img src=\"/images/ueditor/795257313920421888.jpeg\" alt=\"y1.jpeg\"/></p><p><br/></p><p></p><p>我们到达的第一个景点——贾玛清真寺，位于脏乱破旧的旧德里地区，穿过狭窄脏乱的小巷，它就安静的像在历史中一般。是的，它就像历史，甚至它周围的一切都像历史，那种陈旧褪色、探险寻宝的历史。</p><p>&nbsp; &nbsp; 据说这座清真寺能容纳一万多人同时坐在里面，也是与沙特阿拉伯的麦加大清真寺、埃及开罗的爱资哈尔大清真寺齐名的世界三大清真寺之一。由莫卧儿王朝的第五位皇帝沙贾汗下令于1650年开始建造，历时6年时间建成，整个建筑由赤砂岩和白色大理石组合而成。</p><p>&nbsp; &nbsp; 要进清真寺需要注意穿着，上衣要有衣袖，下装要过膝盖。当然那里也有租衣服的地方，租赁费大概在50卢比，并非一次性那种衣服，同时需要脱鞋进入。这个清真寺最诡异的地方就是拍照，如果你要带拍照设备进入，每个设备300卢比。</p><p><img src=\"/images/ueditor/795257852368392192.jpeg\" alt=\"y2.jpeg\"/><br/></p><p><br/></p><p>&nbsp;清真寺外各种脏乱差，挑战你的忍耐极限！但好在，虽然脏乱差，可至少没有臭味</p><p><img src=\"/images/ueditor/795257989157228544.jpeg\" alt=\"y3.jpeg\"/></p><p><br/></p><p>从贾玛清真寺出来，我们坐上人力车，前往月光集市。据说这里曾经是莫卧儿王朝沙贾汗时期最繁华的集市。因为过去这里做金银生意的人很多，又叫月光大道（月光族大道吧2333）。我们去的时间很早，基本上店铺都没有开门（他们的营业时间大概在10:00am—8:00pm），大多都是在狭窄巷道边摆摊的小贩，有卖水果蔬菜生活用具的，还有卖袋装土司的。</p><p>&nbsp; &nbsp;天呀，当你坐在人力车上，穿行在狭窄到只能容一辆人力车通过的月光集市之间，偶尔与一头全白高大的神牛对撞而过，真有种穿梭时光的真切感觉，那一刻彷如回到了岁月之前，你不曾生活在的那个历史。</p><p>&nbsp; &nbsp;我不敢多拍照啊，怕吓跑你们</p><p>&nbsp; &nbsp;用别人的话说就是，当她看见一位美女从月光集市的小巷走出来，她一整天的心情都没有了，总觉得那样的美女不该生活在这样恶心到令人作呕的环境中。</p><p>&nbsp; &nbsp;这就是月光集市，多么美丽的名字，多么脏乱差的小巷。我在印度的六天时光，这里是最最最让我无法忍受的，印度的其他地方和这里一比，什么都好说了。</p><p>&nbsp; &nbsp;当时我坐在人力车上，看着前面印度小哥努力踩踏着脚踏板，想起许多似曾相识的镜头。人潮喧动的月光集市，在历史上会是个什么样子呢？或者说，历史上人类聚居的那些地方又是什么样子呢，会像如今旧德里这般吗？</p><p><br/></p>',NULL,'2016-11-06 21:34:49',NULL),(60,NULL,'My_Name_丽','凝结的时光 错落的景致 优雅的气韵：一机一镜捷奥十日 电车 歌剧 博物馆 米其林 维也纳机场退税指南','<p>CK，Hallstatt，Salzburg：错落的景致</p><p><br/></p><p>起伏的错落赋予这里极致的景致。</p><p>在城市，登高为你奉上开阔的视野</p><p>而在这里，自然铺展的山地缓坡，绵延而丰厚，绿树红瓦别致的村落</p><p>于险峻山地之上的古老攻防，纵然今日平静，难掩曾经的风云际会</p><p>起伏的山地配上红瓦和河流，就是CK，小城最拥挤的几平米地方，傍晚7点，静得可以凝望</p><p><br/></p><p><img src=\"/images/ueditor/795261481997438976.jpg\" style=\"\"/></p><p><img src=\"/images/ueditor/795261481951301632.jpg\" style=\"\"/></p><p><br/></p><p>起伏的山地配上皮划艇、帆船、快艇、水上悠闲的或飞驰掠过的人们，这里就是圣沃夫冈湖，明媚的湖水不能少了葱郁的岸坡和欢笑声</p><p><img src=\"/images/ueditor/795261707911041024.jpg\" alt=\"y3.jpg\"/></p><p><br/></p><p>捷奥行，选择了办奥地利申根签证。虽然奥地利签证并不简单，但是捷克听闻需要的材料更多。。。这次还真是第一次为了办签证花钱去做公证。</p><p><br/></p><p>做公证是个很麻烦的事情，看到奥地利签证中心挂的申请材料check list里，明明白白写着结婚证需要做公证。于是带着结婚证去公证处，做一本的公证还是两本结婚证都做公证呢？纠结了一下，就做了一本。</p><p><br/></p><p>两周后公证书取回来，还要去外交部再做认证。我后来才知道这叫做双认证。问问外交部的认证办理代理吧，“我只做了一本结婚证的公证，可以吗？”，人家回答的倒是干脆，说你问签证中心啊，问我干嘛呢？于是电话问奥地利签证中心相同问题，人家却回答说，夫妻两人如果都能提供各自的银行流水的话，只需要结婚证的复印件就可以了。。。</p><p><br/></p><p>这么搞笑呢？那check list上为什么就写了要做公证呢，囧。但是为了保险起见，既然公证的钱都花了，就把外交部认证做了呗。递交认证的时候才发现搞笑了，原来的结婚证上不知道为什么没有政府公职人员签字，汗，公证需要重新做。</p><p><br/></p>',NULL,'2016-11-06 21:49:33',NULL),(61,NULL,'12345aa','【走遍世界的尽头】-最全冰岛圣经－极光、温泉、电影、环岛野游','<p>这个可以体会雷克雅未克首都，一个充满艺术气息的北欧城市，看看建筑，比如有名的正态分布大教堂，著名的雕塑，黄金圈可以去Geysir间歇泉、Gullfoss黄金瀑布，欧美大陆大裂缝Þingvellir National Park （美剧《冰与火》长城的原型），还有一些典型的冰岛瀑布Seljalandsfoss塞纳加蓝瀑布，Skógafoss瀑布，Blue Lagoon泻湖温泉。</p><p><br/></p><p><img src=\"/images/ueditor/795264839332270080.jpg\" alt=\"y1.jpg\"/></p><p><br/></p><p>Golden Circle是下图冰岛地图阴影的西南角</p><p><img src=\"/images/ueditor/795265039274741760.jpg\" alt=\"y2.jpg\"/></p><p>10天（在冰岛的时间，不算飞机），是一个环岛绕一圈的基础时间，沿途筛选一些自己喜欢的，最牛逼不能错过的基本也都在下图上了，包含了首都雷克雅未克，首都黄金圈，西部地区，还加了Vík的玄武岩黑沙滩，Vatnajökull欧洲最大冰盖，可以去Skaftafell冰川徒步（星际穿越拍摄地），Jökulsárlón冰湖（007《Die Another Day》拍摄地）， Höfn吃龙虾，Seydisfjordur最美峡湾小镇（《百日梦想家》拍摄地，这个镇子+93号公路，超牛滑板山路，电影里的景都是镇上实景，不是假的搭出来的，人家就住在那样的环境里，让楼主看到了什么是高度发达的社会主义），Dettifoss普罗米修斯的拍摄地，Myvatn米湖躺在温泉里看极光，顺便去《冰与火》囧Snow和女野人来一发的地下温泉洞去约个会，冰岛第二大城市Akureyri物价真是便宜，BenJerry和哈根达斯冰激凌，3-50块巨大一桶。</p><p><br/></p><p>这个楼主最推荐的玩法，之前的两个错过了好多牛逼的东西，可能是因为楼主对城市游无感。所以是在这个线路基础上，玩的加强版，之后有线路图。</p><p><br/></p>',NULL,'2016-11-06 22:03:17',NULL),(62,NULL,'2_差有有有','遥远的秘境——2014年12月三江并流之旅','<p>遥远的秘境——2014年12月三江并流之旅</p><p><br/></p><p><br/></p><p>时间为12月10日-18日，选择冬季去，主要原因是每年10到3月是三江并流的旱季，晴天多，看到梅里等雪山的机会也多，另外江水比较清澈，不像夏天雨季的时候是黄色的，其实三江并流的江水四季有四个颜色，我们来的时候才刚刚变清澈，呈现出蓝绿色，但还没有变成最美的宝蓝色。这里最好的季节是2、3月份，那时江水完全是冰川融水，颜色是宝石一样的蓝色，而各种花儿盛开，庄稼和树长出新绿，将是一片更缤纷绚烂的色彩。</p><p>&nbsp;</p><p>此行前六天几乎都是蓝天白云，空气清澈，阳光耀眼，如同在青藏高原。云南的几大雪山全部都看到了。上一回夏天经过此地，一座雪山也没看到，一直在雨区之中，季节选择真的非常重要。不过，虽然晴朗的天气有利于全面再现远处的风景，但这里的云雾也很美，尤其是怒江这样的地方，《德拉姆》基本上就都是在夏季云雾缭绕的天气中拍摄的，云雾营造出了更加神秘、遥远的气氛。所以到怒江的话，不必为天气发愁，阴晴雨雪都有不同的味道。只要雨不太大，影响能见度即可。另外在高山峡谷区，下雨会增加出行难度和地质灾害风险，所以雨量最大的时候还是要谨慎</p><p><br/></p><p><br/></p><p>丽江西面上高速去石鼓，其中有一段向北，沿线风景特别美，远处有一座雪山，可能是另一角度的玉龙，也可能是哈巴。天很蓝（对于东部人来说），阳光下山腰和河谷上的村庄，错落有致的房屋在树木的掩映之中，房子都是传统的建筑，可惜在高速上没法停下拍照。真心觉得，到丽江玩的同志们还不如多跑跑这些附近的村庄，丽江周围，美景还是有不少。</p><p>&nbsp;</p><p>大约三十公里后下高速，沿着弯曲的山路下坡，就看见金沙江了。上一次看到金沙江是在夏季，那是汹涌的黄色，这一次，江水宁静得多，像镜子般倒映着蓝天。去石鼓镇的一路都在江边，沿着山崖和江水蜿蜒前行，峰回路转，不断有让人惊奇的景色。对于习惯了东部地区丘陵和平原风貌的人来说，横断山和三江并流区的高山深峡，每一次遇到都会感到震撼。</p><p><br/></p><p><br/></p><p>雪怎么全没有了</p><p>是啊，之前旱了一阵就这样了，也许不到十年就没有终年积雪了。</p><p><br/></p><p>9天的行程竟然梅里和丙中洛都走过，厉害!楼主的帖子写的好详尽。赞一个！</p><p><br/></p>',NULL,'2016-11-07 11:03:54',NULL);

/*Table structure for table `travelnotesencha` */

DROP TABLE IF EXISTS `travelnotesencha`;

CREATE TABLE `travelnotesencha` (
  `TravelNoteId` int(11) NOT NULL auto_increment,
  `userId` int(11) default NULL,
  `UserName` varchar(20) default NULL,
  `Tname` varchar(300) NOT NULL,
  `TrvaelContnet` text NOT NULL,
  `TravelImg` blob,
  `TravelNoteTime` varchar(50) default NULL,
  `PraiseNum` int(11) default NULL,
  PRIMARY KEY  (`TravelNoteId`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

/*Data for the table `travelnotesencha` */

insert  into `travelnotesencha`(`TravelNoteId`,`userId`,`UserName`,`Tname`,`TrvaelContnet`,`TravelImg`,`TravelNoteTime`,`PraiseNum`) values (32,NULL,'12345aa','叫我如何不想她---台湾','\r\n作为南京人\r\n一直有种台湾情结。\r\n刚巧美国打工时候认识不少台湾朋友\r\n于是带着这份情结踏上台湾这块土地。\r\n一来拜访朋友\r\n二来解答心中一直以来的种种疑惑。\r\n由于时间有限\r\n这次只选择了台中，台北，新北\r\n\r\n第一站-台中\r\n在台中待了3天\r\n这三天朋友要么开车要么骑车\r\n载着我到处跑\r\n特别感谢她的接待\r\n让我看到了一个热情热闹美丽的台中\r\n\r\n\r\n\r\n关于【心之芳庭】\r\n知道心之芳庭\r\n是因为蚂蜂窝里面的一个蜂友的帖子\r\n当时看到他的照片\r\n第一印象就是\r\n这个地方我一定要去\r\n因为太美了\r\n事实上也的确没让我们失望\r\n精美的建筑以及成片的绿色\r\n都让我们为之兴奋\r\n于是照片也拍得特别多',NULL,'2016-10-24 20:01:55',NULL),(34,NULL,'lichen',' 最后悔的就是来了——《帕劳》','帕劳共和国，台湾人称她为帛琉。位于菲律宾以东太平洋上，距离菲律宾约800公里，距离台湾约1600公里，香港约2700公里，是个群岛，包含200多个岛屿，其中9个岛屿是经常有人居住的，帕劳在历史上曾先后被西班牙、德国、日本所统治，二战后托管给美国，1994年独立。帕劳居民约20000人，百分之七十是本地土著，百分之三十是菲律宾人，语言上通行英语，在货币上通行美元。\r\n\r\n 在帕劳你会发现日本人居多，还有韩国人和台湾人。因为台湾与帕劳距离很近，交往也密切，帕劳几乎所有的物质都是靠进口，其中有一部分就是来自台湾。我们大陆人来帕劳旅行，找个好的导游是个关键的问题，要找成立久的和多年服务台湾客人的地接社，毕竟我们大陆今年赴帕劳的游客才增多，所以找这样的地接社，导游服务质量很好，我们玩的也开心。我们选择的是帕劳当地很有名气的一家KBT地接社，之前就是一直服务台湾客人了，导游的中文和英文都不错，就是国语说的带有台湾的腔调，这也许就是服务了太多的台湾游客造成的。我是来帕劳之前就在国内提前半个月就定好了，给我们定出海行程的是小颖，来之前许多不太了解的也是问她，人还蛮实在的东北女孩。之前要是早点找到小颖机票和酒店也就一起在她那定了，我俩还能省1000多。',NULL,'2016-10-23 20:39:55',NULL),(36,NULL,'zhaoliyin','彩云之南——昆明、大理、丽江5日游走','台历交替之际\r\n回忆着刚过去的一年走过的路\r\n7段旅途，4个国家，13个城市\r\n意外的发现似乎是中了海岛的魔咒吧\r\n一月三亚，六月济州岛，八月嵊泗，十月涠洲岛，以及上个月的巴厘岛\r\n一半的时间都在过夏天\r\n\r\n一年来和许小佳同学的恋爱算是走过磨合期尘埃落定\r\n我并不认为那些爱情里陪你到最后的必须是你最爱亦或称之为对的人\r\n世界那么大，人来人往皆是缘\r\n缘分来了，他走近你\r\n缘分尽了，他离开你\r\n能伴你同行的，是在你最需要他时恰巧出现在你身边\r\n能给你拥抱和温暖的人\r\n这些年，兜兜转转\r\n有辜负、有迷惘、有罢了\r\n有暗恋、有表白、有得不到、有道不明\r\n也许一个人要走很多的路\r\n经历过生命中无数突如其来的繁华与苍凉才会变得成熟\r\n\r\n我会艳羡青梅竹马的爱情\r\n也会感激参与我的人生向我走来的每一个身影\r\n那些教会我付出，包容，改变，收敛光芒，磨平棱角\r\n让我体会了怦然心动，心如死灰后仍相信真爱不灭\r\n人的一生\r\n都有一些说不出的秘密，挽不回的遗憾\r\n触不到的梦想，忘不了的爱\r\n这些都是时光给予的馈赠\r\nI want to be your favoriet hello and your hardest goodbye',NULL,'2016-10-21 20:49:55',NULL),(37,NULL,'zhaoliyin','触不到的梦想，忘不了的爱','因为台湾与帕劳距离很近，交往也密切，帕劳几乎所有的物质都是靠进口，其中有一部分就是来自台湾。我们大陆人来帕劳旅行，找个好的导游是个关键的问题，要找成立久的和多年服务台湾客人的地接社，毕竟我们大陆今年赴帕劳的游客才增多，所以找这样的地接社，导游服务质量很好，我们玩的也开心。我们选择的是帕劳当地很有名气的一家KBT地接社，之前就是一直服务台湾客人了，导游的中文和英文都不错，就是国语说的带有台湾的腔调，这也许就是服务了太多的台湾游客造成的。我是来帕劳之前就在国内提前半个月就定好了，给我们定出海行程的是小颖，来之前许多不太了解的也是问她，人还蛮实在的东北女孩。之前要是早点找到小颖机票和酒店也就一起在她那定了，',NULL,'2016-10-25 20:00:51',NULL),(50,NULL,'2_差有有有','勇闯摩洛哥（十一天自由行之六城纪事+冗长tips 全篇完）','<p>开头的话</p><p><br/></p><p><br/></p><p>摩洛哥归来已经整整半个月，路上就策划的游记却迟迟没有动笔，几乎每天呆坐窗前冥思苦想。之前在穷游写过九篇了还从来没有这么</p><p><br/></p><p>纠结过呢！不知怎地今天没来由哼起了那句老歌“想说爱你并不是很容易的事， 那需要太多的勇气， 想说忘记你也不是很容易的事，&nbsp;</p><p><br/></p><p>我只有伫立在风中，想你……”</p><p><br/></p><p>……真是好契合好契合现在的心情啊，标题顺势就落在鲜亮亮的“勇”字上，OK啦，那就开篇吧！</p><p><br/></p><p>是什么吸引我们去摩洛哥？小时候读的《一千零一夜》？早年看过的《北非谍影》？三毛的西撒哈拉？还是Bertie Higgins那略带忧郁的《卡萨布兰卡》……唔，都是，也都不是，说来也简单得不要不要的，居然只是一张照片里的色彩，没错，就是舍夫沙万那一往情深的蓝、蓝、蓝……</p><p><br/></p><p>天（摄于沃卢比利斯罗马古城遗迹）</p><p><br/></p><p<p><br/></p><p>墙之梦（摄于马拉喀什的里亚德）<p><br/></p><p>花之梦（摄于马拉喀什马约尔花园）</p><p><br/></p><p>交通：</p><p>&lt;城际交通&gt;</p><p>首选火车，虽稍贵于长途大巴，但有空调比较舒适，即便有晚点现象但时间上大体可控。一般选择二等车厢即可。</p><p><br/></p><p>摩洛哥铁路“ONCF”网站地址：http://www.oncf.ma/Pages/Accueil.aspx</p><p><br/></p><p>次选长途大巴，最好选择CTM公司，车况好运行和服务比较正规，我们因车次的原因坐过的Nejme Chamal公司稍差。</p><p><br/></p><p>末选出租车，司机素质无法预测，经历过的高下落差很大，且普遍缺乏契约精神，到达时多要钱或不想找零的现象几乎全覆盖。</p><p><br/></p>',NULL,'2016-10-31 09:44:25',NULL),(51,NULL,'zhaoliyin','印度最西北，是梦中的克什米尔【从克什米尔南下喜马偕尔，瑞诗凯诗的30天印度之旅】','<p>克什米尔，是个小梦</p><p><br/></p><p>2011年底，我第一次到印度。那是我间隔年的第4个月，曼谷的飞机到加尔各答。从出机场开始，之前旅行的倦怠好似突然就一扫而空。到达背包客聚集的旅馆，开始一个月的义工生活，每天感受着穿越市集的混乱嘈杂但是生机勃勃。在满街仅占一席之地却足以谋生的小摊，和印度人来来往往的穿梭姿态中，脸上一直挂着笑容，再不经意地得到笑容的回应。那也是我第一次开始了解印度。</p><p><br/></p><p>随后的旅行，走走停停，住了各种沙发，感受了各种温情。那时年轻，没有成见，只把所见，当作当然。在大街上走着走着，突然停下来拿一把干草喂一匹正在休息的拉车的马；或者走路时要绕过发呆的牛，小心避让满地的牛粪，也是只觉兴奋快乐，未觉是天下大奇。</p><p><br/></p><p>三个月就这么过得飞快。大家都说，对于印度，要么爱，要么恨。遇到太多来了无数次，或者待了很久很久的旅行者，他们的爱恨显而易见。而我，也许注定是要用把签证用到最后一天，来表达这个国家所带来的复杂感情。一定会再回来的，那时心里，早已如此认定。</p><p><br/></p><p>在加尔各答旅馆的多人间看了第二遍《Three Idiots》（在后来又看了好多次），开头配着音乐的山路风景，和结尾高原上的学校，恍如仙境的雪山蓝湖，在那时就已把拉达克这个名字，种在了心底。无奈正当冬季，大雪封山，只有盼着下次，等待它开山的短暂的夏季。只是并不知下次，到底是何时。</p><p><br/></p><p>14年房车旅行，在新藏线途径班公错，后来从新疆出境巴基斯坦，又经过风之谷和吉尔吉特。当时只觉遗憾，没有去到K2的大本营斯卡杜。后来才知道，这些地方竟都和克什米尔有关。虽然知道有过战争，现在依旧是争议边界，但那时的“克什米尔”这个词，对于我来说就是雪山峡谷和充满野性的美景，就像它美丽的名字一样。所以还曾发下宏愿说想要绕着新疆塔什库尔干，巴基斯坦的克什米尔，印度的克什米尔，再到西藏走个大环线。被人戏谑说还没等你走到边境线，早就被乱枪打死。于是，印度，拉达克，克什米尔，就像在我心里，编起了一首小合唱。直到今年夏天，朋友说计划了印度旅行。“印度”这个名字，让这首小合唱，又阻挡不住地登上舞台。</p><p><br/></p><p>“那今年的假期，就去克什米尔吧！”</p><p>结果，朋友的印度之旅不小心烂尾，倒是圆了我的克什米尔小梦。</p><p><br/></p><p>画笔下的克什米尔之旅</p><p><br/></p><p>因为又开始学画画，所以这次旅行带上了画纸和水彩。这样子，夹子能用他的相机记录，而我也能用我的画笔记录我们的旅行。所以，这次就以画的形式先睹为快好了。</p><p><br/></p><p>在斯利那加，达尔湖上划着小船游荡。湖中一片片飘满的睡莲，被当地人称作“漂浮的花园”。总觉得莲叶漂浮在水面上，像一块块小盘子，也许装些水珠，也许只装了达尔胡的清透空气。</p><p><br/></p><p><br/></p><p>旅程和花销</p><p><br/></p><p>其实整段旅程，只有11天是真正在克什米尔地区，后来就继续南下了。但是因为它是旅行的缘起，也算是圆了一个小梦，所以还是叫它</p><p><br/></p><p>作克什米尔之旅吧！</p><p><br/></p><p>这次旅行，我们从在到达新德里机场的两小时后，就直接飞往了斯利那加。斯利那加5天，遇到大罢工。</p><p><br/></p><p>接着16小时的车程去到列城。列城6天，又是18小时的车程到达喜马偕尔邦的蒙拉里（蒙拉里就是地图里翻译的马纳利也是穷游翻译的默纳利，至于为什么是蒙拉里，就是个后面会讲的小故事了）。</p><p>蒙拉里4天，接着一整天的大巴到达西姆拉，喜马偕尔邦首府，一日游之后，转了小火车大火车，到达了恒河边的圣城瑞诗凯诗。为了学瑜伽和冥想，我临时改变计划，在瑞诗凯诗待了10天。夹子则提前回国。</p><p><br/></p>',NULL,'2016-10-31 09:49:46',NULL),(52,NULL,'lichen','寻找麦哲伦｜菲律宾（宿务＋薄荷岛＋马尼拉）完','<p>曾经有一个葡萄牙人，他坚信大地是圆形的，盼望做一件人类历史上破天荒的壮举——环绕地球航行。他向皇室提出了这个请求，结果葡萄牙皇室不鸟他，觉得没这必要。于是，他投奔西班牙。</p><p><br/></p><p>西班牙人乐了，又可以开辟东方新航线，又可以寻找香料，有何不可？塞维利亚的要塞司令非常欣赏他，答应了他的请求，并把女儿也嫁给了他。次年，这个年轻人的到了国王的接见，当然他的情商也确实不错——没有空手去——他给国王送上了一只精致的地球仪。国王心花怒放，马上替他组建船队。</p><p><br/></p><p>这个年轻人就是麦哲伦。</p><p><br/></p><p>当人们谈起人类第一次环球航行的时候，总会提及这个名字。而事实上，麦哲伦并没有完成全球航行，而是在他到达宿务的时候，插手小岛首领之间的内讧，被土著打死了。</p><p><br/></p><p>作为个一心想要环游世界的人，因为麦哲伦的故事，我在印象中第一次记住了宿务这个名字，并且列在了菲律宾的must see list里。</p><p><br/></p><p>4月去了菲律宾，先上一点图：</p><p><br/></p><p>圣婴教堂 Basilica Minore del Santo Niño</p><p><br/></p><p>圣婴教堂，顾名思义，重点就是“圣婴”，也就是小耶稣。据说当时麦哲伦登陆宿雾，第一批土著接受洗礼的时候，麦哲伦送给首领的老婆这个小耶稣像。后来这里发生过一场大火，几乎所有的东西都付之一炬，只有这座圣婴像还完好无损。被士兵发现后，当地人便把它供奉在教堂里，视为他们的保护神。</p><p><br/></p><p>圣婴教堂，建于1565年，这是菲律宾历史最悠久的教堂。但是之后它被大火烧了3次，现在看到的是18世纪重建的。后来啊，在2013年宿雾经历了一场地震，教堂上的bell又掉下来了，又重建……</p><p><br/></p><p>我到达的星期五，正巧碰到的弥撒，人多的简直让人震惊。人生第一次看到弥撒啊，当时在胡志明的教堂等半天，都没等到。这次真是无心插柳柳成荫。</p>',NULL,'2016-10-31 09:58:42',NULL),(54,NULL,'2_差有有有','额济纳胡杨林，那一抹亮眼的金黄色','<p>既然在年初感受了春天的美妙，那么到了秋天自然要去採下秋色，这样才完美。除了银杏树、白桦林，更能使人赞叹的就是胡杨林了。</p><p>胡杨林被称为“沙漠英雄树”，生而不死一千年，死而不倒一千年，倒而不朽一千年。比较热门看胡杨林的地方一是新疆塔里木胡杨林，另一个就是内蒙的额济纳胡杨林了，考虑到新疆路途较远和安全问题，我们选择了后者。</p><p>行程：兰州——张掖丹霞国家地质公园——马蹄寺——嘉峪关——金塔胡杨林——額济纳胡杨林——居延海——祁连山——西宁</p><p><br/></p><p><br/></p><p><br/></p><p>到达兰州后，去到马子禄牛肉面吃下第一碗兰州牛肉面，“一清二白三红四绿五黄”是牛肉面的特色：一清（汤清）、二白（萝卜白）、三红（辣椒油红）、四绿（香菜、蒜苗绿）、五黄（面条黄亮）。但是我和先生一直认为后面吃到的舌尖尖牛肉面更好吃。</p><p><br/></p><p><br/></p><p><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">马蹄寺地处</span><a href=\"http://www.mafengwo.cn/travel-scenic-spot/mafengwo/11635.html\" class=\"link _j_keyword_mdd\" data-kw=\"祁连山\" target=\"_blank\" style=\"color: rgb(77, 77, 77); text-decoration: none; cursor: pointer; outline: 0px; font-size: 14px; border-bottom: 1px solid rgb(148, 142, 142); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; line-height: 25px; white-space: normal; widows: 1;\">祁连山</a><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">脚下，距今已逾1600年。传说天马下凡时踩在了这里的一块岩石上，蹄印留下，因而得名。而传说中的马蹄印迹现存于普光寺马蹄殿内，成为镇寺之宝。</span><br style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; white-space: normal; widows: 1;\"/><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">三十三天佛洞是马蹄寺最主要的建筑，沿山开凿了七层洞窟，洞窟层层叠叠，每层之间都有隧道相通。走进佛洞，沿着内部昏暗的阶梯一层层向上，可以看到众多的古老佛像。不过在“文化大革命”时期寺院损失惨重，石窟佛像、壁画破坏殆尽，现在看到的多为改革开放之后重新修复，万幸的是大雄宝殿、站佛殿、观音殿、药师殿等多为明万历年间旧迹。</span><br style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; white-space: normal; widows: 1;\"/><br style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; white-space: normal; widows: 1;\"/><span style=\"color: rgb(102, 102, 102); font-family: Arial, &quot;Lucida Grande&quot;, &quot;Microsoft Yahei&quot;, &quot;Hiragino Sans GB&quot;, &quot;Hiragino Sans GB W3&quot;, SimSun, &quot;PingFang SC&quot;, STHeiti; font-size: 14px; line-height: 25px; widows: 1;\">山中的颜色已经丰富起来了。</span></p>',NULL,'2016-10-31 10:35:04',NULL),(55,NULL,'lichen','【带上孩子世界环游】之诺亚方舟停靠的地方，那是亚美尼亚失去的远方','<p>亚美尼亚是这次带着问问四国行的第二站，也是我此行在到达之前最期待的一个国家，那个在圣经中记载下的诺亚方舟的美丽传说，那个仿佛海市蜃楼一般与荒野之中的修道院融为一体的亚拉圣山，无不让人魂牵梦绕想要置身于这般幻境之中。<br/></p><p><br/></p><p>我的朋友常说回来听你讲讲在路上的故事呗，可我每次听到这句话时，总觉得一定是三五人围成一桌，好酒满上，牛逼吹起来，搞笑的故事讲起来，惊险的历程描述的绘声绘色外加表情肢体相配合，仿佛让听的人也进到故事里一般的精彩。可是……可是我真的不是个口述故事的好手，估摸着再美好的故事都能被我讲的平淡无趣吧。</p><p><br/></p><p>好多人问你为什么这么多年一直在写写写，记录着自己的小情怀和小生活。那是因为和喜欢独处，喜欢一个人旅行一样，书写也是一种与内心对话最好的方式之一。</p><p><br/></p><p>尽管升为人母之后的独处时光越来越少，但我仍常常在深夜的一盏灯下，喝一杯自己的酒，写一段只给自己看的话。那感觉真好，不留恋过去，做着当下世俗标准之外却是内心想要做着的事，以及一切随缘的未来。</p><p><br/></p><p><img src=\"/images/ueditor/792977572794339328.jpg\" alt=\"d2.jpg\"/></p><p><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">就好像带孩子旅行，好坏的声音都有，有人说好厉害，太有勇气了，有人说不过是自己想玩又没人带孩子，这么小的孩子没记忆的，折腾孩子等等等等。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">听到赞美的话时其实我的内心是觉得言过其实有点羞愧的。因为总觉得即便只是言语上的夸奖，那也一定是自己做了能让别人受益的付出才受得起这样的赞美。可是……可是不管是旅行还是带着孩子，那不过是千百种生活方式中微小的一种，只是一件很私人和小到不值得去惊扰别人的事情。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">而对于后一种声音，同样要感恩能有这般的机会看到这个社会存在的各种不一样的声音，世界那么多条路，不管是崎岖还是艰难最后总会通到终点。珍惜那些路上遇见的，彼此欣赏或可以同行的人，和那些志趣不相投的人微笑着挥手。这便是我处事待人的坚持。</p><p><br/></p><p><img src=\"/images/ueditor/792977935928791040.jpg\" alt=\"d3.jpg\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">这个小生命的降临，让我越来越多的看到这个世界的单纯美好，让我知道幸福不单是自己的诗和远方，更是护送我的他去往他的远方。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">问问一直很皮实，别人都说我在散养孩子所以他的适应能力比较强，但是无论是生活还是旅行总不会永远随着人意，亚美尼亚的那段时间，问问第一次在旅途中生病，至今回想起那个他细弱的声音喊着妈妈的场景，那个我把他拥在怀里渴望将他抱得更紧一点，却始终觉得抱得还不够的心情，想到这里眼泪便又开始湿润眼眶，但是那一刻包括现在也还是并无后悔与退缩，反倒更确定了会带着他一直走下去。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">一个人的一生那么长，没有人会料到有多少风浪，也没有人知道躲避的另一端是否又是一个新的灾难。相比于给予他多少财富与所谓安定的生活环境，我更想……在还能陪伴于他左右的日子里，让他慢慢的、一点一点体会什么是承担与勇敢。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">孩子，不急的，你可以慢慢长大。</p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; outline: none; color: rgb(50, 50, 50); line-height: 26px; word-wrap: break-word; word-break: break-all; font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, 宋体, sans-serif; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);\">妈妈的肩膀虽然狭小，可能会承不起你越来越重的分量，但是妈妈的内心足够宽广，可以成为你随时想要内心依靠和歇息的港湾。</p><p><br/></p>',NULL,'2016-10-31 14:35:02',NULL),(57,NULL,'2_差有有有','遥远的秘境——2014年12月三江并流之旅','<p><br/></p><p>时间为12月10日-18日，选择冬季去，主要原因是每年10到3月是三江并流的旱季，晴天多，看到梅里等雪山的机会也多，另外江水比较清澈，不像夏天雨季的时候是黄色的，其实三江并流的江水四季有四个颜色，我们来的时候才刚刚变清澈，呈现出蓝绿色，但还没有变成最美的宝蓝色。这里最好的季节是2、3月份，那时江水完全是冰川融水，颜色是宝石一样的蓝色，而各种花儿盛开，庄稼和树长出新绿，将是一片更缤纷绚烂的色彩。</p><p>&nbsp;</p><p>此行前六天几乎都是蓝天白云，空气清澈，阳光耀眼，如同在青藏高原。云南的几大雪山全部都看到了。上一回夏天经过此地，一座雪山也没看到，一直在雨区之中，季节选择真的非常重要。不过，虽然晴朗的天气有利于全面再现远处的风景，但这里的云雾也很美，尤其是怒江这样的地方，《德拉姆》基本上就都是在夏季云雾缭绕的天气中拍摄的，云雾营造出了更加神秘、遥远的气氛。所以到怒江的话，不必为天气发愁，阴晴雨雪都有不同的味道。只要雨不太大，影响能见度即可。另外在高山峡谷区，下雨会增加出行难度和地质灾害风险，所以雨量最大的时候还是要谨慎。</p><p><br/></p><p>路上的风景</p><p><br/></p><p>玉龙雪山：</p><p><br/></p><p>梅里雪山：</p><p><br/></p><p>丽江西面上高速去石鼓，其中有一段向北，沿线风景特别美，远处有一座雪山，可能是另一角度的玉龙，也可能是哈巴。天很蓝（对于东部人来说），阳光下山腰和河谷上的村庄，错落有致的房屋在树木的掩映之中，房子都是传统的建筑，可惜在高速上没法停下拍照。真心觉得，到丽江玩的同志们还不如多跑跑这些附近的村庄，丽江周围，美景还是有不少。</p><p>&nbsp;</p><p>大约三十公里后下高速，沿着弯曲的山路下坡，就看见金沙江了。上一次看到金沙江是在夏季，那是汹涌的黄色，这一次，江水宁静得多，像镜子般倒映着蓝天。去石鼓镇的一路都在江边，沿着山崖和江水蜿蜒前行，峰回路转，不断有让人惊奇的景色。对于习惯了东部地区丘陵和平原风貌的人来说，横断山和三江并流区的高山深峡，每一次遇到都会感到震撼。</p><p><br/></p>',NULL,'2016-11-06 21:15:51',NULL),(58,NULL,'zhaoliyin','青岛亲子游','<p>孩子暑假开始，为了不影响我九月进藏的假期。就近选择了青岛，全家自驾游。</p><p>第一天上午九点从连云港出发，十二点多到的宾馆。在艺龙定的青岛润航宾馆，（岳阳路10号）非常适合带车的游客，价位合适，酒店周边环境也不错。周边好多德式建筑，绿化更不用说了</p><p><br/></p><br/></p><p>路过的胶州湾大桥，大桥起自青岛主城区海尔路，经红岛到黄岛，大桥全长36.48公里，投资额近100亿，历时4年完工。全长超过我国杭州湾跨海大桥 &nbsp;和美国切萨皮克跨海大桥，是当今世界上最长的跨海大桥，也是世界第二长桥。大桥于2011年6月30日全线通车。2011年上榜吉尼斯世界纪录 &nbsp;和美国“福布斯 &nbsp;”杂志，荣膺“全球最棒桥梁”荣誉称号。（图片来源于网络）<br/></p><p>&nbsp; 刚开始我们并不知道这个大桥有多长，只是觉得总是开不到头。百度了一下，原来如此。</p><p><br/></p><p><br/></p><p>公主楼，坐落于居庸关 &nbsp;路16号的公主楼，精巧可爱，就像是童话 &nbsp;故事中的常有的模样，也许正是丹麦建筑风格才造就了著名童话作家安徒生 &nbsp;。公主楼建造于本世纪三十年代中期，占地近千平方米，建筑面积721.98平方米。 本世纪20年代，丹麦王国 &nbsp;曾在青岛设立领事馆。1929年，丹麦王子乘豪华客轮“飞欧尼亚”号到青岛，遍游青岛市区。他经过八大关一带时，见到此处风景宜人，濒临大海，宜于度假休养，遂令凡麦驻青领事赵亨 &nbsp;先生在此购地建造了这座丹麦风格的建筑。原准备请丹麦公主来青岛避暑消夏，但事实上，丹麦公主并未来过，然而&quot;公主楼&quot;的名字却从此流传出去。该建筑为北欧 &nbsp;滨海风格庭院建筑。主楼为砖木结构，地下一层地上三层，花岗岩砌基，屋脊双面陡坡呈尖耸状，开有可远眺海滨的气窗，墨绿色粉刷墙面上的楼层窗外，由白绿色马赛克 &nbsp;嵌饰框边，使建筑造型简捷、流畅、精巧、活泼。室内有壁橱、质地考究的木扶梯、地板及墙裙，房间小巧明亮，起居设施完备。室外西南有宽阔的草坪，衬托主建筑高雅、醒目、别具一格。<br/></p><p><br/></p><p><br/></p><p>儿子对教堂什么的一直很感兴趣，第二天又去了天主教堂，仿佛来到了童话世界。</p><p>&nbsp; &nbsp;青岛基督教堂，它是一座典型的德国古堡式建筑，由钟楼和礼堂两部分组成，主要材料是花岗岩。钟楼高39·1米，在上面可以观看远处大海的景色，里面的礼堂宽敞明亮，能容纳1000多人，大厅高18米，两侧分为楼上楼下两层。 该基督教堂原来是为德国人聚会礼拜的场所。1897年，德国占领胶澳地区后，德国“路德会”的柏林教会派了一位传教士来青岛传教。这位传教士在青岛的“总督府”与“总督楼”之间选了一块地方，开始建造基督教堂。最终于1908年4月19日动工，1910年10月23日竣工，历时近两年半。由于该教堂是专供德国信徒聚会礼拜的，所以人们把它称为“德国礼拜堂”。1925年它的全部教产被转让给美国基督教信义会协会，于是该基督教堂就成为这一地区外国人进行宗教活动的场所，因此后来又被称为“国际礼拜堂”。 1949年以后，它成为中国基督教徒的主要活动场所。近一些年来，随着东西方文化的不断融合，基督教在青岛已成为颇有影响的宗教，所以这里的宗教活动非常活跃。</p><p><br/></p><p><br/></p>',NULL,'2016-11-06 21:25:48',NULL),(59,NULL,'2_差有有有','新德里·斋普尔·阿格拉·穿越时空遇见你','<p>&nbsp;在印度这个特别的国度，尤其是德里，人身安全尤其需要注意（印度有合法卖枪支的商店），毕竟连约翰内斯堡的酒店都不需要安检，而在德里，进入酒店或者商场都是要经过安检的。但总的说来，印度人民给人喜爱拍照以及友善的印象。</p><p>&nbsp; &nbsp; 印度的天气比较燥热，比如我们去的这段时间，早晚比较凉，尤其是德里，下午比较热（长袖长裤比较合适），斋普尔和阿格拉也是早晚较凉，但气温整体比德里高，尤其下午，非常晒也很热。</p><p>&nbsp; &nbsp; 在德里和阿格拉，不知道是因为水没净化干净还是其他什么原因，自来水是咸的。我因为之前看到网上的信息有些害怕，所以自己从国内托运了好多矿泉水囧。但我们团有人就是当地自来水烧开了喝，没有出现拉肚子和任何不适的情况。</p><p>&nbsp; &nbsp; 如今印度的金三角这三个城市，公共厕所也是有的，而且还蛮干净，只是需要收取大约10卢比（1RMB)的费用。</p><p>&nbsp; &nbsp; 至于路边摊什么的，我觉得只要你去那个地方见了那个环境，自己就不会再对路边摊有任何兴趣噜。</p><p>&nbsp; &nbsp; 印度有百货商场，但是据说没有超市。导游的解释是，印度有很多开小商店的老板，他们不允许印度出现超市，这样会抢了他们的生意，新德里曾经有一个富二代开了一家超市，结果没几天就发生了爆炸。</p><p><br/></p><p><br/></p><p>第一日 初到德里</p><p><br/></p><p>&nbsp;不知道在每个人心里，印度印象是个什么样子？我去之前，身边任何一个朋友、亲戚，甚至范围扩大到认识的人，他们没有一个人去过这个地方。我唯一的认知全都来源于网络。我以为印度极度脏乱差，臭气熏天，毕竟之前小伙伴的小伙伴说一定要带香水！没有厕所，交通极其混乱。我带着各种忐忑踏上了前往印度的飞机。</p><p>&nbsp; &nbsp; 但至少，印度给人的第一印象几乎是颠覆的，浅色的地毯铺在地上，宽敞的候机大厅。以及，最特别的入境处，——</p><p>&nbsp; &nbsp; 那一整排神的手指。</p><p>&nbsp; &nbsp; 它们真真正正的告诉你，欢迎你来到印度。这个神无所不在的国度。</p><p>&nbsp; &nbsp; 有小伙伴记得阿米尔汗演的那部印度电影吗，《我的个神啊》。这次印度之行让我深深意识到，这部电影对于印度来讲，就是天大的大不敬！！</p><p><br/></p><p><br/></p><p></p><p>我们到达的第一个景点——贾玛清真寺，位于脏乱破旧的旧德里地区，穿过狭窄脏乱的小巷，它就安静的像在历史中一般。是的，它就像历史，甚至它周围的一切都像历史，那种陈旧褪色、探险寻宝的历史。</p><p>&nbsp; &nbsp; 据说这座清真寺能容纳一万多人同时坐在里面，也是与沙特阿拉伯的麦加大清真寺、埃及开罗的爱资哈尔大清真寺齐名的世界三大清真寺之一。由莫卧儿王朝的第五位皇帝沙贾汗下令于1650年开始建造，历时6年时间建成，整个建筑由赤砂岩和白色大理石组合而成。</p><p>&nbsp; &nbsp; 要进清真寺需要注意穿着，上衣要有衣袖，下装要过膝盖。当然那里也有租衣服的地方，租赁费大概在50卢比，并非一次性那种衣服，同时需要脱鞋进入。这个清真寺最诡异的地方就是拍照，如果你要带拍照设备进入，每个设备300卢比。</p><p><br/></p><p>&nbsp;清真寺外各种脏乱差，挑战你的忍耐极限！但好在，虽然脏乱差，可至少没有臭味</p><p><br/></p><p>从贾玛清真寺出来，我们坐上人力车，前往月光集市。据说这里曾经是莫卧儿王朝沙贾汗时期最繁华的集市。因为过去这里做金银生意的人很多，又叫月光大道（月光族大道吧2333）。我们去的时间很早，基本上店铺都没有开门（他们的营业时间大概在10:00am—8:00pm），大多都是在狭窄巷道边摆摊的小贩，有卖水果蔬菜生活用具的，还有卖袋装土司的。</p><p>&nbsp; &nbsp;天呀，当你坐在人力车上，穿行在狭窄到只能容一辆人力车通过的月光集市之间，偶尔与一头全白高大的神牛对撞而过，真有种穿梭时光的真切感觉，那一刻彷如回到了岁月之前，你不曾生活在的那个历史。</p><p>&nbsp; &nbsp;我不敢多拍照啊，怕吓跑你们</p><p>&nbsp; &nbsp;用别人的话说就是，当她看见一位美女从月光集市的小巷走出来，她一整天的心情都没有了，总觉得那样的美女不该生活在这样恶心到令人作呕的环境中。</p><p>&nbsp; &nbsp;这就是月光集市，多么美丽的名字，多么脏乱差的小巷。我在印度的六天时光，这里是最最最让我无法忍受的，印度的其他地方和这里一比，什么都好说了。</p><p>&nbsp; &nbsp;当时我坐在人力车上，看着前面印度小哥努力踩踏着脚踏板，想起许多似曾相识的镜头。人潮喧动的月光集市，在历史上会是个什么样子呢？或者说，历史上人类聚居的那些地方又是什么样子呢，会像如今旧德里这般吗？</p><p><br/></p>',NULL,'2016-11-06 21:34:49',NULL),(60,NULL,'My_Name_丽','凝结的时光 错落的景致 优雅的气韵：一机一镜捷奥十日 电车 歌剧 博物馆 米其林 维也纳机场退税指南','<p>CK，Hallstatt，Salzburg：错落的景致</p><p><br/></p><p>起伏的错落赋予这里极致的景致。</p><p>在城市，登高为你奉上开阔的视野</p><p>而在这里，自然铺展的山地缓坡，绵延而丰厚，绿树红瓦别致的村落</p><p>于险峻山地之上的古老攻防，纵然今日平静，难掩曾经的风云际会</p><p>起伏的山地配上红瓦和河流，就是CK，小城最拥挤的几平米地方，傍晚7点，静得可以凝望</p><p><br/></p><p><br/></p><p>起伏的山地配上皮划艇、帆船、快艇、水上悠闲的或飞驰掠过的人们，这里就是圣沃夫冈湖，明媚的湖水不能少了葱郁的岸坡和欢笑声</p><p><br/></p><p>捷奥行，选择了办奥地利申根签证。虽然奥地利签证并不简单，但是捷克听闻需要的材料更多。。。这次还真是第一次为了办签证花钱去做公证。</p><p><br/></p><p>做公证是个很麻烦的事情，看到奥地利签证中心挂的申请材料check list里，明明白白写着结婚证需要做公证。于是带着结婚证去公证处，做一本的公证还是两本结婚证都做公证呢？纠结了一下，就做了一本。</p><p><br/></p><p>两周后公证书取回来，还要去外交部再做认证。我后来才知道这叫做双认证。问问外交部的认证办理代理吧，“我只做了一本结婚证的公证，可以吗？”，人家回答的倒是干脆，说你问签证中心啊，问我干嘛呢？于是电话问奥地利签证中心相同问题，人家却回答说，夫妻两人如果都能提供各自的银行流水的话，只需要结婚证的复印件就可以了。。。</p><p><br/></p><p>这么搞笑呢？那check list上为什么就写了要做公证呢，囧。但是为了保险起见，既然公证的钱都花了，就把外交部认证做了呗。递交认证的时候才发现搞笑了，原来的结婚证上不知道为什么没有政府公职人员签字，汗，公证需要重新做。</p><p><br/></p>',NULL,'2016-11-06 21:49:33',NULL),(61,NULL,'12345aa','【走遍世界的尽头】-最全冰岛圣经－极光、温泉、电影、环岛野游','<p>这个可以体会雷克雅未克首都，一个充满艺术气息的北欧城市，看看建筑，比如有名的正态分布大教堂，著名的雕塑，黄金圈可以去Geysir间歇泉、Gullfoss黄金瀑布，欧美大陆大裂缝Þingvellir National Park （美剧《冰与火》长城的原型），还有一些典型的冰岛瀑布Seljalandsfoss塞纳加蓝瀑布，Skógafoss瀑布，Blue Lagoon泻湖温泉。</p><p><br/></p><p><br/></p><p>Golden Circle是下图冰岛地图阴影的西南角</p><p>10天（在冰岛的时间，不算飞机），是一个环岛绕一圈的基础时间，沿途筛选一些自己喜欢的，最牛逼不能错过的基本也都在下图上了，包含了首都雷克雅未克，首都黄金圈，西部地区，还加了Vík的玄武岩黑沙滩，Vatnajökull欧洲最大冰盖，可以去Skaftafell冰川徒步（星际穿越拍摄地），Jökulsárlón冰湖（007《Die Another Day》拍摄地）， Höfn吃龙虾，Seydisfjordur最美峡湾小镇（《百日梦想家》拍摄地，这个镇子+93号公路，超牛滑板山路，电影里的景都是镇上实景，不是假的搭出来的，人家就住在那样的环境里，让楼主看到了什么是高度发达的社会主义），Dettifoss普罗米修斯的拍摄地，Myvatn米湖躺在温泉里看极光，顺便去《冰与火》囧Snow和女野人来一发的地下温泉洞去约个会，冰岛第二大城市Akureyri物价真是便宜，BenJerry和哈根达斯冰激凌，3-50块巨大一桶。</p><p><br/></p><p>这个楼主最推荐的玩法，之前的两个错过了好多牛逼的东西，可能是因为楼主对城市游无感。所以是在这个线路基础上，玩的加强版，之后有线路图。</p><p><br/></p>',NULL,'2016-11-06 22:03:17',NULL);

/*Table structure for table `travelpic` */

DROP TABLE IF EXISTS `travelpic`;

CREATE TABLE `travelpic` (
  `Tname` varchar(300) NOT NULL,
  `TravelNotePic` varchar(2000) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `travelpic` */

insert  into `travelpic`(`Tname`,`TravelNotePic`) values ('叫我如何不想她---台湾','4996048e-4128-40d0-906c-3af65b50fdf0.jpg'),('叫我如何不想她---台湾','d53a79fe-a749-4b94-a976-0318d341ab2b.jpg'),(' 最后悔的就是来了——《帕劳》','fb672be6-207f-4135-9d89-019325b5a40c.jpg'),(' 最后悔的就是来了——《帕劳》','8011d5af-fd2b-49b2-9b4a-90defab5fa0e.jpg'),(' 最后悔的就是来了——《帕劳》','5d568037-7da9-4257-b97c-282f7a7f834c.jpg'),(' 最后悔的就是来了——《帕劳》','1c4b5d37-8bba-4af5-a317-4dc7c8819a4b.jpg'),('彩云之南——昆明、大理、丽江5日游走','adb45a93-beae-48db-a140-789d3bdde2c9.jpg'),('彩云之南——昆明、大理、丽江5日游走','c74af846-b373-44bf-9540-5de3528e8a03.jpg'),('彩云之南——昆明、大理、丽江5日游走','f3c2de50-6da8-48df-910b-1cff808962ad.jpg'),('触不到的梦想，忘不了的爱','3b986015-80ca-4a54-96d9-ebcc65518dbc.jpg'),('触不到的梦想，忘不了的爱','d8950029-bd8d-4947-8904-c76dd733ebeb.jpg'),('触不到的梦想，忘不了的爱','dd09fd83-a876-461a-85e0-d1415ae6f82b.jpg'),('勇闯摩洛哥（十一天自由行之六城纪事+冗长tips 全篇完）','64988d9d-ad62-4f7e-ab6a-428117840be4.jpg'),('印度最西北，是梦中的克什米尔【从克什米尔南下喜马偕尔，瑞诗凯诗的30天印度之旅】','d1ee90dc-9660-479a-9be0-7744b62c001c.jpg'),('寻找麦哲伦｜菲律宾（宿务＋薄荷岛＋马尼拉）完','3be017b4-a457-48a3-b8c9-7223fe35606b.jpg'),('【对世界上瘾】这可能是一篇美国东海岸很小小小小小众的游记（马里兰、弗吉尼亚、华盛顿七天六晚）','a5c50fcb-f470-4a68-81c2-4714227c88c9.jpg'),('额济纳胡杨林，那一抹亮眼的金黄色','89b08c8a-c7e2-437e-b35c-b091c51d82f3.jpeg'),('【带上孩子世界环游】之诺亚方舟停靠的地方，那是亚美尼亚失去的远方','c99213fe-dc81-4ef8-a052-3eb5e4067dca.jpg'),('遥远的秘境——2014年12月三江并流之旅','76eb48f6-fd04-4a6e-931c-2e9eff168dcb.jpeg'),('青岛亲子游','15ebb12c-5910-448c-a2a6-2e45140c0089.jpeg'),('新德里·斋普尔·阿格拉·穿越时空遇见你','c4cc0d6a-4fc4-4272-80a7-3bbf66a6456b.jpeg'),('凝结的时光 错落的景致 优雅的气韵：一机一镜捷奥十日 电车 歌剧 博物馆 米其林 维也纳机场退税指南','fdf5ad22-68f1-4c99-bd3d-67fecdd747c4.jpg'),('【走遍世界的尽头】-最全冰岛圣经－极光、温泉、电影、环岛野游','c014ac23-00ec-43eb-a926-a68d11fdcb24.jpg'),('遥远的秘境——2014年12月三江并流之旅','be1f32cd-fb24-42bf-84d7-a36bd21a93e4.jpeg');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `UserId` int(11) NOT NULL auto_increment,
  `UserName` varchar(20) NOT NULL,
  `Upassword` varchar(100) NOT NULL,
  `Gender` varchar(20) default NULL,
  `TEL` varchar(50) NOT NULL,
  `provineId` int(11) default NULL,
  `CityId` int(11) default NULL,
  `CountyId` int(11) default NULL,
  `UserPic` varchar(100) default NULL,
  PRIMARY KEY  (`UserId`),
  KEY `provineId` (`provineId`),
  KEY `CityId` (`CityId`),
  KEY `CountyId` (`CountyId`)
) ENGINE=InnoDB AUTO_INCREMENT=1069 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`UserId`,`UserName`,`Upassword`,`Gender`,`TEL`,`provineId`,`CityId`,`CountyId`,`UserPic`) values (1059,'12345aa','fcea920f7412b5da7be0cf42b8c93759','男','18848980394',NULL,NULL,NULL,'e5efae1d-a3f5-44a5-af67-f7a4ab30b40c.jpeg'),(1060,'zhaoliyin','fcea920f7412b5da7be0cf42b8c93759',NULL,'18848980389',NULL,NULL,NULL,'287093b0-8fcc-4419-ad2b-b44b448231a1.jpg'),(1061,'lichen','fcea920f7412b5da7be0cf42b8c93759',NULL,'18848980389',NULL,NULL,NULL,'2d786bde-cb04-4e52-8eb5-320acb786a70.jpg'),(1065,'chenqiaoen','fcea920f7412b5da7be0cf42b8c93759',NULL,'18149542220',NULL,NULL,NULL,'be5e5066-d07e-48c4-bd2d-2880bbb13128.png'),(1066,'2_差有有有','fcea920f7412b5da7be0cf42b8c93759','女','18149544298',NULL,NULL,NULL,'6995148c-2c06-4a37-9e3e-cb525d3d793e.jpg'),(1067,'12345678','fcea920f7412b5da7be0cf42b8c93759',NULL,'18896981247',NULL,NULL,NULL,'DefaultAvatar.jpg'),(1068,'My_Name_丽','fcea920f7412b5da7be0cf42b8c93759',NULL,'13959406469',NULL,NULL,NULL,'DefaultAvatar.jpg');

/*Table structure for table `userpic` */

DROP TABLE IF EXISTS `userpic`;

CREATE TABLE `userpic` (
  `UserName` varchar(50) default NULL,
  `pic` varchar(50) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `userpic` */

insert  into `userpic`(`UserName`,`pic`) values ('12345aa','5c220d61-5c3e-4896-b1ea-e61ef308b4ca.jpeg'),('12345aa','592de463-b14a-4602-90ec-2a1a7c931b98.jpg'),('12345aa','b1f1b521-726b-4c80-80d4-8b7392aa8fc5.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
