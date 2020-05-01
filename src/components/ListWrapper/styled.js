import styled from 'styled-components';

export const ListHeader = styled.header`
  padding: 2rem 1rem 0;

  --colorCategory: ${props => (props.color ? props.color : `var(--highlight)`)};
`;

export const ListTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: var(--postColor);
`;

export const Subcategories = styled.nav`
  display: flex;
`;

export const Subcategory = styled.a`
  background: var(--colorCategory);
  color: var(--white);

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
