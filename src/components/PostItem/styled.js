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
    padding: 1rem 1rem .5rem;
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

export const PostItemInfo = styled.div``;

export const PostItemTitle = styled.h1`
  font-size: 1.5rem;
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
  line-height: 1.2;
`;

export const PostItemTags = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  flex-flow: wrap;

  div {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
  }

  > div {
    white-space: nowrap;
  }
`;

export const PostTag = styled.div`
  background: var(--mediumBackground);
  border-radius: 0.25rem;
  padding: 0.2rem 0.5rem;
  margin-right: 0.25rem;
`;

export const PostCategory = styled.div`
  padding: 0.25rem 0 0.25rem 0.5rem;

  border-left: 0.25rem solid
    ${props => (props.background ? props.background : 'var(--highlight)')};
  color: var(--texts);

  font-weight: 500;

  svg {
    width: 0.5rem;
    margin: 0 0.5rem;
  }
`;

export const PostSubCategory = styled.div`
  margin-right: 0.5rem;
`;
