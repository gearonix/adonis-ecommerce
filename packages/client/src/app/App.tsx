import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Head from 'next/head'
import {
  AuthProvider, AuthGuard, Layout, StoreProvider, ThemeProvider,
  ErrorBoundary
} from './providers'
import 'shared/config/i18n'
import { WithNotifications } from 'app/providers/Notifications'


const App = ({ Component, pageProps }: AppProps) => {
  return <>
    <Head>
      <title>Adonis</title>
    </Head>
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
      <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <Layout>
              <AuthProvider>
                <AuthGuard>
                  <WithNotifications/>
                  <Component {...pageProps} />
                </AuthGuard>
              </AuthProvider>
            </Layout>
          </ThemeProvider>
        </ErrorBoundary>
      </StoreProvider>
    </GoogleOAuthProvider>
  </>
}


export default App
