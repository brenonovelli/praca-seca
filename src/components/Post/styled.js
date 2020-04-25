import styled from 'styled-components';
import media from 'styled-media-query';

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan('large')`
    padding: 0 1rem;
    max-width: 100%;
  `}
`;

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem 1.5rem;
  margin: 1rem auto;
  border-bottom: var(--borders) 1px solid;

  ${media.lessThan('large')`
    font-size: 1.5rem;
    line-height: 1.1;
    padding: 0;
    margin: .25rem auto;
  `}
`;
export const PostCategory = styled.h2`
  font-size: 1.25rem;
  font-weight: 200;
  padding: 0 1.4rem;
  line-height: 1;

  ${media.lessThan('large')`
    padding: 0;
    font-size: .875rem;
  `}
`;

export const PostDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 200;
  padding: 0 1.4rem;
  line-height: 1;

  ${media.lessThan('large')`
    padding: 0;
    font-size: 1rem;
    line-height: 1.25;
  `}
`;

export const PostBadges = styled.section`
  display: flex;
  padding: 1rem;

  ${media.greaterThan('large')`
    padding: 1.5rem 5rem 0;
    margin: auto;
    max-width: 70rem;
  `}
`;

export const PostBadge = styled.div`
  background: var(--highlight2);
  color: var(--white);
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;

  svg {
    width: 1.5rem;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  ${media.greaterThan('large')`
    padding: 1rem;
    font-size: 1rem;
    svg {
      width: 2rem;
      margin-right: 1rem;
    }
  `}
`;

export const PostContacts = styled.section`
  padding: 0 1rem;
  margin: auto;
  display: grid;
  grid-gap: 1rem;

  .item {
    display: flex;
    align-items: center;
    box-shadow: 0 0 2rem 1rem rgba(220, 220, 220, 0.25);
    border-radius: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    position: relative;

    &:hover {
      z-index: 9;
    }
  }

  ${media.greaterThan('large')`
    padding: 2.5rem 5rem 0;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    max-width: 70rem;

    .item{
      padding: 4rem 2rem;
      flex-direction: column;
    }
  `}
`;
export const PostContact = styled.div`
  &:hover {
    background: var(--highlight2);
    * {
      color: var(--white) !important;
    }
  }
`;

export const PostContactLink = styled.a`
  &:hover {
    background: var(--highlight);
    * {
      color: var(--white) !important;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--highlight);

  svg {
    width: 2rem;
  }

  ${media.greaterThan('large')`
    svg {
      width: 3rem;
    }
  `}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  letter-spacing: 0.069rem;
  word-break: break-word;
  padding: 0 0 0 1rem;

  strong {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--texts);
  }
  span {
    font-size: 1rem;
    font-weight: 300;
    color: var(--postColor);
  }

  ${media.greaterThan('large')`
    text-align: center;
    padding: 1.4rem;

    strong {
      font-size: 1rem;
      margin-bottom: .5rem;
    }

    span {
      font-size: 1.25rem;
    }
  `}
`;

// Fim contacts

export const PostFooter = styled.footer`
  border-top: var(--borders) 1px solid;
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 1rem 5rem;

  ${media.lessThan('large')`
    padding: .5rem 0;
    max-width: 100%;
    margin: 0 1rem;
  `}
`;

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    font-size: .75rem;
    padding: 0;
  `}
`;

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;
  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
    ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
    ${media.lessThan('large')`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
