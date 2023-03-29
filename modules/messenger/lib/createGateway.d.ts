import { SocketPaths } from '@app/types/global';
export declare const createGateway: (path: SocketPaths) => {
    cors: boolean;
    transports: string[];
    path: SocketPaths;
};
