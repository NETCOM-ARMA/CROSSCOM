import { UserStruct } from "./UserStruct"
import PGDriver from "../../sql/PGDriver"

export async function createOrRetrieveUserBySteamID(steamid: string): Promise<UserStruct> {

    // Create a new User with the given SteamID
    let created_user = await PGDriver.connection_pool.query(`
        WITH retrieve AS (
            SELECT id
            FROM users
            WHERE "steam_id" = $1
        ), insertion AS (
            INSERT INTO users ("steam_id")
            SELECT $1
            WHERE NOT EXISTS ( SELECT 1 FROM retrieve )
            RETURNING id
        )
        SELECT id FROM insertion
        UNION ALL
        SELECT id FROM retrieve
    `, [steamid])

    return {
        id: created_user.rows[0].id,
        steam_id: steamid
    }

}