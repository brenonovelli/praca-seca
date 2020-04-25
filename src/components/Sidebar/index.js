import React from 'react';

import Profile from '../Profile';
import Avatar from '../Avatar';
import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Avatar />

    <Profile />
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
