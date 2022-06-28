const mongoose = require("mongoose")

let Schema = mongoose.Schema

let MessageSchema = new Schema({
	text: { type: String, required: true, maxLength: 240 },
	user: { type: String, required: true, maxLength: 12 },
	date_of_created: { type: Date },
})

//Export model
module.exports = mongoose.model("Message", MessageSchema)
