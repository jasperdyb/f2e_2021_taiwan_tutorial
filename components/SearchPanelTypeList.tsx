import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";

const CustomDiv = styled("div")``;

const options = [
  {
    value: "female",
    label: "female",
  },
  {
    value: "male",
    label: "male",
  },
  {
    value: "other",
    label: "other",
  },
];

const SearchPanelTypeList: React.FC = () => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Grid container>
          {options.map((item, index) => (
            <Grid item key={index} xs={12}>
              <FormControlLabel
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};
export default SearchPanelTypeList;
