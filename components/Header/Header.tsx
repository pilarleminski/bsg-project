import React from 'react';
import styles from '../../styles/Home.module.css';
import ColonialSymbolImage from '../images/colonialSymbol/ColonialSymbol';
import Colonies from '../images/colonies/Colonies';
import LauraRoslinImage from '../images/lauraRoslin/LauraRoslin';

export default function Header() {
  return (
    <>
 
        <h1 className={styles.title}>
          <Colonies />
          Colonial Government
          <ColonialSymbolImage />
        </h1>
    </>
  )
}
