import React from 'react';
import { Bars } from 'styled-icons/fa-solid';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/';

import categories from '../../utils/categories';
import getThemeColor from '../../utils/getThemeColor';
import links from './content';

import * as S from './styled';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.ContentMobile>
      <S.MenuLinksLink
        to="/search/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        title="Pesquisar"
      >
        <Search />
      </S.MenuLinksLink>

      <S.ButtonMobile>
        <Bars />
      </S.ButtonMobile>
    </S.ContentMobile>

    <S.MenuLinksList>
      {links.map(link => (
        <S.MenuLinksItem key={link.label}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}

      {categories.map(category => (
        <S.MenuLinksItem key={category.slug}>
          <S.CategoryLink
            cover
            direction="left"
            background={category.color}
            duration={0.6}
            to={`segmento/${category.slug}`}
            activeClassName="active"
          >
            {category.title}
          </S.CategoryLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
