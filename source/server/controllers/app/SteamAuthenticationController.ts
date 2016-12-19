import { Path, GET, Response, Status, Context, VaderContext, QueryParam } from "@t2ee/vader"
import { stringify } from "qs"
import Axios from "axios"

@Path("/auth/steam")
export class SteamAuthenticationController {

    @GET
    @Path("/request")
    async requestAuthentication() {
        
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
        
        return new Response()
            .status(Status.REDIRECT)
            .set("Location", steam_url)
            .build()

    }

    @GET
    @Path("/return")
    async confirmAuthentication(
        @QueryParam("openid.signed")
        signed_fields: string,

        @QueryParam("openid.sig")
        signature: string,

        @Context()
        context
    ) {
            
        // Start a base object for the authentication check
        let steam_openid_verification_parameters = {
            "openid.ns": "http://specs.openid.net/auth/2.0",
            "openid.mode": "check_authentication",
            "openid.signed": signed_fields,
            "openid.sig": signature
        }

        // Extract all parameters referenced by the signed field
        let signed_field_names = signed_fields.split(",")

        signed_field_names.forEach((field) => {

            let field_value = context.query[`openid.${field}`]

            // Add the value to the parameters
            steam_openid_verification_parameters[field] = field_value

        })

        let steam_url = `https://steamcommunity.com/openid/login`

        // Send a request to steam
        let response = await Axios.post(steam_url, steam_openid_verification_parameters)

        console.log(response)

    }

}