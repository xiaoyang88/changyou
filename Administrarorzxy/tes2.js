/**
 * Created by ybgong on 2016/9/6.
 */
var express=require("express");
var app=express();
app.get("/",function (req,res) {
    res.send("hello 中国~")
});
app.get("/ShowAllUsers",function (req,res) {
    res.send("所有人~")
})
app.get("/index.html",function (req,res) {
    res.write("所有人123~");
    res.end();
})
app.listen(8080);
