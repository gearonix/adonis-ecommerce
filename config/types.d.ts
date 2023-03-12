export interface AppConfig {
    PORT: number;
    globalPrefix: string;
    appName: string;
    appVersion: string;
    docsPrefix: string;
    privateKey: string;
    socketPort: number;
}
export interface CorsConfig {
    origin: string;
    methods: string[];
    credentials: boolean;
}
