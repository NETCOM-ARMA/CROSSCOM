import { Pug } from "../../../shared/rendering/PugDriver"
import { Request, Response } from "express"

const CLIENT_ENVIRONMENT = {

}

export abstract class ApplicationController {

    static async renderApplication(req: Request, res: Response) {

        let body = Pug.renderTemplate("application/reactHost", {
            environment_payload: JSON.stringify(CLIENT_ENVIRONMENT)
        })

        res
            .status(200)
            .send(body)

    }

}