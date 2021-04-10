import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Nav />
        <Header />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
