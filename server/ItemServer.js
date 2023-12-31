let Item = require('../db/model/Item')





let successObj = {
	status: 200,
	msg: "OK",

}

let errObj = {
	status: 500,
	msg: 'not found ,the server is error'
}


class ItemServer {
	constructor() {

		this.model = Item;

	}

	async create(req, res) {

		let itemName = req.query.itemName
		let listId = req.query.listId

		let obj = {
			itemName,
			listId
		}

		if (itemName && listId) {
			let db_obj = await new Item(obj).save()



			res.send(db_obj)

		} else {
			res.send(errObj)
		}


	}

	async delete(req, res) {

		let id = req.query.id;
		console.log("del item",id);
		if (id) {
			let db_obj = await this.model.deleteOne({
				"_id": id
			})

			if (db_obj.acknowledged) {
				res.send(successObj)
			} else {
				res.send(errObj)
			}
		}

	}
	async itemChangeDone(req, res) {

		let itemId = req.query.itemId;
		let isDone = req.query.isDone;
		if (itemId) {
			let db_obj = await this.model.updateOne({
				"_id": itemId
			}, {
				isDone: isDone
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



	async resolved(req, res) {

		let itemId = req.query.itemId;
		if (itemId) {
			let db_obj = await this.model.findOne({
				"_id": itemId
			})

			if (db_obj) {
				res.send({
					...successObj,
					...db_obj
				})
			}
		} else {
			res.send(errObj)
		}


	}
}


module.exports = ItemServer;