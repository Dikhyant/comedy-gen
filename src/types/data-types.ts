export interface IJokeResponse {
    "error": boolean,
    "category": string,
    "type": string, // single | twopart
    "joke": string,
    "setup": string,
    "delivery": string,
    "flags": {
        "nsfw": boolean,
        "religious": boolean,
        "political": boolean,
        "racist": boolean,
        "sexist": boolean,
        "explicit": boolean
    },
    "id": number,
    "safe": boolean,
    "lang": string
}