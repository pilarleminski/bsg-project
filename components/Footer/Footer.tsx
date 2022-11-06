import React from 'react';
import styles from '../../styles/Home.module.css';
import ColonialSymbolImage from '../../components/images/colonialSymbol/ColonialSymbol';

export default function Footer() {
  return (
    <>
        <footer className={styles.footer}>
            <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
            >
          <span className={styles.logo}>
                <ColonialSymbolImage />
          </span>
        </a>
      </footer>
    </>
  )
}
