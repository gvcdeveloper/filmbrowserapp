import React from 'react';
import './layout.scss';
import logoDark from '../../assets/images/logo/logo-dark.svg';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="layout">
      <Header imgLogo={logoDark} width="80px" />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
