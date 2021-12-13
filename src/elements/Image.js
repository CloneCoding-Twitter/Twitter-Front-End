import React from "react";

import styled from "styled-components";

const Image = (props) => {
  const { state, src, size, _onClick } = props;

  const styles = {
    src: src,
    size: size,
  };
  //---- 게시글 이미지 hover ----
  if (state === "hover") {
    return (
      <AspectOutter>
        <AspectInnerHover {...styles} onClick={_onClick}></AspectInnerHover>
      </AspectOutter>
    );
  }
  return (
    <AspectOutter>
      <AspectInner {...styles} onClick={_onClick}></AspectInner>
    </AspectOutter>
  );
};

Image.defaultProps = {
  shape: "",
  src: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/09/13/109219735.1.jpg",
  _onClick: () => {},
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectInnerHover = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default Image;
