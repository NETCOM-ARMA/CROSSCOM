import Unit from "./Unit.type"
import User from "./User.type"

const UnitMembership = `
    # A Unit Membership represents the relationship between a single User and a single Unit.
    # Being in this array does not necessarily mean that the User is a member of the Unit just that they have applied to be one.
    type UnitMembership {

        # A reference to the Unit object related to this entry
        unit: Unit

        # A reference to the User object related to this entry
        user: User

        # Reports the state of the User's attempt to join this Unit
        # The current possible values are:
        #   * applied - The user has an active application to the group
        #   * accepted - The user has been accepted into the group
        #   * denied - The user has been denied access to this group and will be unable to reapply in the future 
        application_state: String

        # Reports the user's permission level relative to this group.
        # This affects the User's ability to create Operations, allocate server credits and manage members.
        # The current possible values are:
        #   * owner - The user is the active owner of the group
        #   * administrator - The user is an administrator of the group allowing them to manage all aspects of the group as though they were an owner
        #   * officer - The user is a leader of the group who is able to schedule Joint Operations and commission server resources, but is not able to 
        #   * member - The member is a member of a group who has no special access beyond that provided to all members
        #   * discharged - The member has previously been in this group and has ended their relationship with the unit amicably.
        #   * banned - The member has previously been in this group and has ended their relationship unamicably.
        membership_level: String

    }
`

export default () => [UnitMembership, Unit, User]