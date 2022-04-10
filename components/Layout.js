import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Layout({ Component, pageProps }) {
  return (
    <div className={styles.container} data-theme="corporate">
      <Head>
        <title>DEWS</title>
        <meta name="description" content="Decentralised News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
