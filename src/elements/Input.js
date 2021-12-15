import React from "react";
import styled from "styled-components";

import { Text, Grid } from ".";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    bginput,
    is_search,
  } = props;

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

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px" size="14px">
          {label}
        </Text>
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: "텍스트",
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
  checked: "",
  is_search: false,
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
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
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
export default Input;
