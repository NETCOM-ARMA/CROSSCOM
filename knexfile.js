// Import dotenv
var dotenv = require("dotenv")

dotenv.config()

module.exports = {

	postgres: {
		client: "pg",
		connection: process.env.DATABASE_URL,
		pool: {
	  		min: 1,
	  		max: 5
		}
	}
	
}