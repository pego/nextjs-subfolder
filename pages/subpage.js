import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Subfolder Project Subpage
        </h1>

        <div className={styles.description}>
         <ul>
         <li><Link href="/">Link to root project root page</Link></li>
         <li><Link href="/subfolder/subpage">Link to subfolder project sub page</Link></li>
         </ul>
        </div>
      </main>
    </div>
  )
}
