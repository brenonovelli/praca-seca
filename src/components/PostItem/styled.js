import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#list & {
    border-bottom: var(--borders) 1px solid;
  }

  body#grid & {
    background-color: var(--background);
  }

  > section {
    > div {
      transition: color ease 0.2s;
    }
  }

  &:hover {
    > section {
      > div {
        color: var(--highlight);
      }
    }
  }
`;

export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  padding: 2rem 1rem;

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem;
  `}

  body#grid & {
    border: none;
    padding: 1.75rem 1.5rem;
    justify-content: flex-start;
    align-items: flex-start;

    ${media.lessThan('large')`
      padding: 1rem;
    `}
  }
`;

export const PostCategories = styled.header`
  display: flex;
  align-items: center;
  flex-flow: wrap;

  font-size: 0.875rem;

  margin-bottom: 0.5rem;

  > div {
    white-space: nowrap;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
  }
`;

export const PostCategory = styled.div`
  background: ${props =>
    props.background ? props.background : 'var(--highlight)'};
  color: var(--white);

  font-weight: 500;

  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
`;

export const PostSubCategory = styled.div`
  color: ${props => (props.color ? props.color : 'var(--texts)')};
`;

export const PostItemInfo = styled.div``;

export const PostItemTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;

  color: var(--postColor);

  body#grid & {
    line-height: 1.1;
    margin: 0 0 0.5rem;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.2;
`;

export const PostItemTags = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  flex-flow: wrap;

  span {
    background: var(--mediumBackground);
    font-size: 0.75rem;
    padding: 0.15rem 0.25rem;
    margin: 0 0.25rem 0.25rem 0;
    border-radius: 0.25rem;
  }
`;
