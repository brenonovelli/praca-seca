import React, { useEffect, useState } from 'react';

import {
  Bulb as Light,
  UpArrowAlt as Arrow,
} from 'styled-icons/boxicons-regular/';

import { Search } from 'styled-icons/material-rounded';

import { Home, Grid } from 'styled-icons/boxicons-solid/';
import { ThList as List } from 'styled-icons/typicons';
import { Bars } from 'styled-icons/fa-solid';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const MenuBar = ({ mobileMenu, setMobileMenu }) => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <AniLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Voltar para Home"
          className="anilink"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </AniLink>
        <AniLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar"
          className="anilink"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </AniLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="menu"
        >
          <Bars />
        </S.MenuBarItem>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        {/* Display */}
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        {/* Theme */}
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        {/* Top */}
        <S.MenuBarItem
          title="Ir para o Topo"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
