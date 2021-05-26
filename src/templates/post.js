import React from "react";
import { graphql } from "gatsby";
import SideMenu from "../components/sidemenu";
import SearchBar from "../components/search/search";
import PageLayout from "../layout/page-layout";
import { Vector } from "@g-loot/payments-react-components";
import styled from "styled-components";
import PageMenu from "../components/pagemenu";

const SearchBarWrapper = styled(Vector)`
  grid-column: 1/4;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 10fr 1fr;
  grid-template-rows: auto;

  margin: 0 auto;
`;

const MarkdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: calc(100vh - 6rem - 32px - 100px);
  overflow: scroll;
`;
const MarkdownBody = styled.div`
  max-width: 40rem;
  height: 100%;
  h1 {
    margin-top: 0;
  }
  .custom-class {
    fill: #00cd62;
    position: absolute;
    top: 2px;

    svg {
      visibility: visible;
      opacity: 0.2;
    }
    svg:focus,
    svg:hover {
      opacity: 1;
    }
  }
  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  /**
 * If you only want to use line numbering
 */

  .gatsby-highlight {
    background-color: #2d2d2d;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initia;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    margin-bottom: 16px;
    margin-top: 0;
    overflow: auto;
    width: 100%;

    thead,
    tr,
    tbody {
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      padding: 0;
      vertical-align: baseline;
    }
    tr {
      background-color: transparent;
      border-top: 1px solid #dfe2e5;
    }
    th {
      background-color: inherit;
      font-weight: 600;
    }
    td,
    th {
      border: 1px solid #dfe2e5;
      padding: 6px 13px;
    }
  }
`;

//Used for all guides under documentation

const DocumentationTemplate = ({ data }) => {
  return (
    <PageLayout>
      <Grid column>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <Vector Column>
          <SideMenu />
        </Vector>
        <MarkdownWrapper>
          <MarkdownBody>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            ></div>
          </MarkdownBody>
        </MarkdownWrapper>
        <div>
          <PageMenu anchors={data.markdownRemark.headings} />
        </div>
      </Grid>
    </PageLayout>
  );
};

export default DocumentationTemplate;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        slug
        title
      }
      html
      headings {
        value
      }
    }
  }
`;
