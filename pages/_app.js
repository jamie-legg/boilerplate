import '../styles/globals.css'
import Layout from '../src/components/layout/Layout'
import Sidebar from '../src/components/sidebar/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </Layout>

  )
}

export default MyApp