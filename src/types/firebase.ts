export interface ErrorRequest {
    "error": {
      "code": number,
      "message": string,
      "errors": {
        "message": string,
        "domain": string,
        "reason": string
      }[]
    }
}