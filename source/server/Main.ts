import * as Express from 'express'
import { json } from 'body-parser'
import { graphqlExpress as GraphQL, graphiqlExpress as GraphDocumentation } from 'graphql-server-express'
import { Graph } from "./graph/Graph"
import PGDriver from "../shared/sql/PGDriver"

// Start the Database connection
PGDriver.connect()

// Create an Express application
let application = Express()

// Add a JSON body parser
application.use(json())

// Add the GraphQL endpoint
application.use("/graphql", GraphQL({
    schema: Graph
}))

// Add the GraphQL documentation endpoint
application.use("/api_documentation", GraphDocumentation({
    endpointURL: "/graphql"
}))

// Add the Steam Authentication endpoints
import { SteamAuthenticationController } from "./controllers/app/SteamAuthenticationController"
application.get("/auth/steam/request", SteamAuthenticationController.requestAuthentication)
application.get("/auth/steam/return", SteamAuthenticationController.confirmAuthentication)

application.listen(process.env.PORT);