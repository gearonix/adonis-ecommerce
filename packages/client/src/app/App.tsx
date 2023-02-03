import type {AppProps} from 'next/app'
import Layout from "./providers/Layout";
import {Provider} from "react-redux";
import AuthGuard from './providers/AuthGuard'
import AsyncAuthorization from "app/providers/AsyncAuthorization";
import wrapper from './redux/store';
import {GoogleOAuthProvider} from '@react-oauth/google';
//TODO: remove this
const googleClientId = '329001787710-gs0jm4icnclbjsn3k40a9eu84ikiltca.apps.googleusercontent.com'


const App = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    return <GoogleOAuthProvider clientId={googleClientId}>
        <Provider store={store}>
            <Layout>
                <AsyncAuthorization>
                    <AuthGuard>
                        <Component {...props.pageProps} />
                    </AuthGuard>
                </AsyncAuthorization>

            </Layout>
        </Provider>
    </GoogleOAuthProvider>
}


export default App
