import React from "react";
import { Vector } from "@g-loot/payments-react-components";
import styled from "styled-components";

const StyledAnchorTag = styled.a`
  font-size: 0.75rem;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin: 4px 0;
`;

const AnchorMenu = styled(Vector)`
  border-left: 1px solid black;
  height: max-content;
  padding: 0 0 0 10px;
`;
function PageMenu({ anchors }) {
  if (!anchors) return <div />;

  return (
    <AnchorMenu column>
      {anchors.map((anchor) => (
        <StyledAnchorTag
          href={`#${anchor.value.replace(/\s/g, "-")}`}
          key={`#${anchor.value.replace(/\s/g, "-")}`}
        >
          {anchor.value.replace(/[^A-z0-9+\s]+/g, "")}
        </StyledAnchorTag>
      ))}
    </AnchorMenu>
  );
}

export default PageMenu;
