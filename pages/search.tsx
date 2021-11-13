import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { useSceneSpots } from "services/sceneSpots";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import banner04 from "public/img/banner04.jpg";

import Navbar from "components/Navbar";
import Carousel from "components/Carousel";
import SearchAutoComplete from "components/SearchAutoComplete";
import SortSelect from "components/SortSelect";
import SearchPanelVertical from "components/SearchPanelVertical";
import SceneInfoCard from "components/SceneInfoCard";
import SceneInfoPagination from "components/SceneInfoPagination";
import NavBreadCrumbs from "components/NavBreadCrumbs";
import Footer from "components/Footer";

const NavBreadCrumbContainer = styled("div")`
  margin-top: 18px;
  margin-bottom: 30px;
`;

const SceneSpotsTitle = styled(Typography)`
  margin-bottom: 18px;
`;

const SceneSpotsCarouselContainer = styled("div")`
  margin-bottom: 50px;
`;

const Search: NextPage = () => {
  const { spots } = useSceneSpots();

  console.log(spots);

  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar color="secondary" />
      <Image
        src={banner04}
        alt="search page banner"
        // width={500} automatically provided
        height={140}
        objectFit="cover"
        objectPosition="center"
      />
      <Container>
        <NavBreadCrumbContainer>
          <NavBreadCrumbs />
        </NavBreadCrumbContainer>

        <SceneSpotsTitle typography={"h1"} color="info.main">
          熱門景點
        </SceneSpotsTitle>
        <SceneSpotsCarouselContainer>
          <Carousel />
        </SceneSpotsCarouselContainer>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingBottom={"30px"}
        >
          <SearchAutoComplete />
          <SortSelect />
        </Stack>
        <Grid container spacing={"32px"}>
          <Grid item xs={4}>
            <SearchPanelVertical />
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={"44px"} marginBottom={"70px"}>
              <SceneInfoCard />
              <SceneInfoCard />
              <SceneInfoCard />
              <SceneInfoCard />
            </Stack>
            <SceneInfoPagination />
          </Grid>
        </Grid>
      </Container>

      <Footer color={"secondary"}>
        <Typography>
          TaiwanTravel © 2021 Designer Vum. Engineer Jasper Chen. All rights
          reserved.
        </Typography>
      </Footer>
    </>
  );
};

export default Search;
