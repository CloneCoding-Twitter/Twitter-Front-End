import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    margin,
    children,
    center,
    is_text,
    __onClick,
    justify,
    padding,
    is_footTxT,
    is_span,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    center: center,
    is_text: is_text,
    __onClick: __onClick,
    justify: justify,
    padding: padding,
    is_footTxT: is_footTxT,
    is_span: is_span,
  };

  if (is_footTxT) {
    return (
      <React.Fragment>
        <FootTxt {...styles}>{children}</FootTxt>
      </React.Fragment>
    )
  }

  if (is_span) {
    return (
      <React.Fragment>
        <SpanTxt {...styles}>{children}</SpanTxt>
      </React.Fragment>
    )
  }

  return (
      <P {...styles}>{children}</P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  center: false,
  is_text: false,
  __onClick: () => {},
  justify: false,
  padding: false,
  is_footTxT: false,

};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "800" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const FootTxt = styled.p`
  cursor: pointer;
  font-size: 12px;
  margin: 0 10px;
`;

const SpanTxt = styled.span`
  cursor: pointer;
  color: #1da1f2;
  ${(props) => (props.padding ? `padding:${props.padding};` : "")}
`;

export default Text;
