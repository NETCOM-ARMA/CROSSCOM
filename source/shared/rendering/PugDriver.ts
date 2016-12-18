import { compileFile } from "pug"

export class PugDriver {

    renderTemplate(template_name: string, data: any) {

        let template = compileFile(`${process.cwd()}/resources/templates/${template_name}.pug`, {
            cache: process.env.PUG_CACHE_ENABLED || false
        })

        return template(data)

    }

}

export let Pug = new PugDriver()