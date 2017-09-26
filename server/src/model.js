var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId();
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
    idea_list:[ObjectId],
    comment_list:[ObjectId],
    like_list:[ObjectId]
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
    comment_list:[ObjectId],
    statud:Number
});

var CommentSchema = new mongoose.Schema({
    //use the default _id as key
    author:ObjectId,
    belong:ObjectId,
    content:String,
    timestamp:Number
});

mongoose.model('User', UserSchema);
mongoose.model('Idea', IdeaSchema);
mongoose.model('Comment', CommentSchema)