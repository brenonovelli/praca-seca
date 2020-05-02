import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    height: 3rem;
    justify-content: center;
  `}

  .anilink {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    ${media.lessThan('large')`
    display: flex;
    text-align: left;
    color: var(--white);
  `}

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto;

  ${media.lessThan('large')`
    font-size: 1rem;
    margin-left: .5rem;
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 400;

  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;

  ${media.lessThan('large')`
    display: none;
  `}
`;
