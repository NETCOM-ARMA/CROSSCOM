
const Localization = `
    # A localization represents a String table of the phrases used in the application.
    # CROSSCOM is built to be completely localized in order to support the wide array of units that exist in the ARMA community.
    # As such any string added to the application should be localized and 
    type Localization {
        
        # Errors and System Messages
        # These are shown by the User Interface in the case of malfunction or system instability
        errors_and_system_messages: ErrorLocalization

        # Menu Drawer Names
        # The names for the links within the menu drawer
        menu_drawer_links: MenuLocalization
    }
`

const ErrorLocalization = `
    # Localizations for errors or system issues that are shown to the user
    type ErrorLocalization {
        
        # 404 Error Page
        content_not_found_error_title: String
        content_not_found_error_body: String

    }
`

const MenuLocalization = `
    # Localizations for the main application menu drawer
    type MenuLocalization {
        
        # Authentication Display
        authenticated_as_prepend: String

        # Primary Links
        dashboard_link: String
        units_link: String
        operations_link: String
        
        # Signout Button
        signout_button_link: String

    }
`


export default () => [Localization, ErrorLocalization, MenuLocalization]