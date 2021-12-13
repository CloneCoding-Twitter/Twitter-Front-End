import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    children,
    margin,
    width,
    padding,
    text_color,
    disabled,
    radius,
    bgcolor,
    opacity,
    color,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    disabled: disabled,
    radius: radius,
    bgcolor: bgcolor,
    opacity: opacity,
    color: color,
  };

  if (text_color) {
    return (
      <React.Fragment>
        <ElButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </ElButton>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <RoundButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </RoundButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text_color: false,
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  disabled: false,
  radius: false,
  bgcolor: false,
  opacity: 1,
  color: "#ffffff",
};
//---- 기본 return Button ----
const ElButton = styled.button`
  width: ${(props) => props.width};
  font-weight: 800;
  background: none;
  color: #fff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  position: ${(props) => (props.position ? `${props.position}` : "")};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const RoundButton = styled.button`
  width: ${(props) => props.width};
  font-weight: 800;
  ${(props) =>
    props.bgcolor
      ? `background-color: ${props.bgcolor};`
      : "background-color:#3974d9"};
  ${(props) => (props.color ? `color: ${props.color};` : "color:$ffffff")};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) =>
    props.radius ? `border-radius: ${props.radius};` : "border-radius:20px"};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  position: ${(props) => (props.position ? `${props.position}` : "")};
  opacity: ${(props) => (props.opacity ? `${props.opacity}` : "")};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default Button;
