import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

import * as S from '../components/ListWrapper/styled';

const BlogList = ({
  data,
  pageContext: { currentPage, numPages, pagination },
}) => {
  const postList = data.allMarkdownRemark.edges;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />

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
              isGenericList
            />
          )
        )}
      </S.ListWrapper>

      {pagination && (
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </Layout>
  );
};

// export const query = graphql`
//   query PostList($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           frontmatter {
//             background
//             category
//             subcategory
//             date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//             description
//             title
//             image
//             tags
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

export default BlogList;
