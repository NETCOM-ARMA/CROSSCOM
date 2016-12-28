import { GraphContext } from "../helpers/GraphContext"
import Localizations from "../../../../resources/localizations/Localizations"

export default async (root, {
    locale
}, context: GraphContext) => {
    
    // Query the user loader for the user
    return Localizations[locale] ? Localizations[locale] : Localizations["en"]

}