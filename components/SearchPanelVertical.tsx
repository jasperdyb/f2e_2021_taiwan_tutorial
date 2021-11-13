import React, { useState } from "react";
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
import { styled } from "@mui/material/styles";

import SearchPanelTypeList from "components/SearchPanelTypeList";

const SearchPanelSelect = styled(Select)`
  min-width: 270px;
  height: 50px;
  border-radius: 10px;
`;

const SearchButton = styled(Button)`
  min-width: 142px;
  height: 50px;
`;

const SearchPanelVertical: React.FC = () => {
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
      <CardContent>
        <Typography>篩選內容</Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography color="info.main">地區/縣市</Typography>
          </Grid>
          <Grid item container spacing={"18px"}>
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
          <Grid item>
            <SearchButton disableElevation variant="contained">
              Search
            </SearchButton>
          </Grid>
        </Grid>
        <Divider />
        <Stack>
          <Typography color="info.main">類別</Typography>
          <SearchPanelTypeList></SearchPanelTypeList>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SearchPanelVertical;
