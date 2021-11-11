import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import styled from "styled-components";

import { styled as muiStyled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { useSceneSpots } from "services/sceneSpots";
import Background from "components/Background";
import Navbar from "components/Navbar";
import SearchPanel from "components/SearchPanel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import banner01 from "public/img/banner01.jpg";
import taiwan_logo_white from "public/svg/taiwan_logo_white.svg";

const Home: NextPage = () => {
  const { spots } = useSceneSpots();

  console.log(spots);

  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background src={banner01}>
        <Navbar />
        <Container maxWidth="sm">
          <Image
            src={taiwan_logo_white}
            alt="Taiwan Logo"
            objectPosition="center"
            objectFit="cover"
          />
        </Container>
        <Grid container justifyContent="center">
          <Grid item>
            <SearchPanel />
          </Grid>
        </Grid>
      </Background>
    </>
  );
};

export default Home;
