/* eslint-disable react/jsx-pascal-case */
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    width,
    font_color,
    font_size,
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
  } = props;

  const styles = {
    width,
    font_color,
    font_size,
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
  };

  // if (text_color) {
  //   return (
  //     <React.Fragment>
  //       <ElButton {...styles} onClick={_onClick}>
  //         {text ? text : children}
  //       </ElButton>
  //     </React.Fragment>
  //   );
  // }

  return (
    <React.Fragment>
      <RoundButton onClick={_onClick} {...styles}>{text ? text : children}</RoundButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  width: '100%',
  font_color: '#0F1419',
  font_size: false,
  text: false,
  children: null,
  padding: '15px 0',
  margin: false,
  bg: false,
  _onClick: () => {},
  is_menuHover: false,
  is_tweeterHover: false,
  disabled: false,
  bold: false,
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
  };
`;

const RoundButton = styled.button`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin? '' : '4px 0 0'};
  color: ${props => props.font_color? `${props.font_color}`: "#0F1419"};
  font-size: ${props => props.font_size? `${props.font_size}`: "19px"};
  font-weight: ${(props) => (props.bold ? "600" : "")};
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  border-radius: 9999px;
  background: ${props => props.bg? `${props.bg}`: '#1DA1F2'};
  position: ${(props) => (props.position ? `${props.position}` : "")};
  &:hover {
    ${props => props.is_menuHover?
      "background: #d5d7db;"
      : ''
    };
    ${props => props.is_tweeterHover?
      "background: #1b89cc;"
      : ''
    }
  }
`;

export default Button;
