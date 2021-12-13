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
    is_sns,
    justify,
    padding,
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
  };

  if (is_text) {
    return <Div onClick={__onClick}>Chabak</Div>;
  }
  //---- 소셜 로그인 ----
  if (is_sns) {
    return <Sns onClick={__onClick}>소셜 계정으로 로그인 </Sns>;
  }

  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  );
};

Text.defalutProps = {
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  center: false,
  is_text: false,
  __onClick: () => {},
  justify: false,
  padding: false,
};
const P = styled.p`
  font-family: "GmarketSansMedium";
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  ${(props) => (props.padding ? `padding:${props.padding};` : "")}
  ${(props) => (props.justify ? `justify-content:${props.justify};` : "")}
  ${(props) => (props.margin ? `margin:${props.margin};` : "")};
  ${(props) => (props.center ? "text-align: center" : "")};
`;

const Div = styled.div`
  font-family: "Comfortaa";
  font-weight: 700;
  color: aliceblue;
  font-size: 2em;
  font-weight: 800;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
const Sns = styled.div`
  text-align: center;
  padding: 20px 0;
  &::before {
    position: absolute;
    top: 28px;
    left: 50px;
    width: 108px;
    height: 1px;
    content: "";
    background: #eee;
  }
  &::after {
    position: absolute;
    top: 28px;
    right: 50px;
    width: 108px;
    height: 1px;
    content: "";
    background: #eee;
  }
`;

export default Text;
