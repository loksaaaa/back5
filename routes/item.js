let express = require('express')

let router = express.Router();

let ItemServer = require('../server/ItemServer')

let itemServer = new ItemServer();

router.get('/create', (req,res,next)=>{
    itemServer.create(req,res)
})


router.get('/delete', (req,res,next)=>{
    itemServer.delete(req,res)
})

router.get('/itemChangeDone', (req,res,next)=>{
    itemServer.itemChangeDone(req,res)
})



router.get('/resolved', (req,res,next)=>{
    itemServer.resolved(req,res)
})






module.exports = router;