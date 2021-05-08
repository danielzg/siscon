import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Sistema de Controle</title>
      </Head>

      <main className={styles.main}></main>
    </section>
  )
}
