import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  display: inline-flex;

  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  padding: 0.5rem;

  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 1.25rem;
  height: 1.25rem;
`;
