let express = require('express')

let router = express.Router();

let ShoopingListServer = require('../server/ShoopingListServer')


let listServer = new ShoopingListServer();

router.get('/', (req,res,next)=>{
    listServer.getOneById(req,res);
})

router.get('/list',(req,res,next)=>{
    listServer.list(req,res);
})



router.get('/create', (req,res,next)=>{
   listServer.create(req,res);

})

router.get('/delete',  (req,res,next)=>{
    listServer.deleteById(req,res)
})

router.get('/deleteMumber',  (req,res,next)=>{
    listServer.deleteMumber(req,res)
})


router.get('/deleteItem',  (req,res,next)=>{
    listServer.deleteItem(req,res)
})

router.get('/addMumber',  (req,res,next)=>{
    listServer.addMumber(req,res)
})



router.get('/itemChangeDone',  (req,res,next)=>{
    listServer.itemChangeDone(req,res)
})


router.get('/rename',(req,res,next)=>{
    listServer.rename(req,res);

})


router.get('/update',(req,res,next)=>{
    listServer.updateOne(req,res);

})

router.get('/invite', (req,res,next)=>{
    listServer.invitePerson(req,res)
})




module.exports = router;













