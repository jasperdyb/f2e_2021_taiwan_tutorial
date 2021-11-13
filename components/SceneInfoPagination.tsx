import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";

import Pagination from "@mui/material/Pagination";

const CustomPagination = styled(Pagination)`
  & .MuiPagination-ul {
    justify-content: flex-end;
  }

  & .MuiPaginationItem-root {
    border-radius: 10px;
    border-color: #a5a5a5;
    color: #a5a5a5;
  }

  & .MuiPaginationItem-previousNext {
    border-color: #7baebe;
    color: #7baebe;
  }

  & .MuiPaginationItem-previousNext.Mui-disabled {
    border: none;
    color: #bcbcbc;
    background-color: #e6e6e6;
  }

  & .Mui-selected {
    background-color: #7baebe;
    color: #ffffff;
    border: none;
  }
`;

const SceneInfoPagination: React.FC = () => {
  const theme = useTheme();
  return (
    <CustomPagination
      size="large"
      count={10}
      variant="outlined"
      shape="rounded"
    />
  );
};
export default SceneInfoPagination;
