import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import categories from '../utils/categories';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

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

      {/* {categories.map(category => (
        <section>
          <h1>{category.title}</h1>
        </section>
      ))} */}

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
                isGenericList
              />
            )
          )
        //
      )}
    </Layout>
  );
};

export default IndexPage;
