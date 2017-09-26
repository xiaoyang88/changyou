/**
 * Created by ybgong on 2016/9/6.
 */
var express=require("express");
var app=express();
app.get("/",function (req,res) {
    res.send("hello 中国~")
}).listen(8080);
