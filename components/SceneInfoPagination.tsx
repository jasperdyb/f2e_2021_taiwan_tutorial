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
