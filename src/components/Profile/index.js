import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';

import Avatar from '../Avatar';

import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <AniLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        className="anilink"
      >
        <Avatar />
        <S.ProfileAuthor>{title}</S.ProfileAuthor>
      </AniLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
