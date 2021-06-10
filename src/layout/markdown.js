import styled from "styled-components";

export const MarkdownBody = styled.div`
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
    margin: 0 auto;

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
