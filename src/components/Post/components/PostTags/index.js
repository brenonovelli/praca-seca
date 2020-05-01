import React from 'react';
import { Hashtag } from 'styled-icons/heroicons-solid';

import * as S from './styled';

const PostTags = ({ tags, color }) =>
  tags &&
  tags[0].length > 1 && (
    <S.TagsWrapper color={color}>
      {tags.map(
        tag =>
          tag.length > 1 && (
            <S.Tag key={tag}>
              <Hashtag /> {tag}
            </S.Tag>
          )
      )}
    </S.TagsWrapper>
  );
export default PostTags;
