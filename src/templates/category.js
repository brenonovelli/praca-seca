import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

import * as S from '../components/ListWrapper/styled';

const BlogList = ({
  data,
  pageContext: { title: cTitle, subcategories, color },
}) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />

      <S.ListHeader color={color}>
        <S.ListTitle>{cTitle}</S.ListTitle>

        {subcategories && subcategories.length > 0 && (
          <S.Subcategories>
            {subcategories.map(subcategory => (
              <S.Subcategory key={subcategory}>{subcategory}</S.Subcategory>
            ))}
          </S.Subcategories>
        )}
      </S.ListHeader>
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                subcategory,
                description,
                title,
                tags,
              },
              fields: { slug },
            },
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
            />
          )
        )}
      </S.ListWrapper>
    </Layout>
  );
};

export const query = graphql`
  query CategoryList($title: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { eq: $title } } }
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            subcategory
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            image
            tags
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
