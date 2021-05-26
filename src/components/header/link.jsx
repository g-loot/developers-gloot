import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const MenuLinkWrapper = styled.span`
  a {
    color: white;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const MenuLink = ({ to, children }) => {
  return (
    <MenuLinkWrapper>
      <Link to={to}>{children}</Link>
    </MenuLinkWrapper>
  );
};

export default MenuLink;
