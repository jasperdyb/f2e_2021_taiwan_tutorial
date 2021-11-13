import React, { useState } from "react";

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
  const [region, setRegion] = useState("10");
  const [city, setCity] = useState("30");

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
              selections={regionSelections}
              value={region}
              onChange={(event: SelectChangeEvent<unknown>) => {
                setRegion(event.target.value as string);
              }}
            />
          </Grid>
          <Grid item>
            <SearchSelect
              selections={citySelections}
              value={region}
              onChange={(event: SelectChangeEvent<unknown>) => {
                setCity(event.target.value as string);
              }}
            />
          </Grid>
        </FilterGrid>
        <FilterDivider />
        <Typography typography={"h1"} color="info.main">
          類別
        </Typography>
        <SearchPanelTypeList></SearchPanelTypeList>
        <Stack direction={"row"} justifyContent={"center"}>
          <SearchButton disableElevation variant="contained">
            Search
          </SearchButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

const regionSelections = [
  {
    title: "北部地區",
    value: 10,
  },
  {
    title: "中部地區",
    value: 20,
  },
  {
    title: "南部地區",
    value: 30,
  },
];

const citySelections = [
  {
    title: "台北市",
    value: 10,
  },
  {
    title: "台中市",
    value: 20,
  },
  {
    title: "台南市",
    value: 30,
  },
];
export default SearchPanelVertical;
