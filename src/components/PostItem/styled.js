import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    justify-content: center;
    align-items: flex-start;
  }
  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

export const PostCategories = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.7rem;

  font-size: 0.875rem;

  > div {
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
  }
`;

export const PostCategory = styled.div`
  background: ${props =>
    props.background ? props.background : 'var(--highlight)'};
  color: var(--white);

  font-weight: 500;
`;

export const PostSubCategory = styled.div`
  color: ${props => (props.color ? props.color : 'var(--texts)')};
`;

export const PostItemInfo = styled.div``;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.2;
`;

export const PostItemTags = styled.div`
  padding: 0.5rem 0;

  span {
    background: var(--mediumBackground);
    font-size: 0.75rem;
    padding: 0.15rem 0.25rem;
    margin: 0 0.25rem 0.25rem 0;
    border-radius: 0.25rem;
  }
`;
