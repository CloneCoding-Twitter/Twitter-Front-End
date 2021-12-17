import React from "react";
import styled from "styled-components";

import { Text, Grid } from ".";

const Input = (props) => {
  const {
    label,
    padding,
    size,
    bold,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    bginput,
    is_search,
    is_tweet,
    line,
  } = props;

  const styles = {
    padding: padding,
    size: size,
    bold: bold,
    line: line,
  };

  // ---- 게시물 작성 내용 영역  ----
  if (multiLine) {
    return (
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElTextarea
          rows={5}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  if (bginput) {
    return (
      <Grid>
        <Text margin="0px" size="16px" bold color="#333">
          {label}
        </Text>
        <Underline type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    );
  }

  if (is_search) {
    return (
      <Grid>
        <SearchInput
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Grid>
    );
  }

  if (is_tweet) {
    return (
      <Grid>
        <TweetTextarea
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px" size="14px">
          {label}
        </Text>
        <ElInput {...styles} type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};



Input.defaultProps = {
  multiLine: false,
  label: "",
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  padding: false,
  size: false,
  bold: false,
  line: false,
  _onChange: () => {},
  checked: "",
  is_search: false,
  is_tweet: false,
};

//---- 게시물 작성 내용 영역 ----
const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ElInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  word-break: keep-all;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.size ? `font-size: ${props.size};` : "")};
  ${(props) => (props.bold ? `font-weight: ${props.bold};` : "")};
  ${(props) => (props.line ? `line-height: ${props.line};` : "")};
  &:focus
    border: none;
    outline: none;
  }
`;

const Underline = styled.input`
  border: none;
  width: 100%;
  margin: 4px 0 11px 0;
  background: #fff;
  border: 1px solid #eee;
  padding: 12px;
  border-radius: 5px;
  box-sizing: border-box;
  :focus {
    outline: none;
    border: 1px solid #777;
  }
`;

const SearchInput = styled.input`
  width: 348px;
  height: 42px;
  border: none;
  padding-left: 50px;
  background-color: #f7f9fa;
  border-radius: 50px;

  &:focus {
    background-color: #fff;
    border: 1.7px solid #1da1f2;
    outline: none;
  }
`;

const TweetTextarea = styled.textarea`
  border: none;
  resize: none;
  overflow: scroll;
  font-size: 22px;
  font-weight: 500;
  word-break:break-all;
  width: 100%;
  height: auto;
  padding: 0 3px;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
