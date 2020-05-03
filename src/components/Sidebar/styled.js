import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  position: fixed;
  background: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100vh;
  padding: 1rem 2rem;
  text-align: left;
  width: 20rem;

  ${media.lessThan('large')`
    height: 3rem;
    padding: 0 1rem;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    background: var(--cornersBars);

    z-index: 20;

    > section{
      position: relative;
    }

    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 3rem;
      background: var(--cornersBars);
      z-index: 0;
    }
  `}
`;
