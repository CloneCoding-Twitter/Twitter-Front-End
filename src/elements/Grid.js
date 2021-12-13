import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    is_wrap,
    column,
    width,
    padding,
    margin,
    bg,
    center,
    children,
    _onClick,
    position,
    justify,
    height,
    overflow,
    border,
    radius,
    bold,
  } = props;

  const styles = {
    is_flex: is_flex,
    is_wrap: is_wrap,
    column: column,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    position: position,
    justify: justify,
    overflow: overflow,
    border: border,
    radius: radius,
    bold: bold
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  is_wrap: false,
  column: false,
  width: "100%",
  height: false,
  padding: false,
  margin: false,
  bg: false,
  center: false,
  position: false,
  justify: false,
  overflow: false,
  border: false,
  // radius: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  max-width: 500px;
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.height ? `height: ${props.height};` : "")};
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.is_flex ? "display: flex; align-items: center;" : "")};
  ${(props) => (props.position ? `position: ${props.position};` : "")};
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : "")};
  ${(props) => (props.is_wrap ? `flex-wrap: wrap` : "")};
  ${(props) => (props.column ? "flex-dicrection: column" : "")};
  border: 2px solid #000;
`;
export default Grid;
