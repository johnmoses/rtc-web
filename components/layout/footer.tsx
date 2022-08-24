import Link from 'next/link';
import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <nav className={styles.Footer__nav}>
        <ul className={styles.Footer__nav__items}>
          <li className={styles.Footer__nav__item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.Footer__nav__item}>
            <Link href="/meetings">Meetings</Link>
          </li>
          <li className={styles.Footer__nav__item}>
            <Link href="/users">Users</Link>
          </li>
          <li className={styles.Footer__nav__item}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h3>
        Copyright @2022 <a href="/">Me</a>
      </h3>
    </footer>
  );
};

export default Footer;
