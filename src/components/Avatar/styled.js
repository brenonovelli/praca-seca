import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const AvatarWrapper = styled.div``;

export const Avatar = styled(Img)`
  height: 3.75rem;
  width: 3.75rem;

  ${media.lessThan('large')`
    height: 1.875rem;
    width: 1.875rem;
    border-radius: 50%;
    background: var(--white);
  `}
`;
