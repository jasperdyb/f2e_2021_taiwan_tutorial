import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";

import { useSceneSpots } from "../services/sceneSpots";
import Background from "../components/Background";

import banner01 from "../public/img/banner01.jpg";

const CustomizedButton = muiStyled(Button)`
  background-color: green;
  color: red;
`;
const Title = styled.h1`
  color: red;
`;

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
        <Title> 蘋方體QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ</Title>
        <CustomizedButton variant="text">Text</CustomizedButton>
      </Background>
    </>
  );
};

export default Home;
