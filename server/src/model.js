var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({ //定义数据模型
    //use the default _id as key
    username: String,
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
    idea_list:[Objectid],
    comment_list:[Objectid],
    like_list:[Objectid]
});

var IdeaSchema = new mongoose.Schema({
    //use the default _id as key
    member:{
        sponsor:[String],
        collaborator:[String]
    },
    timestamp:{
        create:Number,
        last_update:Number
    },
    title:String,
    description:String,
    tag:[String],
    likes:Number,
    comment_list[Objectid],
    statud:Number
});

var CommentSchema = new mongoose.Schema({
    //use the default _id as key
    author:Objectid,
    belong:Objectid,
    content:String,
    timestamp
});

mongoose.model('User', UserSchema);
mongoose.model('Idea', IdeaSchema);
mongoose.model('Comment', CommentSchema)