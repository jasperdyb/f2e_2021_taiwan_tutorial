import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import RoomIcon from "@mui/icons-material/Room";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import TouchAppIcon from "@mui/icons-material/TouchApp";

import banner04 from "public/img/banner04.jpg";

const CustomDiv = styled("div")``;

const SceneInfoCard: React.FC = () => {
  const theme = useTheme();
  return (
    <Card>
      <CardActionArea>
        <Grid direction="row" container>
          <Grid item xs={5} sx={{ backgroundColor: "red" }}>
            <div
              style={{
                backgroundColor: "salmon",
                position: "relative",
                height: "240px",
                width: "100%",
              }}
            >
              <Image
                src={banner04}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="search page banner"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={7}
            container
            direction="column"
            padding="18px"
            rowSpacing={"8px"}
          >
            <Grid item>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignContent={"center"}
              >
                <Typography color="info.main">紫坪</Typography>
                <Chip label="自然風景" />
              </Stack>
            </Grid>
            <Grid item flex={1}>
              <Typography>
                帆船鼻位於綠島東南角，有「綠島地毯」之稱，可由朝日溫泉售票口旁邊的小徑沿步道而上。由於地形突出，地勢又高出四周，屬東北季季風可長驅直入的衝風帶；再加上後天的放牧
                ......
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                  <Stack direction="row" alignItems={"center"}>
                    <RoomIcon color="info" fontSize="small" />
                    <Typography>臺東縣綠島鄉</Typography>
                  </Stack>
                  <Stack direction="row" alignItems={"center"}>
                    <WatchLaterIcon color="info" fontSize="small" />
                    <Typography>全天開放</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems={"center"}>
                  <TouchAppIcon color="primary" fontSize="small" />
                  <Typography>1234</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
export default SceneInfoCard;
