import { Pool } from "pg"

export class PGDriver {

    public connection_pool: Pool

    constructor() {

        // Instantiate a new connection
        this.connection_pool = new Pool(process.env.DATABASE_URL)

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