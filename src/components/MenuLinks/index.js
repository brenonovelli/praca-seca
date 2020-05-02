import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import categories from '../../utils/categories';
import getThemeColor from '../../utils/getThemeColor';
import links from './content';

import SocialLinks from '../SocialLinks';

import * as S from './styled';

const MenuLinks = ({ mobileMenu }) => {
  return (
    <S.MenuLinksWrapper className={mobileMenu && 'openMenu'}>
      <S.MenuLinksList>
        {categories.map(category => (
          <S.MenuLinksItem
            key={category.slug}
            className="categoryLinkWrapper"
            background={category.color}
          >
            <AniLink
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
              to={category.slug}
              activeClassName="active"
            >
              {category.title}
            </AniLink>
          </S.MenuLinksItem>
        ))}

        {links.map(link => (
          <S.MenuLinksItem key={link.label}>
            <AniLink
              cover
              direction="left"
              bg={getThemeColor()}
              duration={0.6}
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </AniLink>
          </S.MenuLinksItem>
        ))}

        <SocialLinks />
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
};

export default MenuLinks;
