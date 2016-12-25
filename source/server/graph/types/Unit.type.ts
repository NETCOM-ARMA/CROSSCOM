
const UnitMembership = `
    # A Unit is the primary construct of the CROSSCOM platform.
    # It represents a group on the platform and includes their particular set of game preferences, their members and their settings.
    # Groups are also vessels of account credit and a required mechanism for users to play in Joint Operations.
    type Unit {

        # The Unique ID of the Unit
        id: Int!

    }
`

export default () => [UnitMembership]