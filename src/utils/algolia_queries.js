const postQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          title
          category
          subcategory
          delivery
          description
          tags
          address
          email
          site
          telefone
          whatsapp
          instagram
          facebook
          image
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    // eslint-disable-next-line radix
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = queries;
