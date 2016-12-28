import { makeExecutableSchema } from "graphql-tools"

import RealismName from "./types/RealismName.type"
import UserType from "./types/User.type"
import UnitType from "./types/Unit.type"
import UnitMembership from "./types/UnitMembership.type"
import Localization from "./types/Localization.type"

import GetUserQuery from "./queries/GetUser.query"
import GetCurrentUserQuery from "./queries/GetCurrentUser.query"
import GetLocalizationQuery from "./queries/GetLocalization.query"

let RootQuery = `
    type RootQuery {
        user(id: Int!): User
        currentUser: User
        localization(locale: String!): Localization
    }
`

let SchemaDefinition = `
    schema {
        query: RootQuery
    }
`

export let Graph = makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, RealismName, UserType, UnitType, UnitMembership, Localization],
    resolvers: {
        RootQuery: {
            user: GetUserQuery,
            currentUser: GetCurrentUserQuery,
            localization: GetLocalizationQuery
        }
    }
})