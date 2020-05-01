import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: 0 auto;
  padding: 3rem 0 0;
  max-width: 70rem;

  --colorCategory: ${props => (props.color ? props.color : `var(--highlight)`)};

  ${media.lessThan('large')`
    padding: 0;
    max-width: 100%;
  `}
`;

export const PostCategories = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;

  padding: 0 1.4rem 0.5rem;

  ${media.lessThan('large')`
    padding: 0 1rem 0.25rem;
  `}

  > a,
  span {
    white-space: nowrap;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;

    font-size: 1rem;

    ${media.lessThan('large')`
      font-size: .875rem;
    `}
  }
`;

export const PostCategory = styled(AniLink)`
  background: var(--colorCategory);
  color: var(--white);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  line-height: 1;
  text-decoration: none;
`;

export const PostSubcategory = styled.span`
  color: var(--colorCategory);
`;

export const PostTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto 0.5rem;

  ${media.lessThan('large')`
    font-size: 1.5rem;
    line-height: 1.1;
    padding: 0 1rem;
    margin: .25rem auto;
  `}
`;

export const PostDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 200;
  padding: 0 1.4rem 1.4rem;

  line-height: 1;

  border-bottom: var(--borders) 1px solid;

  ${media.lessThan('large')`
    padding: 0 1rem 1rem;
    font-size: 1rem;
    line-height: 1.25;
  `}
`;

export const PostsTags = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 70rem;
  padding: 1rem 1.4rem;
  margin-bottom: 1.4rem;

  line-height: 1;
  border-bottom: var(--borders) 1px solid;

  ${media.lessThan('large')`
    flex-direction: column; 
    padding: 0 1rem;
    margin-bottom: 0rem;
  `}

  section ~ div {
    margin-top: -0.5rem;
  }

  & > section,
  & > div {
    justify-content: center;
  }
`;

export const PostBadges = styled.section`
  display: flex;

  ${media.lessThan('large')`
    padding: .5rem 0;
  `}
`;

export const PostBadge = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    color: var(--colorCategory);
    width: 1rem;
    margin-right: 0.5rem;
  }
`;

export const PostContacts = styled.section`
  padding: 0.25rem 0;
  margin: auto;
  display: grid;
  grid-gap: 0.25rem;

  .item {
    display: flex;
    align-items: center;
    background: var(--mediumBackground);

    padding: 1rem;
    text-decoration: none;
    position: relative;

    &:hover {
      z-index: 9;
    }
  }

  ${media.greaterThan('large')`
    padding: 2.5rem 1.4rem 0;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    max-width: 70rem;

    .item{
      padding: 4rem 2rem;
      flex-direction: column;
      border-radius: 0.5rem;
    }

    .largeColumn{
      grid-column: span 2;
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
  transition: all 0.1s ease;

  &:hover {
    background: var(--highlight);

    &.whatsapp {
      background: #1ebead;
    }

    &.facebook {
      background: #2d88ff;
    }

    &.instagram {
      background: rgba(245, 0, 0, 1) !important;
      background: -moz-linear-gradient(
        45deg,
        rgba(245, 0, 0, 1) 0%,
        rgba(184, 0, 95, 1) 50%,
        rgba(104, 0, 184, 1) 100%
      ) !important;
      background: -webkit-gradient(
        left bottom,
        right top,
        color-stop(0%, rgba(245, 0, 0, 1)),
        color-stop(50%, rgba(184, 0, 95, 1)),
        color-stop(100%, rgba(104, 0, 184, 1))
      ) !important;
      background: -webkit-linear-gradient(
        45deg,
        rgba(245, 0, 0, 1) 0%,
        rgba(184, 0, 95, 1) 50%,
        rgba(104, 0, 184, 1) 100%
      ) !important;
      background: -o-linear-gradient(
        45deg,
        rgba(245, 0, 0, 1) 0%,
        rgba(184, 0, 95, 1) 50%,
        rgba(104, 0, 184, 1) 100%
      ) !important;
      background: -ms-linear-gradient(
        45deg,
        rgba(245, 0, 0, 1) 0%,
        rgba(184, 0, 95, 1) 50%,
        rgba(104, 0, 184, 1) 100%
      ) !important;
      background: linear-gradient(
        45deg,
        rgba(245, 0, 0, 1) 0%,
        rgba(184, 0, 95, 1) 50%,
        rgba(104, 0, 184, 1) 100%
      ) !important;
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f50000', endColorstr='#6800b8', GradientType=1 ) !important;
    }
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
  margin-bottom: 1rem;

    svg {
      width: 2rem;
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
    padding: 0 1.4rem;

    strong {
      font-size: .875rem;
      margin-bottom: .5rem;
    }

    span {
      font-size: 1rem;
    }
  `}
`;

// Fim contacts

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

export const PostFooter = styled.footer`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 1rem 1.4rem;

  display: flex;
  justify-content: center;

  margin-top: 1.4rem;

  border-top: var(--borders) 1px solid;

  ${media.lessThan('large')`
    padding: .5rem 0;
    max-width: 100%;
    margin: 0;
  `}
`;

export const ReportLink = styled(Link)`
  border-bottom: 1px dashed var(--highlight);
  color: var(--highlight);

  display: inline-flex;
  align-items: center;

  font-size: 0.875rem;
  text-decoration: none;

  transition: 0.2s ease color;
  padding-bottom: 0.25rem;

  svg {
    color: rgb(240, 200, 0);
    width: 1.5rem;
    margin-right: 0.4rem;
    vertical-align: middle;
    ${media.lessThan('large')`
      width: 1rem;
    `}
  }
`;
