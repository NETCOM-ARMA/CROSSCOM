import { Loaders } from "../../../shared/loaders/Loaders"

export class GraphContext {

    public loaders: Loaders

    public authenticated_user: number

    /**
     * Creates an instance of GraphContext.
     * 
     * @param {number} user_id The Authenticated User or null if none is set
     * 
     * @memberOf GraphContext
     */
    constructor(user_id: number) {

        this.loaders = new Loaders(user_id)
        this.authenticated_user = user_id

    }

}