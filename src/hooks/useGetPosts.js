import { graphql, useStaticQuery } from "gatsby";

export const useGetPosts = () => {
  const data = useStaticQuery(graphql`
    query useGetPosts {
      allMarkdownRemark(limit: 1) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            internal {
              description
              content
            }
          }
        }
      }
    }
  `);

  return data;
};
