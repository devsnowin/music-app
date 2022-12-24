import { useState, useEffect } from "react";
import { JwtPayload } from "jsonwebtoken";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { MdPlayCircle } from "react-icons/md";

import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import GradientLayout from "../../components/GradientLayout";
import SongsTable from "../../components/SongsTable";
import { useStoreActions } from "easy-peasy";

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

  const playSongs = useStoreActions((store: any) => store.changeActiveSongs);
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong);

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || playlist?.songs[0]);
    playSongs(playlist?.songs);
  };

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
          icon={<MdPlayCircle fontSize="48px" />}
          color={"white"}
          variant="link"
          isRound
          aria-label="play button"
          onClick={() => handlePlay()}
        />
      </Box>
      <SongsTable songs={playlist?.songs} handlePlay={handlePlay} />
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
