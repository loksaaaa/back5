let express = require('express')

let router = express.Router();

let ListsServer = require('../server/ShoopingListsServer')

let listsServer = new ListsServer();

router.get('/', (req,res,next)=>{
   
    listsServer.list(req,res)
})

router.get('/changeArchive',(req,res,next)=>{
    listsServer.updateOne(req,res)
})


router.get('/del',(req,res,next)=>{
    listsServer.delOne(req,res)
})


module.exports = router;