import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { NextPage } from 'next';
import Main from '../components/Main';
import Footer from '../components/Footer';
import LauraRoslinImage from '../components/images/lauraRoslin';
import NavBar from '../components/NavBar';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colonial Government Page</title>
        <meta name="description" content="Official page for the Colonial Government" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <NavBar />
      </nav>

      <header className={styles.header} >
        <LauraRoslinImage />
        <Header />
      </header>
      <main className={styles.main}>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default Home;
