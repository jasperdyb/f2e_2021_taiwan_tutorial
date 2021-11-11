import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// import styled from "styled-components";
import { styled } from "@mui/material/styles";

// const CustomAppBar = styled.div`
const CustomAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  padding: 0 140px;
  color: #fff;
`;

const menu = ["旅遊情報", "景點查詢", "美食推薦", "旅宿資訊", "節慶活動"];

const Navbar: React.FC = () => {
  return (
    <CustomAppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TAIWAN TRAVEL
        </Typography>
        {menu.map((item, index) => (
          <Button key={index} color="inherit">
            {item}
          </Button>
        ))}
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
