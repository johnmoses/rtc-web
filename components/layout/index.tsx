import Footer from './footer';
import React, { useContext } from 'react';
import Head from 'next/head';
import Header from './header';
import { AppContext } from 'context/AppContext';

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout = ({ title, description, children }: LayoutProps) => {
  const { state } = useContext(AppContext);
  return (
    <div className={state.appTheme}>
      <Head>
        {title ? <title>{title}</title> : <title>RTC app</title>}
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
