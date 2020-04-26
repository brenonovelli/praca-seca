import React from 'react';
import PropTypes from 'prop-types';

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
}) => {
  const { color } = categories.find(item => item.title === category);

  return (
    <S.PostItemLink
      to={slug}
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
    >
      <S.PostItemWrapper>
        <S.PostCategories>
          <S.PostCategory background={color}>{category}</S.PostCategory>
          {subcategory && (
            <S.PostSubCategory color={color}>{subcategory}</S.PostSubCategory>
          )}
        </S.PostCategories>
        <S.PostItemInfo>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
          {tags && (
            <S.PostItemTags>
              {tags.map(item => item.length > 1 && <span>{item}</span>)}
            </S.PostItemTags>
          )}
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
