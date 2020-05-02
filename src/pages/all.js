import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

import * as S from '../components/ListWrapper/styled';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllBusinessList {
      allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
        group(field: frontmatter___category) {
          nodes {
            frontmatter {
              background
              category
              subcategory
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
              image
              tags
              telefone
              whatsapp
            }
            fields {
              slug
            }
          }

          totalCount
        }
      }
    }
  `);

  const categoriesList = allMarkdownRemark.group;

  return (
    <Layout>
      <SEO title="Todos os negócios da Praça Seca" />

      <S.ListHeader>
        <S.ListTitle>Todos os negócios</S.ListTitle>
      </S.ListHeader>

      {/* List */}
      <S.ListWrapper>
        {categoriesList.map(
          categoryList =>
            //
            categoryList.nodes.map(
              ({
                frontmatter: {
                  background,
                  category,
                  subcategory,
                  description,
                  title,
                  tags,
                  telefone,
                  whatsapp,
                },
                fields: { slug },
              }) => (
                <PostItem
                  key={slug}
                  slug={slug}
                  background={background || null}
                  category={category}
                  subcategory={subcategory}
                  title={title}
                  tags={tags}
                  description={description}
                  telefone={telefone}
                  whatsapp={whatsapp}
                  isGenericList
                />
              )
            )
          //
        )}
      </S.ListWrapper>
    </Layout>
  );
};

export default IndexPage;
