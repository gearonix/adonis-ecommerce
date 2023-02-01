import type {AppProps} from 'next/app'
import Layout from "./providers/Layout";
import {Provider} from "react-redux";
import store from './redux/store'
import AuthGuard from './providers/AuthGuard'

const App = ({Component, pageProps}: AppProps) => {
    return <Provider store={store}>
        <Layout>
            <AuthGuard>
                <Component {...pageProps} />
            </AuthGuard>
        </Layout>
    </Provider>
}


export default App
