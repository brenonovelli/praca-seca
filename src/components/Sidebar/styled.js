import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  position: fixed;
  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100vh;
  padding: 2rem;
  text-align: left;
  width: 20rem;

  ${media.lessThan('large')`
    height: 3rem;
    padding: .5rem;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    background: var(--highlight);
  `}
`;
