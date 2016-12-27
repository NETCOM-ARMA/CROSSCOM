import { GraphContext } from "../helpers/GraphContext"

export default async (root, { 
    id
}, context: GraphContext) => {
    
    // Query the user loader for the user
    return context.loaders.getUserLoader().load(id)

}