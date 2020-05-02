import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { lighten } from 'polished';

export const Header = styled.header`
  color: var(--postColor);
  margin: 0 auto;
  padding: 3rem 1.4rem 0;
  max-width: 60rem;

  ${media.lessThan('large')`
    padding: 0 1rem;
    max-width: 100%;
  `}

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 0.5rem;

    ${media.lessThan('large')`
      font-size: 1.5rem;
      line-height: 1.1;
      margin: .25rem auto;
    `}
  }

  p {
    font-size: 1rem;
    color: var(--texts);
    font-weight: 300;
    line-height: 1.25;
  }
`;

export const Main = styled.main`
  max-width: 60rem;
  margin: 0 auto;
`;

export const SearchBox = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;
  padding: 0 1rem;
  margin: 1rem;
  border: 1px solid var(--borders);
  border-radius: 0.25rem;

  background: var(--mediumBackground);
  color: var(--texts);
  font-size: 1rem;
  text-decoration: none;

  svg {
    width: 1.5rem;
    color: var(--texts);
  }
`;

export const CategoriesList = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  margin: 1rem auto;
  padding: 0 1rem;
`;

export const Category = styled.li`
  --colorMaster: ${props =>
    props.background ? props.background : 'var(--highlight)'};

  list-style: none;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 8rem;
    padding: 1rem;

    border-radius: 0.5rem;

    background: var(--colorMaster);

    color: var(--white);
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  svg {
    width: 2.5rem;
    color: var(--white);
  }
`;
