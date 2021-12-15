import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const { shape, src, size,} = props;

    const styles = {
        src: src,
        size: size,

    }
    
    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = { 
  shape: "",
  src: "../icons/pysick.jpg",
  size: 40,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  display: ${(props) => props.preview? 'block': 'none'};
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
    margin: 4px;
`;


export default Image;