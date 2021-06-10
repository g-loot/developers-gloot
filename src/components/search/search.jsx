import React, { useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Link } from "gatsby";
import { Vector, TextInput } from "@g-loot/payments-react-components";

const StyledWrapper = styled(Vector)`
  position: relative;
  width: 300px;
`;
const StyledTextInput = styled.input`
  height: 1.75rem;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 10px;
`;
const SearchResults = styled.div`
  box-sizing: border-box;
  position: absolute;
  border: 1px solid black;
  border-top: none;
  border-radius: 5px;
  width: 100%;
  background: lightgray;
  top: 1.75rem;
`;
const Result = styled(Link)`
  display: block;
  margin: 0.5rem;
  text-decoration: none;
  color: black;
`;
const SearchBar = ({ ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      localSearchPosts {
        index
        store
      }
    }
  `);
  const { index, store } = data.localSearchPosts;
  const [query, setQuery] = useState("");

  const results = useFlexSearch(query, index, store);

  return (
    <StyledWrapper {...rest}>
      <TextInput
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query.length >= 3 && results && results.length > 0 && (
        <SearchResults>
          {results.map((result) => (
            <Result to={`/docs/${result.slug}`}>{result.title}</Result>
          ))}
        </SearchResults>
      )}
    </StyledWrapper>
  );
};

export default SearchBar;

/* query MyQuery {
  allMarkdownRemark(filter: {id: {eq: "2ca8a9d3-a69b-5d24-a4fa-b00f79b81068"}}) {
    edges {
      node {
        frontmatter {
          slug
        }
        rawMarkdownBody
      }
    }
  }
} */
