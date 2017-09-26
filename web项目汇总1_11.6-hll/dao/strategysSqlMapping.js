/**
 * Created by ybgong on 2016/9/1.
 */
//定义 了一个实体user对象，对象里有6个变量；6个sql语句用来操作数据库
var strategys = {
    //insert:'INSERT INTO user(UserId,UserPassword , UserName, Gender,BirthDate,Pic) VALUES(?,?,?,?,?,?)',
    queryAll: 'select * from strategynote',
    //queryAllPages: 'select * from books LIMIT ?,?',

};
module.exports = strategys;