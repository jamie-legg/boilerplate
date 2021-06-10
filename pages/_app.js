import '../styles/globals.css'
import Layout from '../src/components/layout/Layout'
import Sidebar from '../src/components/sidebar/Sidebar'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider session={pageProps.session} >
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </Provider>
    </Layout>

  )
}

export default MyApp