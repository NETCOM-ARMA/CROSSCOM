import { makeExecutableSchema } from "graphql-tools"
import UserType from "./types/User.type"

let RootQuery = `
    type RootQuery {
        user(id: Int): User
    }
`

let SchemaDefinition = `
    schema {
        query: RootQuery
    }
`

export let Graph = makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, UserType],
    resolvers: {
        RootQuery: {
            user: (root, args, context, info) => {
                return {
                    id: 1
                }
            }
        }
    }
})