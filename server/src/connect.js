var mongoose = require("mongoose");   //需要提前使用npm安装mongodb

var url = "mongodb://127.0.0.1:27017/ideapocket";
var db = mongoose.connect(url);                     //连接数据库