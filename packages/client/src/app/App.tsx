import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {GoogleOAuthProvider} from '@react-oauth/google'
import Head from 'next/head'
import {AsyncAuthorization, AuthGuard, Layout} from './providers'
import store from './redux/store'
import {useEffect} from 'react'


const App = ({Component, pageProps}: AppProps) => {
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
      <Provider store={store}>
        <Layout>
          <AsyncAuthorization>
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          </AsyncAuthorization>
        </Layout>
      </Provider>
    </GoogleOAuthProvider>
  </>
}


export default App
