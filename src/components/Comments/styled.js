import styled from 'styled-components';
import media from 'styled-media-query';

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 1.4rem;

  ${media.lessThan('large')`
    padding: 1.5rem 0 0;
    max-width: 100%;
  `}

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.03);
    padding: 2rem;
    border-radius: 0.5rem;

    a {
      color: var(--highlight) !important;
    }

    ${media.lessThan('large')`
      padding: 1rem 1.4rem;
      box-shadow: none;
    `}
  }
`;

export const CommentsTitle = styled.h2`
  color: var(--postColor);
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  ${media.lessThan('large')`
    font-size: 1.375rem;
    padding: 0 1.4rem;
  `}
`;

export const CommentsDescription = styled.p`
  color: var(--texts);
  margin-bottom: 2rem;

  ${media.lessThan('large')`
    padding: 0 1.4rem;
    margin-bottom: 0;
  `}
`;
