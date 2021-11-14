import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import SearchPanelTypeList from "components/SearchPanelTypeList";
import SearchSelect from "components/SearchSelect";

import { RegionOptions, CityOptions } from "types/sceneSpots";
import { useSceneSpotContext } from "context/sceneSpot";

const FilterTypography = styled(Typography)`
  margin-bottom: 16px;
`;

const FilterGrid = styled(Grid)`
  margin-bottom: 16px;
`;

const FilterDivider = styled(Divider)`
  margin-bottom: 16px;
`;

const SearchButton = styled(Button)`
  min-width: 142px;
  height: 50px;
`;

const SearchPanelVertical: React.FC = () => {
  const { region, setRegion, city, setCity, citySelections } =
    useSceneSpotContext();

  return (
    <Card raised>
      <CardContent>
        <FilterTypography typography={"h2"}>篩選內容</FilterTypography>
        <FilterGrid container spacing={"18px"}>
          <Grid item xs={12}>
            <Typography typography={"h1"} color="info.main">
              地區/縣市
            </Typography>
          </Grid>
          <Grid item>
            <SearchSelect
              selections={RegionOptions}
              value={region}
              onChange={(event: SelectChangeEvent<unknown>) => {
                setRegion(event.target.value as number);
              }}
            />
          </Grid>
          <Grid item>
            <SearchSelect
              selections={citySelections}
              value={city}
              onChange={(event: SelectChangeEvent<unknown>) => {
                setCity(event.target.value as number);
              }}
            />
          </Grid>
        </FilterGrid>
        <FilterDivider />
        <Typography typography={"h1"} color="info.main">
          類別
        </Typography>
        <SearchPanelTypeList />
        <Stack direction={"row"} justifyContent={"center"}>
          <SearchButton disableElevation variant="contained">
            Search
          </SearchButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SearchPanelVertical;
