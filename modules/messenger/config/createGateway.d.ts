import { SocketGateWays } from '@app/types/global';
export declare const createGateway: (gateway: SocketGateWays) => {
    namespace: SocketGateWays;
    cors: import("../../../config/types").CorsConfig;
    cookie: boolean;
};
