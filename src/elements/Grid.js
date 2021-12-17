import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    cursor,
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
    align,
    height,
    overflow,
    border,
    radius,
    bold,
    borderT,
    borderB,
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
    align: align,
    overflow: overflow,
    border: border,
    radius: radius,
    bold: bold,
    borderT: borderT,
    borderB: borderB,
    cursor: cursor,
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
  width: "100%", // ---------- 
  height: "",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  position: false,
  justify: false,
  align: false,
  overflow: "",
  radius: "",
  borderT: false,
  borderB: false,
  _onClick: () => {},
  border: false,
  cursor: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.cursor ? `cursor: ${props.pointer};` : "")};
  ${(props) => (props.height ? `height: ${props.height};` : "")};
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")};
  ${(props) => (props.align ? `align-items: ${props.align};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.is_flex ? "display: flex;" : "")};
  ${(props) => (props.position ? `position: ${props.position};` : "")};
  ${(props) => (props.position === "fixed" ? "top: 0; left: 0" : "")};
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : "")};
  ${(props) => (props.is_wrap ? "flex-wrap: wrap" : "")};
  ${(props) => (props.column ? "flex-direction: column;" : "")};
  ${(props) => (props.borderT ? "border-top: 1px solid #efefef;" : "")};
  ${(props) => (props.borderB ? "border-bottom: 1px solid #efefef;" : "")};
`;
export default Grid;
