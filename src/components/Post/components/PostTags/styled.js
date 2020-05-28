import styled from 'styled-components';
import media from 'styled-media-query';

export const TagsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;

  --colorCategory: ${props => (props.color ? props.color : `var(--highlight)`)};

  ${media.lessThan('large')`
    padding-top: .5rem;
  `}
`;

export const Tag = styled.div`
  display: inline-flex;
  margin-right: 0.5rem;
  font-size: 0.875rem;

  ${media.lessThan('large')`
    padding-bottom: 0.5rem;
  `}

  svg {
    color: var(--colorCategory);
    width: 0.875rem;
  }
`;
