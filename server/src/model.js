var mongoose = require('../../node_modules/mongoose');
var UserSchema = new mongoose.Schema({
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
    idea_list:[mongoose.Schema.ObjectId],
    comment_list:[mongoose.Schema.ObjectId],
    like_list:[mongoose.Schema.ObjectId]
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
    comment_list:[mongoose.Schema.ObjectId],
    statud:Number
});

var CommentSchema = new mongoose.Schema({
    //use the default _id as key
    author:mongoose.Schema.ObjectId,
    belong:mongoose.Schema.ObjectId,
    content:String,
    timestamp:Number
});

mongoose.model('User', UserSchema);
mongoose.model('Idea', IdeaSchema);
mongoose.model('Comment', CommentSchema)