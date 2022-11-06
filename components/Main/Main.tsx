import React from 'react';
import styles from '../../styles/Home.module.css';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  margin-top: 50px;
`

export default function Main() {
  return (
    <MainContainer>
       <div className={styles.grid}>
          <a href="/government" className={styles.card}>
            <h2>
              Government &rarr;
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
    </MainContainer>
  )
}
