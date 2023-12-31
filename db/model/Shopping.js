// const Mongoose = require("mongoose")
let { Schema } = require('mongoose')
let { mongoClient } = require('../connect')


 
    ShoppingSchema = new Schema({
        listName:String,
        owner:String,
        awid:String,
        sys:{
            cts:Date,
            mts:Date,
            rev:Number
        },
        id:String,
        members:[],
        items:[
        ],
        userIds:[String],
        invitedUsers:[String],
        archive:Boolean
    
    })
    
    
    
    
    const ShoppingModel = mongoClient.model('Shop_List',ShoppingSchema)
    
    module.exports = ShoppingModel;



