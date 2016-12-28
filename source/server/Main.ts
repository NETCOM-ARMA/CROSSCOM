import * as Express from 'express'
import { json } from 'body-parser'
import { graphqlExpress as GraphQL, graphiqlExpress as GraphDocumentation } from 'graphql-server-express'
import { Graph } from "./graph/Graph"
import { GraphContext } from "./graph/helpers/GraphContext"
import { JWT } from "../shared/cryptography/JWT"
import PGDriver from "../shared/sql/PGDriver"
import { Loaders } from "../shared/loaders/Loaders"

// Start the Database connection
PGDriver.connect()

// Create an Express application
let application = Express()

// Add a JSON body parser
application.use(json())

// Add the GraphQL endpoint
application.use("/graphql", GraphQL(async (request: Express.Request) => {

    // Retrieve the authentication header from the request
    let jwt_header = request.get("Authorization")

    // Decrypt the jwt header
    try {

        let payload: any = await JWT.verify(jwt_header, process.env.AUTHENTICATION_TOKEN_SECRET)

        return {
            schema: Graph,
            context: new GraphContext(payload.user_id)
        }

    } catch(e) {
        
        return {
            schema: Graph,
            context: new GraphContext(null)
        }

    }

}))

// Add the GraphQL documentation endpoint
application.use("/api_documentation", GraphDocumentation({
    endpointURL: "/graphql"
}))

// Add the Steam Authentication endpoints
import { SteamAuthenticationController } from "./controllers/app/SteamAuthenticationController"
application.get("/auth/steam/request", SteamAuthenticationController.requestAuthentication)
application.get("/auth/steam/return", SteamAuthenticationController.confirmAuthentication)

// Add the Application Endpoints
import { ApplicationController } from "./controllers/app/ApplicationController"
application.get("/app*", ApplicationController.renderApplication)

// Add the static hosting to the application
application.use("/statics", Express.static(".tmp/statics"))

application.listen(process.env.PORT);