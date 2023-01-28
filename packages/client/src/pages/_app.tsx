import type {AppProps} from 'next/app'
import Layout from "app/Layout";
import 'app/css/globals.scss'


const App = ({Component, pageProps}: AppProps) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}


export default App
