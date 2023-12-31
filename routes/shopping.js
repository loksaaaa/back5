let express = require('express')
let router = express.Router();

 

const Mongoose = require('mongoose')
let Shopping = require('../db/model/Shopping')
let ShoppingList = require('../db/model/ShoppingLists')

let Item = require("../db/model/Item")



 async function conn(){
    await Mongoose.connect("mongodb://127.0.0.1:27017/db_shopping")
 }



 

 

let backObj = {
    status:200,
    msg:'ok',
    ErrorMap:{}
}


let errObj = {
    msg:'not found the page or api',
    status:500
}




router.get('/',(req,res,next)=>{
    res.send('shoppingLists list')
})

// shopping list by id return shoppingList obj
router.get('/shoppingLists',(req,res,next)=>{
    console.log(req.query);
    // res.send(req.query.id )
    let id = req.query && req.query.id;
    if(id){
        conn().then(async db=>{



           
              let dbObj =await ShoppingList.findOne({'_id':id})

          console.log( dbObj);
          
        
              const listsOut = {
                ...backObj,
                ...dbObj._doc,
                id:dbObj._doc._id
                
            }
            res.send( listsOut)
          
          
          
          
           }).catch(err=>{
              console.log("err,",err);
           })

        
    }else{
        res.send(errObj)
    }
})

// shopping list by id return shoppingList obj
router.get('/shoppingList',(req,res,next)=>{
  //  res.send('shpping list')

    let id = req.query && req.query.id;
    if(id){
       

        conn().then(async db=>{



              let dbObj =await Shopping.findOne({'_id':id})

          console.log( dbObj);
          
        
              const listsOut = {
                ...backObj,
                ...dbObj._doc,
                id:dbObj._doc. _id
                
            }
            res.send( listsOut)
          
          
          
          
           }).catch(err=>{
              console.log("err,",err);
           })

        
        
    }else{
        res.send(errObj)
    }
})

// shopping list by id return shoppingList obj 
router.get('/shoppingList/create',(req,res,next)=>{
  //  res.send('shpping list create')
    let listName= req.query && req.query.listName;
    let owner = req.query && req.query.owner;

    if(listName && owner){

        conn().then(async db=>{

delete req.query._id
delete req.query.id
delete req.query.ErrorMap
delete req.query.msg
delete req.query.status
console.log("zzz3z",req.query);

            const shoppingList = new Shopping({
               ...req.query,
              listName,
              owner,
              
          })
              let dbObj =await shoppingList.save();

          
              const listsOut = {
                ...backObj,
                ...dbObj._doc,
                id:dbObj._doc. _id
                
            }
            res.send( listsOut)
          
          
          
          
           }).catch(err=>{
              console.log("err,",err);
           })
          
    
    }else{
        res.send(errObj)
    }
})


// shopping list by id return shoppingList obj
router.get('/shoppingList/delete',(req,res,next)=>{
  //  res.send('shpping list delete')
    let id = req.query && req.query.id;
    if(id){
        conn().then(async db=>{



            const shoppingList = new Shopping({
              
          })
              let dbObj =await Shopping.deleteOne({'_id':id})

          console.log( dbObj);
          
        
              const listsOut = {
                ...backObj,
                ...dbObj,
            }
            res.send( listsOut)
          
          
          
          
           }).catch(err=>{
              console.log("err,",err);
           })
    }else{
        res.send(errObj)
    }
})

