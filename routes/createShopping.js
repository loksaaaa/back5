let express = require('express')

let router = express.Router();

let ShoppingServer = require('../server/Shopping.js')

let shoppingServer = new ShoppingServer();

// router.get('/', (req,res,next)=>{
   
//     listsServer.list(req,res)
// })

router.get('/create',(req,res,next)=>{
    shoppingServer.create(req,res)
})



module.exports = router;