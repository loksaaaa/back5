

let { Schema } = require('mongoose')
let { mongoClient } = require('../connect')



ShoppingSchema = new Schema({
    listName:String,
    awid:String,
    isDone:Boolean
})

const ShoppingListModel = mongoClient.model('ShoppingListModel',ShoppingSchema,'shoppingListModels')

module.exports = ShoppingListModel;