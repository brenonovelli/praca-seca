import React from 'react';

import categories from '../../utils/categories';
import getThemeColor from '../../utils/getThemeColor';
import links from './content';

import * as S from './styled';

const MenuLinks = ({ mobileMenu }) => {
  return (
    <S.MenuLinksWrapper className={mobileMenu && 'openMenu'}>
      <S.MenuLinksList>
        {categories.map(category => (
          <S.MenuLinksItem key={category.slug} className="categoryLinkWrapper">
            <S.CategoryLink
              cover
              direction="left"
              bg={getThemeColor()}
              background={category.color}
              duration={0.6}
              to={category.slug}
              activeClassName="active"
            >
              {category.title}
            </S.CategoryLink>
          </S.MenuLinksItem>
        ))}

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
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  );
};

export default MenuLinks;
