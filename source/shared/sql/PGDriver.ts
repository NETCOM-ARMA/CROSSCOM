import "reflect-metadata"
import { createConnection } from "typeorm"

export class PGDriver {

    constructor(connection_url: string) {

        // Create a new connection
        return createConnection({
            driver: {
                type: "postgres",
                url: connection_url
            },
            autoMigrationsRun: false,
            autoSchemaSync: false,
            entities: [
                
            ]
        })

    }

}