import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  display: flex;

  max-width: 70rem;
  margin: 2rem auto;
`;

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  font-weight: 600;
  ${media.lessThan('large')`
    padding: 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
  &:hover {
    background: var(--borders);
  }
  &.previous {
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
