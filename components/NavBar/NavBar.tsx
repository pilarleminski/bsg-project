import React from 'react';
import Link from 'next/link';
import ColonialSymbolImage from '../../components/images/colonialSymbol/ColonialSymbol';
import styles from '../../styles/Home.module.css';


export default function NavBar() {
  return (
    <div>
        <ul>  
          <li><Link href='/'> 
            <span className={styles.logo}>
                    <ColonialSymbolImage />
            </span></Link></li>
          <li><Link href='/civiliansLoginPage'>Civilians</Link></li>
          <li><Link href='/governmentLoginPage'>Government Personnel</Link></li>
          <li><Link href='/militaryLoginPage'>Military Personnel</Link></li>
        </ul>
    </div>
  )
}
