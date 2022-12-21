import Head from "next/head";
import { Flex, Heading, Box } from "@chakra-ui/react";
import Playlists from "../components/Playlists";
import TrackCard from "../components/TrackCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Music App | Home</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Box padding="2rem">
        <Heading>Good evening</Heading>
        <Flex gap="2rem" flexWrap="wrap" margin="2rem 0 6rem 0">
          <Playlists />
          <Playlists />
          <Playlists />
        </Flex>
        <Heading as="h2" size="md">
          Top Tracks
        </Heading>

        <Flex marginBlock="2rem">
          <TrackCard />
        </Flex>
      </Box>
    </>
  );
}
