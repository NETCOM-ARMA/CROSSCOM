import { createHash } from "crypto"

/**
 * A wrapper class for the SHA256 hash function.
 * 
 * Cannot be instantiated as it only exposes static methods.
 * 
 * @export
 * @abstract
 * @class SHA256
 */
export abstract class SHA256 {

    /**
     * Take a provided secret key and hash it using SHA256.
     * 
     * Will return a fixed Digest that is 256 bits or 32 bytes in length.
     * 
     * @static
     * @param {string} secret
     * @returns {string}
     * 
     * @memberOf SHA256
     */
    static hash(value: string): Buffer {

        // Create a SHA-256 hash of the provided value
        let hash = createHash("sha256").update(value)

        // Return the hash digest as a Buffer
        return hash.digest()

    }
    
}
