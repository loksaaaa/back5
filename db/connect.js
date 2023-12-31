

const mongoose = require("mongoose")
const mongodbConfig = require('./config').mongodb;


mongoose.Promise = global.Promise;

function getMongodbConfig(){
    let options = {
        useNewUrlParser:true,
       useUnifiedTopology:true
    }

    return options;
}


function getMongoUrl(){
    let mongoUrl = 'mongodb://';
    let dbName = mongodbConfig.db;
    mongoUrl += `${mongodbConfig.host}:${mongodbConfig.port}`;
    mongoUrl += `/${dbName}`


    return mongoUrl;
}

let mongoClient = mongoose.createConnection(getMongoUrl(),getMongodbConfig());

function close(){
    mongoClient.close();
}


module.exports = {
    mongoClient,
    close:close,
}