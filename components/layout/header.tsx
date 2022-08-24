import { Button } from 'components/button';
import { AppContext } from 'context/AppContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './header.module.scss';

const Header = () => {
  const { state, signout } = useContext(AppContext);
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>
        <Link href="/">Home</Link>
      </h1>
      <nav className={styles.Header__nav}>
        <ul className={styles.Header__nav__items}>
          <li className={styles.Header__nav__item}>
            <Link href="/signin">Sign in</Link>
          </li>
          <li className={styles.Header__nav__item}>
            <Link href="/signup">Sign up</Link>
          </li>
          <li className={styles.Header__nav__item}>
            <Link href="/users/me">Me</Link>
          </li>
          <li className={styles.Header__nav__item}>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Button
              className="decorated"
              size="default"
              onClick={() => {
                signout();
              }}>
              Sign out
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
