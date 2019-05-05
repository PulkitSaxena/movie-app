/**
 * Creates and returns a clone of JSON object
 * @param value 
 */

export function clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value))
}