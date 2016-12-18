import * as Koa from "koa"
import { Router } from "@t2ee/vader"

// Create a new web server
let application = new Koa()

// Create a router to manage the web server
let router = new Router()

// Construct the router by mounting the controllers

// Static Controllers

// Application Controllers
import { ApplicationController } from "./controllers/app/ApplicationController"
router.use(ApplicationController)

// API Controllers

// Mount the router
application.use(router.routes())

// Launch the application
application.listen(process.env.PORT)