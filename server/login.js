var  express=require('express');
var app=express();
var mongoose = require('mongoose');
var querystring = require('querystring');
require('./connect.js');
require('./model.js');
var User = mongoose.model('User');  //User为model name
mongoose.Promise = global.Promise;  //为了避免警告的出现，因为mongoose的默认promise已经弃用了


/**
 * 配置登录视图
 */
app.get('/',function (req,res) {
    res.sendfile(__dirname + "/" + "login.html" );
})

/**
 * 配置注册视图
 */
app.get('/register.html',function (req,res) {
    res.sendfile(__dirname+"/"+"register.html");
})


/**
 * 处理登录逻辑
 */
app.post('/login', function(req,res){
    var body = "";
    req.on('data', function(chunk){
        body += chunk;
    });

    req.on('end',function(){

        body = querystring.parse(body);
        if(body.act=="login"){

            User.findOne({email:body.email,password:body.password},function (error,result) {
                console.log(result);
                if (result==null)
                {
                    res.sendfile(__dirname + "/" + "no.html" );
                }else
                {
                    res.sendfile(__dirname + "/" + "ok.html" );
                    var kvp="";
                    kvp+="_id="+result._id
                       +"&username="+result.nickname
                       +"&pro_pic="+result.pro_pic
                       +"&tag="+result.tag
                       +"&profile="+result.profile
                       +"&idea_table="+result.idea_table
                       +"&comment_table="+result.comment_table
                       +"&like_table="+result.like_table;
                    res.cookie('account', kvp,{maxAge:10*60*1000, path:'/'});

                }
            })
        } else if(body.act=="register"){
            User.findOne({email:body.email},function (error,result) {
                if (result==null)
                {
                    var user=new User(
                    {
                        email:body.email,
                        password:body.password,
                        nickname:body.username
                    })
                    user.save(function (err,result) {
                        if (result==null) {
                        } else {
                            res.sendfile(__dirname + "/" + "register_OK.html" );
                        }
                    })
                }else
                {
                    res.sendfile(__dirname + "/" + "no.html" );
                }
            })
        }
        
    })
})


var  server=app.listen(3030,function () {
    console.log("start");
})