import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import GlobalStyles from '../../styles/global';
import * as S from './styled';

const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <S.LayoutWrapper>
      <GlobalStyles />

      <TransitionPortal level="top">
        <Sidebar mobileMenu={mobileMenu} />
      </TransitionPortal>

      <S.LayoutMain>{children}</S.LayoutMain>

      <TransitionPortal level="top">
        <MenuBar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      </TransitionPortal>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
