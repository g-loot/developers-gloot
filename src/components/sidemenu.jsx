import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Vector } from "@g-loot/payments-react-components";

const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkTitle = styled.p`
  text-transform: capitalize;
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
`;
const StyledLink = styled(Link)`
  color: #717171;
  font-size: 0.875rem;
  text-decoration: none;
  width: 10rem;
  text-transform: capitalize;
  padding: 0 0 0.5rem 0;
  &.active {
    color: #00cd62;
  }
`;
const SideMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              order
              sidebar_category
              slug
            }
            fields {
              slug
              sidebarCategory
            }
          }
        }
      }
      site {
        siteMetadata {
          siteMenuWeights {
            name
            weight
          }
        }
      }
    }
  `);

  let obj = {};
  data.site.siteMetadata.siteMenuWeights.forEach(
    (x) => (obj[x.name] = x.weight)
  );

  const categories = [
    ...new Set(
      data.allMarkdownRemark.edges.map(
        (edge) => edge.node.frontmatter.sidebar_category
      )
    ),
  ].sort((a, b) => obj[a] - obj[b]);

  const links = data.allMarkdownRemark.edges
    .map((edge) => {
      return {
        ...edge.node.frontmatter,
      };
    })
    .sort((a, b) => a.order - b.order);

  return (
    <StyledSideMenu>
      {categories &&
        categories.map((category) => (
          <Vector column key={category}>
            <LinkTitle>{category}</LinkTitle>

            {links
              .filter((link) => link.sidebar_category === category)
              .map((link) => (
                <StyledLink
                  key={link.slug}
                  to={`/docs/${link.slug}`}
                  activeClassName="active"
                >
                  {link.title}
                </StyledLink>
              ))}
          </Vector>
        ))}
    </StyledSideMenu>
  );
};

export default SideMenu;
