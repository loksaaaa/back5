// define Schema
let { Schema } = require('mongoose')
let { mongoClient } = require('../connect')



let Itemchema = new Schema({
    itemName:String,
    listId:String,
    awid:String,
    status:String,
    itemId:String,
	isDone:Boolean

})

const ItemModel = mongoClient.model('Item',Itemchema)

module.exports = ItemModel;