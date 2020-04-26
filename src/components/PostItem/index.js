import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const PostItem = ({ slug, background, category, title, description, tags }) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background} title={title}>
        {category}
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostCategory>Praça Seca</S.PostCategory>
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

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PostItem.defaultProps = {
  background: 'var(--highlight)',
};

export default PostItem;
