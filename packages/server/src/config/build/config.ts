import { AppConfig } from '@app/config/types'

export const appConfig: AppConfig = {
  PORT: 6868,
  globalPrefix: 'adonis/api',
  appName: 'Adonis API',
  appVersion: '1.0.0',
  docsPrefix: '/api/docs',
  privateKey: '1b94326c',
  serverUrl: process.env.SERVER_URL || 'http://localhost:6868',
  socketPort: 9090
}
