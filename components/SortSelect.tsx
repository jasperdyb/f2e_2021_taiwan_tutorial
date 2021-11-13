import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const CustomDiv = styled("div")``;

const SortSelect: React.FC = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Select
      value={age}
      onChange={handleChange}
      displayEmpty
      IconComponent={SwapVertIcon}
      sx={{
        "& .MuiSelect-icon": {
          left: 4,
        },

        "& .MuiSelect-select": { paddingLeft: "32px" },
      }}
    >
      <MenuItem value="">
        <em>Default</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
};
export default SortSelect;
