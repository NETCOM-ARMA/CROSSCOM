
export interface UserStruct {

    /**
     * Database ID of the User
     * 
     * @type {number}
     * @memberOf UserStruct
     */
    readonly id: number

    /**
     * The SteamID of the User
     * 
     * @type {string}
     * @memberOf UserStruct
     */
    steam_id: string

    /**
     * The selected contact email address for the User
     * 
     * @type {string}
     * @memberOf UserStruct
     */
    email_address?: string

    /**
     * Denotes if the user has verified their email. 
     * 
     * This must be checked prior to sending any email to the user to prevent spam abuse.
     * 
     * @type {boolean}
     * @memberOf UserStruct
     */
    email_verified?: boolean

    /**
     * The User's settings that relate to appearance and profile.
     * 
     * @memberOf UserStruct
     */
    profile?: {

        /**
         * A unique screen name or gamer tag which the player would like to use in non realism settings
         * 
         * @type {string}
         */
        username?: string

        /**
         * Settings and values related to the player's appearance in Military Realism environments
         * 
         */
        realism?: {
            /**
             * The simulated first name of the User
             * 
             * @type {string}
             */
            first_name?: string

            /**
             * The simulated last name of the User
             * 
             * @type {string}
             */
            last_name?: string
        }
    }


}