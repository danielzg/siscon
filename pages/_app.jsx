import Footer from '../components/footer'
import Header from '../components/header'

import '../styles/globals.scss'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return <section>
            <Header />
            <main>
            <Component {...pageProps} />
            </main>
            <Footer />
        </section> 
}

export default MyApp
