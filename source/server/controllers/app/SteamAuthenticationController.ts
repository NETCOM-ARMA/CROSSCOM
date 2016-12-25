import { stringify } from "qs"
import Axios from "axios"
import { contains } from "underscore"
import { JWT } from "../../../shared/cryptography/JWT"
import { serialize } from "cookie"
import { Request, Response} from "express"

export abstract class SteamAuthenticationController {

    static async requestAuthentication(req: Request, res: Response) {
        
        // Configure a payload for the steam OpenID endpoint
        let steam_openid_configuration = {
            "openid.ns": "http://specs.openid.net/auth/2.0",
            "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
            "openid.identity":  "http://specs.openid.net/auth/2.0/identifier_select",
            "openid.mode":      "checkid_setup",
            "openid.return_to": `${process.env.ACTIVE_RUNTIME_URL}/auth/steam/return`,
            "openid.realm":     process.env.ACTIVE_RUNTIME_URL,
        }

        // Use the configuration as querystrings in the redirect url
        let steam_parameters = stringify(steam_openid_configuration)

        let steam_url = `https://steamcommunity.com/openid/login?${steam_parameters}`
        
        res
            .redirect(steam_url)

    }

    static async confirmAuthentication(req: Request, res: Response) {
            
        // Start a base object for the authentication check
        let steam_openid_verification_parameters = {
            "openid.ns": "http://specs.openid.net/auth/2.0",
            "openid.mode": "check_authentication",
            "openid.signed": req.query["openid.signed"],
            "openid.sig": req.query["openid.sig"]
        }

        // Extract all parameters referenced by the signed field
        let signed_field_names = req.query["openid.signed"].split(",")

        signed_field_names.forEach((field) => {

            let field_value = req.query[`openid.${field}`]

            // Add the value to the parameters
            steam_openid_verification_parameters[`openid.${field}`] = field_value

        })

        let steam_url = `https://steamcommunity.com/openid/login`

        // Send a request to steam
        let response = await Axios.post(steam_url, stringify(steam_openid_verification_parameters))

        // Verify that the response was valid
        if ( response.data.includes("is_valid:true") ) {

            // Extract the steamid from the claimed_id
            let claimed_id = /http:\/\/steamcommunity\.com\/openid\/id\/(.*)/g.exec(req.query["openid.claimed_id"])[1]

            // The authentication was valid - issue a JWT token confirming this information
            let access_token = await JWT.sign({
                steam_id: claimed_id
            }, process.env.AUTHENTICATION_TOKEN_SECRET)

            // The login was valid - redirect to the success page for the client app to handle
            res
                .redirect(`${process.env.ACTIVE_RUNTIME_URL}/app/auth/success?token=${access_token}`)

        } else {

            // The login was not valid - redirect to the failed page
            res
                .redirect(`${process.env.ACTIVE_RUNTIME_URL}/app/auth/failure`)

        }

    }

}