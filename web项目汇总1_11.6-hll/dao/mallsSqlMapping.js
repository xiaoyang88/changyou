/**
 * Created by ybgong on 2016/9/1.
 */
//定义 了一个实体user对象，对象里有6个变量；6个sql语句用来操作数据库
var goods = {
    //insert:'INSERT INTO user(UserId,UserPassword , UserName, Gender,BirthDate,Pic) VALUES(?,?,?,?,?,?)',
    queryAll: 'select * from goods',
    // queryone: 'select * from goods where GoodId=?',
    queryAllPages: 'select * from goods where GoodId=?',

};
module.exports = goods;