import * as DataLoader from "dataloader"
import { UserStruct } from "../connectors/users/UserStruct"
import { batchGetUsersById } from "../connectors/users/UserQueries"

export class UserLoader {

    private dataloader: DataLoader

    /**
     * Creates an instance of UserLoader.
     * 
     * The User ID provided at initialization will be used to provide permission gating
     * 
     * @param {number} user_id
     * 
     * @memberOf UserLoader
     */
    constructor(user_id: number) {

        this.dataloader = new DataLoader((keys) => {

            return batchGetUsersById(keys)

        })

    }

    /**
     * Load a User by CROSSCOM ID
     * 
     * @param {any} key
     * @returns {Promise<UserStruct>}
     * 
     * @memberOf UserLoader
     */
    load(key): Promise<UserStruct> {
        return this.dataloader.load(key)
    }

}