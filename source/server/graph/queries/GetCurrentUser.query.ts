import { GraphContext } from "../helpers/GraphContext"

export default async (root, args, context: GraphContext) => {
    
    if ( context.authenticated_user ) {

        // Query the user loader for the user
        return context.loaders.getUserLoader().load(context.authenticated_user)

    } else {
    
        return null

    }

}