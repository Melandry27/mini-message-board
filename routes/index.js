var express = require("express")
var router = express.Router()

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
]

/* GET home page */
router.get("/", (req, res, next) => {
	res.render("index", { title: "Mini Message Board", messages: messages })
})

/* GET create message page */
router.get("/new", (req, res, next) => {
	res.render("new", { title: "Create New Message" })
})

/*POST message*/
router.post("/new", (req, res, next) => {
	messages.push({ text: req.body.message, user: req.body.user, added: new Date() })
	res.redirect("/")
})

module.exports = router
