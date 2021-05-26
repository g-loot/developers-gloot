import React from "react";

import { Vector } from "@g-loot/payments-react-components";
import styled from "styled-components";
import Link from "./link";
const StyledHeader = styled(Vector)`
  background-color: #26263c;
  color: #fff;
  position: fixed;
  width: 100%;
  height: 4rem;
`;
const TitleWrapper = styled.div`
  margin-left: 4rem;
`;
const Title = styled.h3``;

const LinkWrapper = styled(Vector)`
  text-decoration: none;
  margin-right: 4rem;
`;
const Header = () => {
  return (
    <StyledHeader justify="between" align="center">
      <TitleWrapper>
        <Title>G-loot Esports Platform</Title>
      </TitleWrapper>
      <LinkWrapper>
        <Link to="/">Home</Link>
        <Link to="/docs/intro">Documentation</Link>
      </LinkWrapper>
    </StyledHeader>
  );
};

export default Header;
