import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

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
    <Card raised>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={"32px"}
        padding={"30px 18px"}
      >
        <Grid item>
          <Grid container spacing={"18px"}>
            <Grid item>
              <SearchPanelSelect
                labelId="region-label"
                value={region}
                onChange={(event: SelectChangeEvent<unknown>) => {
                  setRegion(event.target.value as string);
                }}
              >
                {regionSelections.map(
                  (item: { title: string; value: number }, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.title}
                    </MenuItem>
                  )
                )}
              </SearchPanelSelect>
            </Grid>
            <Grid item>
              <SearchPanelSelect
                value={city}
                onChange={(event: SelectChangeEvent<unknown>) => {
                  setCity(event.target.value as string);
                }}
              >
                {citySelections.map(
                  (item: { title: string; value: number }, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.title}
                    </MenuItem>
                  )
                )}
              </SearchPanelSelect>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <SearchButton disableElevation variant="contained">
            Search
          </SearchButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchPanel;
