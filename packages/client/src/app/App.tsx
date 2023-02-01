import type {AppProps} from 'next/app'
import Layout from "./providers/Layout";
import {Provider} from "react-redux";
import AuthGuard from './providers/AuthGuard'
import AsyncAuthorization from "app/providers/AsyncAuthorization";
import wrapper from './redux/store';

const App = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    return <Provider store={store}>
        <Layout>
            <AsyncAuthorization>
                <AuthGuard>
                    <Component {...props.pageProps} />
                </AuthGuard>
            </AsyncAuthorization>

        </Layout>
    </Provider>
}


export default App
