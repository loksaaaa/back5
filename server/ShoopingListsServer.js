



let ListModel = require('../db/model/ShoppingLists')



let successObj = {
    status:200,
    msg:"OK",

}

let errObj ={
    status:500,
    msg:'not found ,the server is error'
}



class ShoppingListsServer {

    constructor(){
        this.model = ListModel;
    }

    // 
    async list(req,res){
   
        let id = req.query.id;
        if(id){
            console.log(this.model);
            let db_obj = await this.model.find();

            console.log( db_obj);

            if(db_obj){
                res.send({
                    ...successObj,
                    shoppingLists:db_obj
                })
            }else{
                res.send(errObj)
            }

           
        }else{
            res.send(errObj)
        }


    }


    async updateOne(req,res){
        let id = req.query.id;

        if(id){
            console.log(this.model);
            let isDone = req.query.isDone;
            let db_obj = await this.model.updateOne({_id:id},{isDone:isDone})

            console.log("mmmm", db_obj);

            if(db_obj){
                res.send({
                    ...successObj,
                    shoppingLists:db_obj
                })
            }else{
                res.send(errObj)
            }

           
        }else{
            res.send(errObj)
        }

    }

    async delOne(req,res){

        let id = req.query.id;

        if(id){
            
            let db_obj = await this.model.deleteOne({_id:id},)

            console.log("del", db_obj);

            if(db_obj){
                res.send({
                    ...successObj,
                    shoppingLists:db_obj
                })
            }else{
                res.send(errObj)
            }

           
        }else{
            res.send(errObj)
        }

    }

}


module.exports = ShoppingListsServer;