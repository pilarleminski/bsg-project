import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ColonialSymbolImage from '../components/images/colonialSymbol/ColonialSymbol';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colonial Government Page</title>
        <meta name="description" content="Official page for the Colonial Government" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Colonial Government
        </h1>

        <p className={styles.description}>
          Get started by choosing bellow
        </p>

        <div className={styles.grid}>
          <a href="/government" className={styles.card}>
            <h2>
              Government &rarr;
              <ColonialSymbolImage />
            </h2>
            <p>Find in-depth information about Colonial Government and Colonies.</p>
          </a>

          <a href="/fleet" className={styles.card}>
            <h2>Colonial Fleet &rarr;</h2>
            <p>Learn about Colonial Fleet, Battlestars, military academy and service.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>
              Colonies &rarr;
            </h2>
            <p>Discover the greatness of each of the twelve Colonies of Kobol.</p>
          </a>

          <a
            href="/cylons"
            className={styles.card}
          >
            <h2>Cylons &rarr;</h2>
            <p>
              Discover everything about the war with the Cylons, their tecnology and more.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
