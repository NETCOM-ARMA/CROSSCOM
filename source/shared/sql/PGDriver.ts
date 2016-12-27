import { Pool } from "pg"
import { parse } from "url"

export class PGDriver {

    public connection_pool: Pool

    constructor() {

        let params = parse(process.env.DATABASE_URL),
            auth = params.auth.split(':')

        // Instantiate a new connection
        this.connection_pool = new Pool({
            user: auth[0],
            password: auth[1],
            host: params.hostname,
            port: parseInt(params.port),
            database: params.pathname.split('/')[1],
            ssl: JSON.parse(process.env.DATABASE_SSL)
        })

    }

    /**
     * Open the database connection
     * 
     * 
     * @memberOf PGDriver
     */
    connect() {

        return this.connection_pool.connect()

    }

    /**
     * Close the connection
     * 
     * 
     * @memberOf PGDriver
     */
    disconnect() {
    
        return this.connection_pool.end()

    }

}

export default new PGDriver()