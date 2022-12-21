import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { VStack, HStack, Heading, Divider, Icon } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { AiOutlineFolderAdd } from "react-icons/ai";

const Sidebar = () => {
  const { pathname } = useRouter();

  const navMenu = [
    {
      name: "Home",
      icon: AiFillHome,
      route: "/",
    },
    {
      name: "Search",
      icon: AiOutlineSearch,
      route: "/search",
    },
    {
      name: "Your Playlist",
      icon: RiPlayListFill,
      route: "/playlist",
    },
  ];

  const playlistMenu = [
    {
      name: "Let's Rock 🤘",
      route: "/playlist/lets-rock",
    },
    {
      name: "UV Mashup 🎤",
      route: "/playlist/uv-mashup",
    },
    {
      name: "UV Drugs 💊",
      route: "/playlist/uv-drugs",
    },
  ];

  return (
    <VStack padding="2rem 1rem" alignItems="flex-start">
      <HStack paddingBlock="1rem">
        <Image src="/logo.png" alt="app logo" width={42} height={42} />
        <Heading as={Link} href="/" size="md">
          Music App
        </Heading>
      </HStack>

      <VStack
        alignItems="flex-start"
        paddingBlock="1rem"
        gap="0.5rem"
        color="#757575"
      >
        {navMenu.map((menu, i) => (
          <HStack
            key={i}
            as={Link}
            href={menu.route}
            alignItems="center"
            gap="0.4rem"
            color={`${pathname === menu.route && "#fff"}`}
          >
            <Icon as={menu.icon} w={6} h={6} />
            <Heading size="xs">{menu.name}</Heading>
          </HStack>
        ))}
      </VStack>

      <VStack
        alignItems="flex-start"
        paddingBlock="1rem"
        gap="0.5rem"
        color="#757575"
      >
        <HStack
          alignItems="center"
          gap="0.4rem"
          color={`${pathname === "/newPlaylist" && "#fff"}`}
        >
          <AiOutlineFolderAdd size={28} />
          <Heading as={Link} href="/newPlaylist" size="xs">
            Create Playlist
          </Heading>
        </HStack>
        <HStack
          alignItems="center"
          gap="0.5rem"
          color={`${pathname === "/likedSongs" && "#fff"}`}
        >
          <FcLike size={28} />
          <Heading as={Link} href="/likedSongs" size="xs">
            Liked Songs
          </Heading>
        </HStack>
      </VStack>
      <Divider />
      <VStack paddingBlock="1rem" alignItems="flex-start">
        {playlistMenu.map((playlist, i) => (
          <Link key={i} href={playlist.route} style={{ fontWeight: "bold" }}>
            {playlist.name}
          </Link>
        ))}
      </VStack>
    </VStack>
  );
};

export default Sidebar;
