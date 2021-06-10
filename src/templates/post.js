import React from "react";
import { graphql } from "gatsby";
import SideMenu from "../components/sidemenu";
import SearchBar from "../components/search/search";
import PageLayout from "../layout/page-layout";
import { Vector } from "@g-loot/payments-react-components";
import styled from "styled-components";
import PageMenu from "../components/pagemenu";
import { MarkdownBody } from "../layout/markdown";

const SearchBarWrapper = styled(Vector)`
  grid-column: 1/4;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 8fr 1.5fr;
  grid-template-rows: auto;
  margin: 0 auto;
  max-width: 1200px;
`;

const MarkdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: calc(100vh - 6rem - 32px - 100px);
  overflow: scroll;
`;

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
