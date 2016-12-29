import UnitMembership from "./UnitMembership.type"

const User = `
    # A User represents a registered member of the CROSSCOM platform.
    # This person has not yet necessarily joined a MILSIM unit or units however.
    type User {
        # The Unique ID of the User on CROSSCOM
        id: Int!

        # The Steam ID of the User
        steam_id: String!

        # The chosen Username of the User
        # This is a display name which would not be used in a realism group.
        # For example AJCStriker is a gamer tag whilst Alexander Striker is a realism name.
        username: String

        # The Simulated name of the User 
        # This is a realism appropriate name - for example Alexander Striker.
        # Please note that this is not necessarily the User's real name and should not be treated as such
        realism_name: RealismName

        # Represents if the User has completed onboarding
        # Set after the User has completed the setup process
        is_onboarded: Boolean!

        # An array of objects describing the User's membership of various units on the platform
        units: [UnitMembership]
    }
`

export default () => [User, UnitMembership]