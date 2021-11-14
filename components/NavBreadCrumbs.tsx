import React from "react";
import styled from "styled-components";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";

const CustomDiv = styled("div")``;

const NavBreadCrumbs: React.FC = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link underline="hover" color="inherit" href="/">
        首頁
      </Link>
      <Typography color="info.main">景點查詢</Typography>
    </Breadcrumbs>
  );
};
export default NavBreadCrumbs;
