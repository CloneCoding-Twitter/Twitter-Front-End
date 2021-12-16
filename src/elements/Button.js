/* eslint-disable react/jsx-pascal-case */
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    height,
    width,
    font_color,
    font_size,
    center,
    text,
    children,
    padding,
    margin,
    bg,
    is_menuHover,
    disabled,
    bold,
    _onClick,
    is_tweeterHover,
    is_border,
    is_blackHover,
    is_listMenu,
    position,
  } = props;

  const styles = {
    height,
    width,
    font_color,
    font_size,
    center,
    text,
    children,
    padding,
    margin,
    bg,
    is_menuHover,
    disabled,
    bold,
    _onClick,
    is_tweeterHover,
    is_border,
    is_blackHover,
    is_listMenu,
    position,
  };

  if (is_border) {
    return (
      <React.Fragment>
        <BorderBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </BorderBtn>
      </React.Fragment>
    );
  }

  if (is_listMenu) {
    return (
      <React.Fragment>
        <MenuBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </MenuBtn>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <RoundButton onClick={_onClick} {...styles}>
        {text ? text : children}
      </RoundButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  is_border: false,
  height: "",
  width: "",
  font_color: "#0F1419",
  font_size: false,
  center: false,
  text: false,
  children: null,
  padding: "12px",
  margin: false,
  bg: false,
  _onClick: () => {},
  is_menuHover: false,
  is_tweeterHover: false,
  disabled: false,
  bold: false,
  onSubmit: false,
  position: false,
};

// //---- 기본 return Button ----
// const ElButton = styled.button`
//   height: ${(props) => props.height};
//   width: ${(props) => props.width};
//   font-weight: 800;
//   background: none;
//   color: #fff;
//   padding: ${(props) => props.padding};
//   box-sizing: border-box;
//   border: none;
//   ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
//   position: ${(props) => (props.position ? `${props.position}` : "")};
//   &:hover {
//     opacity: 0.8;
//     cursor: pointer;
//   }
// `;

const RoundButton = styled.button`
  height: ${(props) => props.height};
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => (props.font_color ? `${props.font_color}` : "#0F1419")};
  font-size: ${(props) => (props.font_size ? `${props.font_size}` : "19px")};
  font-weight: ${(props) => (props.bold ? "600" : "")};
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  border-radius: 9999px;
  background: ${(props) => (props.bg ? `${props.bg}` : "#1DA1F2")};
  ${(props) => (props.position ? `position: ${props.position};` : "")};
  ${(props) => (props.center ? "display: flex; align-items: center;" : "")};
  &:hover {
    transition: 0.45s;
    ${(props) => (props.is_menuHover ? "background: #d5d7db;" : "")}
    ${(props) => (props.is_tweeterHover ? "background: #1b89cc;" : "")}
    ${(props) => (props.is_blackHover ? "background: #333333;" : "")}
  }
  &:not(:hover) {
    transition: 0.45s;
  }
`;

const BorderBtn = styled(RoundButton)`
  border: 1px solid #ebeef0;
  background-color: transparent;

  &:hover {
    background-color: #efefef;
    transition: 0.45s;
  }
`;

const MenuBtn = styled(RoundButton)`
  font-size: 20px;
  font-weight: 500;
  border: none;
  background-color: transparent;
  padding-right: 28px;

  &:hover {
    color: #000;
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
`;

export default Button;
