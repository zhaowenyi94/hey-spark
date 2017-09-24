var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({ //定义数据模型
    Id: Number,
    nickname: String,
    email: String,
    password: String,
    pro_pic: String,
    tag: [String],
    profile:{
    	address:String,
    	email:String,
    	tel:String,
    	link:String
    },
    idea_table:[Number],
    comment_table:[Number],
    like_table:[Number]

});
mongoose.model('User', UserSchema);//将该Schema发布为Model,第一个参数为数据库的集合，没有会自动创建