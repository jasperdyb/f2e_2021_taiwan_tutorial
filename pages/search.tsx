import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import styled from "styled-components";

import { styled as muiStyled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Navbar from "components/Navbar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

import { useSceneSpots } from "services/sceneSpots";
import banner04 from "public/img/banner04.jpg";
import Background from "components/Background";
import Carousel from "components/Carousel";

const carouselImageSize = {
  height: 212,
  width: 444,
};

const CarouselImageContainer = styled("div")``;

const CarouselContainer = styled(Stack)`
  background-color: pink;
  overflow: hidden;
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
      <Navbar />
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
        <Carousel></Carousel>
      </Container>
    </>
  );
};

export default Search;
