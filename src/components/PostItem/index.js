import React from 'react';
import PropTypes from 'prop-types';

import { ChevronRight, PhoneAlt } from 'styled-icons/fa-solid/';
import { Whatsapp } from 'styled-icons/fa-brands/';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import categories from '../../utils/categories';
import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const PostItem = ({
  slug,
  category,
  subcategory,
  title,
  description,
  tags,
  telefone,
  whatsapp,
  isGenericList,
}) => {
  const { color, slug: slugCategory } = categories.find(
    item => item.title === category
  );

  return (
    <S.PostItem colorCategory={color}>
      <S.PostItemWrapper>
        {/* Header */}
        <S.PostItemHeader>
          <S.PostItemCategories>
            {isGenericList && (
              <>
                <S.PostCategory>
                  <AniLink
                    to={slugCategory}
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.6}
                  >
                    {category}
                  </AniLink>{' '}
                  <ChevronRight />
                </S.PostCategory>
              </>
            )}

            <S.PostSubCategory isGenericList={isGenericList}>
              {subcategory || 'Geral'}
            </S.PostSubCategory>
          </S.PostItemCategories>

          <AniLink
            to={slug}
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
          >
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemDescription>{description}</S.PostItemDescription>
          </AniLink>
          {/* Tags */}
          {tags && tags[0].length > 1 && (
            <S.PostItemInfos>
              {tags.map(
                item =>
                  item.length > 1 && <S.PostTag key={item}>{item}</S.PostTag>
              )}
            </S.PostItemInfos>
          )}
        </S.PostItemHeader>
        {/* Actions */}
        <S.Actions>
          {telefone && (
            <S.ActionItem
              href={`tel:${telefone}`}
              title="Phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneAlt />
              {telefone}
            </S.ActionItem>
          )}
          {whatsapp && (
            <S.ActionItem
              href={`https://api.whatsapp.com/send?phone=55${whatsapp}&text=Olá,%20vi%20seu%20negócio%20no%20Guia%20Praça%20Seca%20e%20gostaria%20de%20mais%20informações.`}
              title="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <Whatsapp />
              WhatsApp
            </S.ActionItem>
          )}
        </S.Actions>
      </S.PostItemWrapper>
    </S.PostItem>
  );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isGenericList: PropTypes.bool,
};

PostItem.defaultProps = {
  isGenericList: false,
};

export default PostItem;
