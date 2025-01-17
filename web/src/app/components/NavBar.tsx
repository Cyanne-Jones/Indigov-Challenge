'use client'

import Link from 'next/link';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        View Constituents
      </Link>
      <Link href="/add" className={styles.link}>
        Add Constituent
      </Link>
    </nav>
  )
}