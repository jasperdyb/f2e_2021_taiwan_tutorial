import React, { useState } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import SearchSelect from "components/SearchSelect";

const SearchPanelCard = styled(Card)`
  padding: 30px 18px;
`;

const SearchPanelSelect = styled(Select)`
  min-width: 270px;
  height: 50px;
  border-radius: 10px;
`;

const SearchButton = styled(Button)`
  min-width: 142px;
  height: 50px;
`;

const SearchPanel: React.FC = () => {
  const [region, setRegion] = useState("10");
  const [city, setCity] = useState("30");

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

  return (
    <SearchPanelCard raised>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={"32px"}
      >
        <Grid item>
          <Grid item container spacing={"18px"}>
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
          </Grid>
        </Grid>
        <Grid item>
          <SearchButton disableElevation variant="contained">
            Search
          </SearchButton>
        </Grid>
      </Grid>
    </SearchPanelCard>
  );
};

export default SearchPanel;
