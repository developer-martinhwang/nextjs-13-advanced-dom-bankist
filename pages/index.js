/*
 * Copyright(c)2021 developer.martinhwang@gmail.com
 * All rights reserved.
 * Filename: Index.js
 * Key Options:
 * -
 * Revision History:
 * -
 */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Section_Btype from '../components/Section_Btype'
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
        <Section_Btype 
          style ={{padding: "2rem", backgroundColor: "#37383d"}}
          header = {{text: "Feature", style: {color:"var(--color-primary)", textTransform: "uppercase"}}}
          description = 
          {{text: '<p>The best day to join Bankist was one year ago. The second best is today!</p>',
            style: {color: "#fff"}
            }} 
        />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
