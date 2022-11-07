import React from 'react';
import styles from '../../styles/Home.module.css';
import Colonies from '../images/colonies/Colonies';

export default function Header() {
  return (
    <>
        <h1 className={styles.title}>
          <Colonies />
          Colonial Government
        </h1>
    </>
  )
}
