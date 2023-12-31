let ShoppingListModel = require('../db/model/Shopping');
let UserModel = require('../db/model/User.js')



let successObj = {
	status: 200,
	msg: "OK",

}

let errObj = {
	status: 500,
	msg: 'not found ,the server is error'
}


class ShoppingListServer {


	constructor() {

		this.model = ShoppingListModel;
		this.userModel = UserModel;

	}

	async list() {


		let id = req.query.id;

		if (id) {

			let db_obj = await ShoppingListModel.find({
				"_id": id
			}).exec()

			res.send({
				...successObj,
				...db_obj
			})
		} else {
			res.send({
				...errObj
			})
		}
	}

	async getOneById(req, res) {
		let id = req.query.id;

		if (id) {

			let db_obj = await ShoppingListModel.findById({
				"_id": id
			}).exec()

            console.log(":kdddddddddddd",db_obj)

			res.send({
				...successObj,
				...db_obj
			})
		} else {
			res.send({
				...errObj
			})
		}
	}

	async invitePerson(req, res) {
		let id = req.query.id;
		let userIds = Array.from(req.query.userIds);

		console.log("xx33x", userIds);
		if (id) {

			let db_obj = await this.model.updateOne({
				"_id": id,
			},{
				userIds: userIds
            });

			res.send({
				...successObj,
				...db_obj
			})
		} else {
			res.send({
				...errObj
			})
		}
	}

	async create(req, res) {
		let listName = req.query.listName;
		let owner = req.query.owner;
		let obj = {
			listName,
			owner
		}

		if (listName && owner) {

			// conn().then( async ()=>{
			//     let db_obj = await this.model.save(obj);
			//     res.send(db_obj)
			//  }).catch((err)=>{
			//     res.send({
			//         ...errObj,
			//         ...err
			//     })
			//  })


			let db_obj = await new ShoppingListModel(obj).save();
			res.send(db_obj)





		} else {
			res.send(errObj)

		}








	}
	async deleteMumber(req, res) {
		let memberId = req.query.memberId;
		let id = req.query.id;

		if (id && memberId) {
			let db_obj = await this.model.updateOne({
				"_id": id
			}, {
				$pull: {
					members: memberId
				}
			})

			if (db_obj.acknowledged) {
				res.send({
					...successObj,
				})

			}


		} else {
			res.send({
				...errObj,
				msg: 'not have the id send to server'
			})
		}
	}
	
	async itemChangeDone(req,res){
		
		let itemId = req.query.itemId;
		let id = req.query.id;
		
		if (id && itemId) {
			let db_obj = await this.model.updateOne({
				"_id": id
			}, {
				$pull: {
					items: itemId
				}
			})
		
			if (db_obj.acknowledged) {
				res.send({
					...successObj,
				})
		
			}
		
		
		} else {
			res.send({
				...errObj,
				msg: 'not have the id send to server'
			})
		}
		
	}
	
	async deleteItem(req,res){
		
		let itemId = req.query.itemId;
		let id = req.query.id;
		
		if (id && itemId) {
			let db_obj = await this.model.updateOne({
				"_id": id
			}, {
				$pull: {
					items: itemId
				}
			})
		
			if (db_obj.acknowledged) {
				res.send({
					...successObj,
				})
		
			}
		
		
		} else {
			res.send({
				...errObj,
				msg: 'not have the id send to server'
			})
		}
		
	}
	
	
	async addMumber(req,res){
		let userName = req.query.memberName;
		let shoppingId = req.query.id;
		if(userName){
				
			let obj={
				name:userName
			}
			let db_obj = await new UserModel(obj).save();
			let shopping = await this.model.updateOne(
				{ _id:shoppingId},
				{
					$push:{
						members:db_obj._id
					}
				}
			)
			
		}
	}
	
	async deleteById(req, res) {
		let id = req.query.id;
		if (id) {

			let db_obj = await this.model.deleteOne({
				"_id": id
			})

			if (db_obj.acknowledged) {
				res.send({
					...successObj,
				})
			} else {
				res.send({
					...errObj,
					...db_obj
				})
			}


		} else {
			res.send({
				...errObj,
				msg: 'not have the id send to server'
			})
		}
	}
	async rename(req, res) {
		let id = req.query.id;
		let listName = req.query.listName;

		if (id && listName) {


			let db_obj = await this.model.updateOne({
				"_id": id,
				listName: listName
			});

			res.send({
				...successObj,
				...db_obj
			})
		} else {
			res.send({
				...errObj
			})
		}
	}
	async updateOne() {
		let id = req.query.id;
		let userIds = req.query.userIds;

		console.log("xxx", userIds);
		if (id) {

			let db_obj = await this.model.updateOne({
				"_id": id,
				userIds: userIds
			});

			res.send({
				...successObj,
				...db_obj
			})
		} else {
			res.send({
				...errObj
			})
		}


	}
}



module.exports = ShoppingListServer