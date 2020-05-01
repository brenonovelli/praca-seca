import styled from 'styled-components';
import media from 'styled-media-query';

export const ListHeader = styled.header`
  padding: 2rem 1rem 0;
  
  ${media.lessThan('large')`
    padding: 0 1rem;
  `}

  --colorCategory: ${props => (props.color ? props.color : `var(--highlight)`)};
`;

export const ListTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: var(--postColor);

  ${media.lessThan('large')`
    font-size: 1.5rem;
    margin: 0 0 .5rem;
  `}
`;

export const Subcategories = styled.nav`
  display: flex;
`;

export const Subcategory = styled.a`
  border: 1px solid var(--colorCategory);
  color: var(--texts);

  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem 0.25rem 0;
  border-radius: 0.25rem;
`;

export const ListWrapper = styled.section`
  body#grid & {
    display: grid;
    grid-area: posts;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1px;
    background: var(--borders);
  }
`;
