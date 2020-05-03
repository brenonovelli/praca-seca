import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Header = styled.header`
  color: var(--texts);
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
    font-weight: 400;
    line-height: 1.25;

    a {
      color: var(--texts);
      transition: color 0.2s ease;

      &:hover {
        color: var(--highlight);
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 60rem;
  width: 100%;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  margin: 1rem auto;
  padding: 0 1rem;

  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  `}
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
    box-shadow: none;

    background: var(--mediumBackground);

    color: var(--texts);
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;

    position: relative;

    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:after {
      content: '';
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);

      width: 0;
      height: 0.25rem;
      opacity: 0;

      border-radius: 0.25rem;

      background: var(--colorMaster);
    }

    &:hover {
      box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.03);
      background: var(--background);
      color: var(--postColor);

      svg {
        color: var(--postColor);
      }

      &:after {
        width: 50%;
        opacity: 1;
      }
    }
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  svg {
    width: 2.5rem;
    color: var(--texts);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
