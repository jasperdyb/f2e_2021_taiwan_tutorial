import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const CustomSelect = styled(Select)`
  & .MuiSelect-icon {
    left: 4px;
  }

  & .MuiSelect-select {
    padding-left: 32px;
  }
`;

const SortSelect: React.FC = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };

  return (
    <CustomSelect
      value={age}
      onChange={handleChange}
      displayEmpty
      IconComponent={SwapVertIcon}
    >
      <MenuItem value="">
        <em>Default</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </CustomSelect>
  );
};
export default SortSelect;
