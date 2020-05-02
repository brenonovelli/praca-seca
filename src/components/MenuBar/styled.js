import styled from 'styled-components';
import media from 'styled-media-query';

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
    position: fixed;
    bottom: 0;
    left: 0;
    background: var(--highlight);

    flex-direction: row;
    height: 3rem;
    width: 100vw;
    padding: 0 1rem;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;

  ${media.lessThan('large')`
    justify-content: space-around;
    width: 100%;
  `}

  ${media.greaterThan('large')`
    flex-direction: column;

    &:last-child {
      height: 100%;
      border-top: var(--borders) 1px solid;
      span:last-child {
        margin-top: auto;
      }
    }
  `}

  .anilink {
    display: block;

    &.active {
      span {
        color: var(--highlight);
      }
    }
  }
`;

export const MenuBarItem = styled.span`
  cursor: pointer;
  display: block;
  padding: 0.25rem;
  position: relative;
  color: var(--white);

  ${media.lessThan('large')`
    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  `}

  &.display {
    ${media.lessThan('large')`
      display: none;
    `}
  }

  &.menu {
    ${media.greaterThan('large')`
      display: none;
    `}
  }

  ${media.greaterThan('large')`
    height: 3.75rem;
    width: 3.75rem;
    padding: 1.1rem;
    color: var(--texts);

    &:hover {
      color: var(--highlight);
    }

    &:hover {
      color: var(--highlight);
    }
  `}
`;
