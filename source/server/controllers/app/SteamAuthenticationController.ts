import { Path, GET, Response, Status, Context, VaderContext, QueryParam } from "@t2ee/vader"
import { stringify } from "qs"
import Axios from "axios"
import { contains } from "underscore"

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
            steam_openid_verification_parameters[`openid.${field}`] = field_value

        })

        let steam_url = `https://steamcommunity.com/openid/login`

        // Send a request to steam
        let response = await Axios.post(steam_url, stringify(steam_openid_verification_parameters))

        // Verify that the response was valid
        if ( response.data.includes("is_valid:true") ) {

            // The login was valid - redirect to the success page for the client app to handle
            return new Response()
                .status(Status.REDIRECT)
                .set("Location", `${process.env.ACTIVE_RUNTIME_URL}/app/auth/success`)
                .build()

        } else {

            // The login was not valid - redirect to the failed page
            return new Response()
                .status(Status.REDIRECT)
                .set("Location", `${process.env.ACTIVE_RUNTIME_URL}/app/auth/failure`)
                .build()

        }

    }

}