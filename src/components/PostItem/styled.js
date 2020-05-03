import styled from 'styled-components';
import media from 'styled-media-query';

export const PostItem = styled.article`
  --colorCategory: ${props =>
    props.colorCategory ? props.colorCategory : 'var(--highlight)'};
  color: var(--texts);
  display: flex;

  padding: 0 1rem;
  margin-bottom: 1rem;

  ${media.greaterThan('medium')`
    padding: 0;
    margin-bottom: 0;
  `}

  body#list & {
    ${media.greaterThan('medium')`
      
    `}
  }

  body#grid & {
    background-color: var(--background);
  }

  > section {
    > div {
      transition: color ease 0.2s;
    }
  }
`;

export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  border: 1px solid var(--borders);
  border-radius: 0.25rem;
  overflow: hidden;

  ${media.greaterThan('medium')`
    padding: 1rem 1rem .5rem;
    border: none;
  `}

  ${media.greaterThan('large')`
    padding: 2rem 1rem;
  `}
  

  body#grid & {
    justify-content: flex-start;
    align-items: flex-start;
    border: none;
    padding: 1rem;

    ${media.greaterThan('large')`
      padding: 1.75rem 1.5rem;
    `}
  }
`;

export const PostItemHeader = styled.header`
  padding: 1rem 1rem 0.5rem;

  ${media.greaterThan('medium')`
    padding: 0 0 .5rem 0;
  `}

  a {
    text-decoration: none;

    * {
      transition: color ease 0.2s;
    }

    &:hover {
      * {
        color: var(--highlight);
      }
    }
  }
`;

export const PostItemCategories = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  padding-bottom: 0.25rem;
`;

export const PostCategory = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;

  color: var(--texts);
  font-size: 0.875rem;

  a {
    color: var(--texts);
    text-decoration: underline;
  }

  svg {
    width: 0.35rem;
    margin: 0 0.25rem;
    color: var(--colorCategory);
  }

  ${media.greaterThan('medium')`
    font-weight: 500;

    svg {
      width: 0.35rem;
      margin: 0 0.25rem;
    }
  `}
`;

export const PostSubCategory = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.15rem;

  color: var(--postColor);

  ${media.greaterThan('medium')`
    font-size: 1.5rem;
    margin: 0 0 0.25rem;
  `}

  body#grid & {
    line-height: 1.1;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.2;
  padding-bottom: 0.5rem;

  color: var(--texts);
`;

export const PostItemInfos = styled.section`
  display: flex;
  align-items: center;
  flex-flow: wrap;

  ${media.greaterThan('medium')`
    padding: .5rem 0;
  `}

  div {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
  }
`;

export const PostTag = styled.div`
  background: var(--mediumBackground);
  border-radius: 0.25rem;
  padding: 0.2rem 0.5rem;
  margin-right: 0.25rem;
`;

export const Actions = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-auto-flow: column;
  width: 100%;
  margin-top: auto;
`;

export const ActionItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;

  background: var(--mediumBackground);

  text-decoration: none;
  font-size: 0.875rem;
  color: var(--texts);

  transition: all ease 0.2s;

  svg {
    width: 1rem;
    margin-right: 0.5rem;
  }

  &:hover {
    color: var(--white);
    background: var(--highlight);

    &.whatsapp {
      background: #1ebead;
    }
  }
`;
