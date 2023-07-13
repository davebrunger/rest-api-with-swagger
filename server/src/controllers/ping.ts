import {Get, Route} from "tsoa"

interface PingResponse {
    readonly message : string;
}

@Route("ping")
export default class PingController {
    @Get("/")
    public async getMessage() : Promise<PingResponse> {
        return {
            message : "pong"
        };
    }
}