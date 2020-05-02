import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "coreto.png" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return (
    <S.AvatarWrapper>
      <S.Avatar fluid={avatarImage.childImageSharp.fluid} />
    </S.AvatarWrapper>
  );
};

export default Avatar;
