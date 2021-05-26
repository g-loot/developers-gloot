import { graphql, useStaticQuery } from "gatsby";

export const useGetSidebarCollection = () => {
  const data = useStaticQuery(graphql`
    query useGetSidebarCollection {
      allMarkdownRemark(limit: 1) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  return data ? data.allMarkdownRemark.edges : [];
};
