import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";

import { SceneTypeOptions } from "types/sceneSpots";

const CustomDiv = styled("div")``;

const SearchPanelTypeList: React.FC = () => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Grid container>
          {SceneTypeOptions.map((item, index) => (
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
