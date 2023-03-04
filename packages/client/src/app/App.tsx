import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Head from 'next/head'
import { AsyncAuthorization, AuthGuard, Layout } from './providers'
import store from './store/store'
import ThemeProvider from 'app/providers/Theme/ThemeProdiver'
import { useDevStore } from '../../dev/components/useDevStore'


const App = ({ Component, pageProps }: AppProps) => {
  useDevStore(store)
  return <>
    <Head>
      <title>Adonis</title>
    </Head>
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <AsyncAuthorization>
              <AuthGuard>
                <Component {...pageProps} />
              </AuthGuard>
            </AsyncAuthorization>
          </Layout>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  </>
}


export default App
