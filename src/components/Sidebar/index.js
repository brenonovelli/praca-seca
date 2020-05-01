import React from 'react';

import Profile from '../Profile';
import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Sidebar = ({ mobileMenu }) => (
  <S.SidebarWrapper>
    <Profile />
    <MenuLinks mobileMenu={mobileMenu} />
  </S.SidebarWrapper>
);

export default Sidebar;
