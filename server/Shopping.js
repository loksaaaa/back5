

let User = require('../db/model/User')





let successObj = {
	status: 200,
	msg: "OK",

}

let errObj = {
	status: 500,
	msg: 'not found ,the server is error'
}


class ShoppingServer {
	constructor() {

		this.model = User;

	}

	async create(req, res) {

		let name = req.query.name
		let awid = req.query.awid

		let obj = {
			name,
			awid
		}

		if (name && awid) {
			let db_obj = await new User(obj).save()



			res.send({
                ...successObj,
                ...db_obj
            })

		} else {
			res.send(errObj)
		}


	}

}

module.exports = ShoppingServer;
