import { sign, verify } from "jsonwebtoken"
import { SHA256 } from "./SHA256"
import * as Bluebird from "bluebird"
import { hostname } from "os"

/**
 * A Wrapper class around the JSON Web Token functions.
 * 
 * Class is marked abstract to prevent instantiation due to all methods being statics.
 * 
 * @export
 * @class JWT
 */
export abstract class JWT {

    /**
     * Settings passed into the JWT driver to generate JWT.
     * 
     * @private
     * @static
     * @type {Object}
     * @memberOf JWT
     */
    private static SignatureSettings: Object = {
        algorithm: "HS256",
        issuer: hostname(),
        expiresIn: "7d"
    }

    /**
     * Settings passed into the JWT driver to verify the authenticity of the JWT.
     * 
     * @private
     * @static
     * @type {Object}
     * @memberOf JWT
     */
    private static VerificationSettings: Object = {
        algorithm: "HS256"
    }

    /**
     * Sign the payload with the secret key provided using JWT HS256. 
     * 
     * @static
     * @param {Object} payload The JSON object that comprises the token payload
     * @param {string} secret_key The secret key string which signs the token
     * @returns {Bluebird<string>}
     * 
     * @memberOf JWT
     */
    static sign(payload: Object, secret_key: string): Bluebird<string> {

        // Hash the key using SHA256 to ensure key length
        let key_buffer: Buffer = SHA256.hash(secret_key)

        // Create a new Promise for the signature request 
        let response_promise: Bluebird<string> =  new Bluebird<string>((resolve, reject) => {

            // Call the underlying JWT driver to sign the request - pass in the provided payload alongside the standardized settings array
            sign(payload, key_buffer, JWT.SignatureSettings, (error, token) => {
                
                /*
                 The error case is not handled due to the fact that no error can occur in this subsystem 
                  as a result of using a SHA256 hash as a key.
                */

                // Pass the resulting token to the promise handler
                resolve(token)

                // End the request execution
                return

            })

        })

        // Return the created promise
        return response_promise

    }

    /**
     * Verify and decrypt the JWT token provided as well as validating it against the secret_key provided
     * 
     * @static
     * @param {string} token The JSON Web Token to be decrypted
     * @param {string} secret_key The secret key which signs the token
     * @returns {Bluebird<Object>}
     * 
     * @memberOf JWT
     */
    static verify(token: string, secret_key: string): Bluebird<Object> {

        // Hash the key using SHA256 to ensure key length
        let key_buffer: Buffer = SHA256.hash(secret_key)

        // Create a new Promise to wrap the verification request
        let response_promise = new Bluebird<Object>((resolve, reject) => {

            // Call the underlying JWT driver to verify the token
            verify(token, key_buffer, JWT.VerificationSettings, (error, result) => {

                if ( error ) {

                    // If there was an error throw it to the promise
                    reject(error)

                    // Return the function
                    return

                } else {

                    // Otherwise return the result to the promise
                    resolve(result)

                    // Return the function to prevent onwards execution
                    return

                }

            })

        })

        // Return the created promise
        return response_promise

    }

}