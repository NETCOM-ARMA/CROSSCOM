
const RealismName = `
    # A RealismName is a representation of a fake first and last name that is believable and authentic though not necessarily genuine.
    # It is used by some of the more realistic group in lieu of a username.
    type RealismName {
        
        # The realistic first name of the User - some groups will abbreviate this to an initial.
        first: String

        # The realistic last name of the User
        last: String!

    }
`

export default () => [RealismName]