import styled from 'styled-components';
import media from 'styled-media-query';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    position: fixed;
    top: 0;
    left: -100vw;
    z-index: -1;
  
    max-width: 100vw;
    height: 100vh;
    margin-top: 0;
    background: var(--mediumBackground);
    padding: 4rem 5rem 4rem 1rem;
    
    box-shadow: none;

    overflow: scroll;
    transition: .5s ease left;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;

    &.openMenu {
      left: 0;
      box-shadow: 0 0 3rem 2rem rgba(0,0,0,0.3);
    }
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const MenuLinksItem = styled.li`
  padding-bottom: 0.5rem;

  a {
    display: block;
    padding: 0.5rem 0.75rem;

    font-size: 1rem;
    text-decoration: none;
    color: var(--texts);

    transition: color 0.2s;

    ${media.lessThan('large')`
      font-size: .875rem;
      padding: .5rem .75rem;
    `}
    &:hover {
      color: var(--highlight);
    }
    &.active {
      color: var(--postColor);
      font-weight: bold;
    }
  }

  &.categoryLinkWrapper {
    --colorMaster: ${props =>
      props.background ? props.background : 'var(--highlight)'};

    a {
      border-left: 0.25rem solid var(--colorMaster);

      &:hover {
        color: var(--colorMaster);
      }
    }
  }
`;

export const ContentMobile = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  z-index: 20;

  ${media.greaterThan('large')`
    display: none;
  `}

  a {
    color: var(--white);
    padding: 0.5rem;

    svg {
      width: 1.5rem;
    }
  }
`;

export const ButtonMobile = styled.button`
  color: var(--white);
  padding: 0.5rem;
  border: none;
  background: transparent;

  svg {
    width: 1.5rem;
  }
`;
