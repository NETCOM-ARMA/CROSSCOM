import { makeExecutableSchema } from "graphql-tools"
import RealismName from "./types/RealismName.type"
import UserType from "./types/User.type"
import UnitType from "./types/Unit.type"
import UnitMembership from "./types/UnitMembership.type"
import GetUserQuery from "./queries/GetUser.query"

let RootQuery = `
    type RootQuery {
        user(id: Int!): User
    }
`

let SchemaDefinition = `
    schema {
        query: RootQuery
    }
`

export let Graph = makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, RealismName, UserType, UnitType, UnitMembership],
    resolvers: {
        RootQuery: {
            user: GetUserQuery
        }
    }
})