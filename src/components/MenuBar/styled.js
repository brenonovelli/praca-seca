import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0.8rem 0;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-child):not(:last-child) {
    border-top: var(--borders) 1px solid;
  }

  &:last-child {
    margin-top: auto;
  }
`;

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan('large')`
      display: none;
    `}
  }
  ${media.greaterThan('large')`
    &:hover {
      color: var(--highlight);
    }
  `}
`;