// shopping list by id return shoppingList obj
router.get('/shoppingList/invite',(req,res,next)=>{
   // res.send('shpping list invite')

    let id = req.query && req.query.id;
    // let userIds = ['fsakdfjisaengdfsf','sw342w98sdfn']
    let userIds = req.query && req.query.userIds;
    if(id && userIds){
        // const listsOut = {
        //     ...backObj,
        //     id:"ksdfsdfi",
        //     awid:"ksdfsidfwe",
        //     invitedUsers:['sadfgsaighwei','sdgniwehgsdfsi'],

        //     listName:"Shopping List 1",
        //     owner:'id',
        //     members:['userid1','userid2'],
        //     archived:false,
        //     items:[
        //         {
        //             id:'dgasdgasjdifjweief',
        //         },
        //         {
        //             id:'dhrtjfvhdfhgf',
        //         },
        //         {
        //             id:'dhfhjgfhjkyhguhghhf',
        //         }
        //     ]
        // }
        // res.send( listsOut)

        conn().then(async db=>{

console.log( userIds,id);

            const shoppingList = new Shopping({
              
          })
              let dbObj =await Shopping.findOne({'_id':id})

          console.log( dbObj);
          
        
              const listsOut = {
                ...backObj,
                ...dbObj._doc,
                id:dbObj._doc. _id
                
            }
            res.send( listsOut)
          
          
          
          
           }).catch(err=>{
              console.log("err,",err);
           })
    }else{
        res.send(errObj)
    }
})


// item 

// shopping list by id return shoppingList obj
router.get('/item/create',(req,res,next)=>{
   // res.send('shpping item create')
    let itemName = req.query && req.query.itemName;
    let listId = req.query && req.query.listId;
    if(itemName && listId){
        // const listsOut = {
        //     ...backObj,
        //     id:"ksdfsdfi",
        //     awid:"ksdfsidfwe",
            
        //     listName:"Shopping List 1",
        //     status:'pedding',
        //     listId:'sdjfsidfhsiefwsefh'
        // }
        // res.send( listsOut)


    

        conn().then(async db=>{

            let ItemObj = new Item({
                itemName,
                listId
            })
            
                        
                          let dbObj =await ItemObj.save()
            
                      console.log( dbObj);
                      
                    
                          const listsOut = {
                            ...backObj,
                            ...dbObj._doc,
                            id:dbObj._doc. _id
                            
                        }
                        res.send( listsOut)
                      
                      
                      
                      
                       }).catch(err=>{
                          console.log("err,",err);
                       })
    }else{
        res.send(errObj)
    }
})


// shopping list by id return shoppingList obj
router.get('/item/delete',(req,res,next)=>{
   // res.send('shpping item del')
    let id = req.query && req.query.itemId;
    
    if(id){
        const listsOut = {
            ...backObj,
        }
        res.send( listsOut)


        conn().then(async db=>{

             
            
                        
                          let dbObj =await Item.deleteOne({'_id':id})
            
                      console.log( dbObj);
                      
                    
                          const listsOut = {
                            ...backObj,
                            ...dbObj
                        }
                        res.send( listsOut)
                      
                      
                      
                      
                       }).catch(err=>{
                          console.log("err,",err);
                       })
    }else{
        res.send(errObj)
    }
})

// shopping list by id return shoppingList obj
router.get('/item/resolved',(req,res,next)=>{
   // res.send('shpping  item resolved')
    let id = req.query && req.query.itemId;

    if(id){
       

        conn().then(async db=>{

             
             
                          let dbObj =await Item.findOne({'_id':id})
            
                      
                    
                          const listsOut = {
                            ...backObj,
                            ...dbObj._doc,
                            id:dbObj._doc. _id
                            
                        }
                        res.send( listsOut)
                      
                      
                      
                      
                       }).catch(err=>{
                          console.log("err,",err);
                       })


    }else{
        res.send(errObj)
    }
})

// router.get('/item/resolved',(req,res,next)=>{
//     res.send('shpping  list')
// })



const ShoppingListServer = require('../server/ShoopingListServer')

//part4

//
router.get('/shippingList/list',(req,res,next)=>{

})

//
router.get('/shppingList/get',(req,res,next)=>{})

//
router.get('/shppingList/create',(req,res,next)=>{})


//
router.get('/shoppingList/delete',(req,res,next)=>{})

//
router.get('/shoppingList/update',(req,res,next)=>{
    let server = new ShoppingListServer();
    server.updateOne();

    let obj = {};


    res.send(obj)

})







module.exports = router;






