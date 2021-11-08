import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useSceneSpots } from "../services/sceneSpots";

const CustomizedButton = styled(Button)`
  background-color: green;
  color: red;
`;

const Home: NextPage = () => {
  const { spots } = useSceneSpots();

  console.log(spots);

  return (
    <div>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Hello World</h1>
      <CustomizedButton variant="text">Text</CustomizedButton>
    </div>
  );
};

export default Home;
