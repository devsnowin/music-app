import { useState, useEffect } from "react";
import { JwtPayload } from "jsonwebtoken";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { BsPlayFill } from "react-icons/bs";

import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import GradientLayout from "../../components/GradientLayout";
import SongsTable from "../../components/SongsTable";

const generateRandomColor = () => {
  const colors = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "purple",
    "teal",
    "blue",
    "pink",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ data }) => {
  const [playlist, setPlaylist] = useState(JSON.parse(data));
  useEffect(() => setPlaylist(JSON.parse(data)), [data]);

  const bgColor = generateRandomColor();

  return (
    <GradientLayout
      color={bgColor}
      subtitle={"PLAYLIST"}
      title={playlist?.name}
      desc={`${playlist?.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist?.id}`}
      roundImage={false}
      isLoading={false}
    >
      <Box bg="transparent" margin="0 40px 40px 40px">
        <IconButton
          icon={<BsPlayFill color="#181818" fontSize="38px" />}
          boxSize="58px"
          aria-label="play button"
          colorScheme={bgColor}
          isRound
        />
      </Box>
      <SongsTable songs={playlist?.songs} />
    </GradientLayout>
  );
};

export default Playlist;

export const getServerSideProps = async ({ query, req }) => {
  let user;
  try {
    user = validateToken(req.cookies.MUSIC_ACCESS_TOKEN) as JwtPayload;
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  const playlist = await prisma.playlist.findFirst({
    where: {
      id: query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { data: JSON.stringify(playlist) },
  };
};
