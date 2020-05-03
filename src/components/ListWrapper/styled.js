import styled from 'styled-components';
import media from 'styled-media-query';

export const ListHeader = styled.header`
  --colorCategory: ${props => (props.color ? props.color : `var(--highlight)`)};

  padding: 0 1rem 0.75rem;

  ${media.greaterThan('large')`
    padding: 3rem 1rem 1rem;
    border-bottom: 1px solid var(--borders);
  `}
`;

export const ListTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--postColor);

  ${media.lessThan('large')`
    font-size: 1.5rem;
  `}
`;

export const Subcategories = styled.nav`
  display: flex;
  flex-flow: wrap;
  margin-top: 0.5rem;
`;

export const Subcategory = styled.span`
  background: var(--mediumBackground);
  color: var(--texts);
  padding: 0.35rem 0.5rem;
  margin: 0 0.25rem 0.25rem 0;
  border-radius: 0.25rem;

  white-space: nowrap;

  ${media.lessThan('large')`
    font-size: .875rem;
  `}
`;

export const ListWrapper = styled.section`
  ${media.greaterThan('large')`
    body#grid & {
      display: grid;
      grid-area: posts;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-gap: 1px;
      background: var(--borders);
    }
  `}
`;
