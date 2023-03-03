import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Head from 'next/head'
import { AuthProvider, AuthGuard, Layout, StoreProvider, ThemeProvider } from './providers'
import store from './store/store'
import { useEffect } from 'react'


const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (window) {
      // @ts-ignore
      window.s = process.env.IS_DEV ? store.getState : null
    }
  }, [])

  return <>
    <Head>
      <title>Adonis</title>
    </Head>
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
      <StoreProvider>
        <ThemeProvider>
          <Layout>
            <AuthProvider>
              <AuthGuard>
                <Component {...pageProps} />
              </AuthGuard>
            </AuthProvider>
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </GoogleOAuthProvider>
  </>
}


export default App
