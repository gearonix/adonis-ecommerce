import {appConfig} from "@app/config/build/config";
import {CorsConfig} from "@app/config/types";

export const corsConfig: CorsConfig = {
    origin: appConfig.clientURL,
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: true
}
