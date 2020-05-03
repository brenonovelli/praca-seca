import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Search } from 'styled-icons/material-rounded';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import categories from '../utils/categories';
import getThemeColor from '../utils/getThemeColor';

import * as S from '../components/Home/styled';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <S.Header>
        <h1>Bem-vindo ao Guia Praça Seca.</h1>
        <p>
          Um guia feito para fortalecer o vínculo dos moradores com os negócios
          locais. Qualquer tipo de negócio: físico, serviço ou virtual. Cadastre
          seu negócio gratuitamente.
        </p>
      </S.Header>

      <S.Main>
        <S.SearchBox to="/search/">
          Pesquisar
          <Search />
        </S.SearchBox>
        <S.CategoriesList>
          {categories.map(category => {
            const Icon = category.icon;

            return (
              <S.Category key={category.slug} background={category.color}>
                <AniLink
                  cover
                  direction="left"
                  bg={getThemeColor()}
                  duration={0.6}
                  to={category.slug}
                  activeClassName="active"
                >
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                  {category.title}
                </AniLink>
              </S.Category>
            );
          })}
        </S.CategoriesList>
      </S.Main>
    </Layout>
  );
};

export default IndexPage;
