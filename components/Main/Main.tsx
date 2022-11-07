import React from 'react';
import styles from '../../styles/Home.module.css';
import styled from '@emotion/styled';
import Link from 'next/link';

const MainContainer = styled.div`
  margin-top: 50px;
`

export default function Main() {
  return (
    <MainContainer>
       <div className={styles.grid}>
          <Link href="/government" className={styles.card}>
            <h2>
              Government &rarr;
            </h2>
            <p>Find in-depth information about Colonial Government and Colonies.</p>
          </Link>

          <Link href="/fleet" className={styles.card}>
            <h2>Fleet &rarr;</h2>
            <p>Learn about Colonial Fleet, Battlestars, military academy and service.</p>
          </Link>

          <Link
            href="/colonies"
            className={styles.card}
          >
            <h2>
              Colonies &rarr;
            </h2>
            <p>Discover the greatness of each of the twelve Colonies of Kobol.</p>
          </Link>

          <Link
            href="/cylons"
            className={styles.card}
          >
            <h2>Cylons &rarr;</h2>
            <p>
              Discover everything about the war with the Cylons, their tecnology and more.
            </p>
          </Link>
        </div> 
    </MainContainer>
  )
}
