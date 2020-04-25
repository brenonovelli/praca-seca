import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    margin-left: auto;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 1rem;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--highlight);
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`;

export const ContentMobile = styled.div`
  display: flex;
  align-items: center;

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
