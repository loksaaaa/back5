// define Schema
let { Schema } = require('mongoose')
let { mongoClient } = require('../connect')



let Userchema = new Schema({
	name:String,
    awid:String,
})

const UserModel = mongoClient.model('User',Userchema)

module.exports = UserModel;