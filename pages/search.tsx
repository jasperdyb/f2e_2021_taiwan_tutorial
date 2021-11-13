import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSceneSpots } from "services/sceneSpots";

import Container from "@mui/material/Container";
import Navbar from "components/Navbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import banner04 from "public/img/banner04.jpg";

import Carousel from "components/Carousel";
import SearchAutoComplete from "components/SearchAutoComplete";
import SortSelect from "components/SortSelect";
import SearchPanelVertical from "components/SearchPanelVertical";
import SceneInfoCard from "components/SceneInfoCard";

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
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/">
            首頁
          </Link>
          <Typography color="info.main">景點查詢</Typography>
        </Breadcrumbs>
        <Typography color="info.main">熱門景點</Typography>
        <Carousel />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SearchAutoComplete />
          <SortSelect />
        </Stack>
        <Grid container spacing={"32px"}>
          <Grid item xs={4}>
            <SearchPanelVertical />
          </Grid>
          <Grid item xs={8}>
            <SceneInfoCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Search;
