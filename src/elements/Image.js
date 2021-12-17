import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { main, preview, shape, src, size } = props;
  // console.log(src)
  // console.log(preview)

  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (main) {
    return <MainImage {...styles}/>
  }
  
  if (preview) {
    return <Preview {...styles}/>
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  main: false,
  preview: false,
  shape: "",
  src: "../icons/pysick.jpg",
  size: '40',
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  /* display: ${(props) => (props.preview ? "block" : "none")}; */

  border: 1px solid green;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  border-radius: 10px;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  padding: 5px;
  box-sizing: border-box;
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MainImage = styled.div`
  width: 95%;
  min-height: 283.5px;
  height: auto;
  border: 1px solid #efefef;
  border-radius: 20px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Preview = styled.div`
  width: 95%;
  min-height: 283.5px;
  display: ${(props) => props.preview? 'block': 'none'};
  background-image: url("${(props) => props.src}");
  border-radius: 15px;
`

export default Image;
