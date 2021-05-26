import React from "react";
import { themes } from "@g-loot/payments-react-components";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "styled-components";
import Header from "../components/header/header";
import GlobalStyle from "../layout/global";
import styled from "styled-components";
import { Typography, Button } from "@g-loot/payments-react-components";

const BodyWrapper = styled.main`
  padding-top: 6rem;
  margin: 0 auto;
  width: 80vw;
`;

const shortCodes = { Typography, Button };

const PageLayout = ({ children }) => {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <ThemeProvider theme={themes.glootLight}>
        <GlobalStyle />
        <Header />
        {/* TODO: Set height corresponding to header height, pref a var
         */}
        <MDXProvider components={shortCodes}>
          <BodyWrapper>{children}</BodyWrapper>
        </MDXProvider>
      </ThemeProvider>
    </div>
  );
};

export default PageLayout;
