import { Path, GET, Response } from "@t2ee/vader"
import { Pug } from "../../../shared/rendering/PugDriver"

@Path("/app")
export class ApplicationController {

    CLIENT_ENVIRONMENT = {

    }

    @GET
    @Path("*")
    async renderApplication() {

        let body = Pug.renderTemplate("application/reactHost", {
            environment_payload: JSON.stringify(this.CLIENT_ENVIRONMENT)
        })

        return new Response()
            .status(200)
            .entity(body)
            .build()

    }

}