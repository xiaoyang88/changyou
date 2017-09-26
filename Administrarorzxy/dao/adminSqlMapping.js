/**
 * Created by ybgong on 2016/9/1.
 */
//定义 了一个实体user对象，对象里有6个变量；6个sql语句用来操作数据库
var admin = {
    insert:'INSERT INTO user(UserId,UserPassword , UserName, Gender,BirthDate) VALUES(?,?,?,?,?)',
    update:'update user set UserName=?, Gender=? where UserId=?',
    queryAll: 'select * from user',
    queryByGener: 'select * from user where Gender=?',
    // 以下为管理员
    queryById: 'select * from user where TravelNoteId=?',
    select: 'select * from manager where ManagerId=? and Mpassword=?',
    queryAllTraveal:'select * from travelnote',
    DeleteTravealByTravelNoteId: 'delete from travelnote where TravelNoteId=?',
    queryAllQuestion:"select q.UserName,q.QuestionId,q.QuestionName,q.QuestionContent,q.QuestionTime,qa.AnswerId,qa.AnswerContent,qa.AnswerTime from question q,question_answer qa where q.QuestionId=qa.QuestionId",
    deleteQueryAllQuestion: 'delete from question where QuestionId=?',
    queryAllStratagy:'select * from destination',
    deleteQueryAllStratagy: 'delete from destination where DestinationId=?',
    queryAllpinglun:'select * from travel_comment',
    deletequeryAllpinglun: 'delete from travel_comment where CommentId=?',
    queryintegral:'select * from integral',
    deletequeryintegral: 'delete from integral where UserId=?',
     querygoods:'select * from goods',
    deletequerygoods: 'delete from goods where GoodId=?',
    InsertGoods:'insert into goods(GoodId,GoodName,GoodIntegral,Quantity,GoodPic,GoodsDescribe)values(?,?,?,?,?,?)',
    insertDes:'insert into destination(DestinationName,describe,Pic,content) VALUES(?,?,?,?)'


   

};
module.exports = admin;