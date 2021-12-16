import React from "react";
import styled from "styled-components";
import search from "../icons/search.svg";
import { Input } from "../elements";

const RightSearch = (props) => {
  return (
    <React.Fragment>
      <SearchBox>
        <Input is_search placeholder="Search Twitter" height="42px" />
        <SearchIcon />
      </SearchBox>
    </React.Fragment>
  );
};

const SearchBox = styled.div`
  width: 348px;
  height: 42px;
  position: relative;
  right: 0;
`;

const SearchIcon = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${search});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
`;

export default RightSearch;
