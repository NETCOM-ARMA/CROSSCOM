import { UserStruct } from "./UserStruct"
import PGDriver from "../../sql/PGDriver"
import { map, find } from "underscore"

export async function getUserBySteamID(steamid: string): Promise<UserStruct> {

    // Query the User in the datastore
    let queryResult = await PGDriver.connection_pool.query(`
        SELECT * FROM users
        WHERE steam_id = $1
        LIMIT 1
    `, [steamid])

    let result = queryResult.rows[0]

    return {
        id: result.id,
        steam_id: result.steam_id    
    }

}

export async function batchGetUsersById(ids: string[]): Promise<UserStruct> {

    let queryResult = await PGDriver.connection_pool.query(`
        SELECT * FROM users
        WHERE id = ANY($1::int[])
    `, [ids])

    // Iterate over the query result and return the result for each id
    let results = queryResult.rows

    return map(ids, (id) => {

        // Filter the array to find the corresponding result
        let matching_entry = find(results, (r) => r.id === id)

        if ( matching_entry ) {

            return {
                id: matching_entry.id,
                steam_id: matching_entry.steam_id,
                email_address: matching_entry.email_address,
                email_verified: matching_entry.email_verified
            } as UserStruct

        } else {
            return null
        }

    })

}