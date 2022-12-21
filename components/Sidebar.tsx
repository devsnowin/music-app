import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { VStack, HStack, Heading, Divider, Icon, Text } from "@chakra-ui/react";
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
    <VStack padding="2rem 1rem 0" alignItems="flex-start" h="full">
      <HStack paddingBlock="1rem">
        <Image src="/logo.png" alt="app logo" width={42} height={42} />
        <Heading as={Link} href="/" size="md">
          Music App
        </Heading>
      </HStack>

      <VStack
        alignItems="flex-start"
        paddingBlock="1rem"
        gap="0.4rem"
        color="gray.700"
        w="full"
      >
        {navMenu.map((menu, i) => (
          <HStack
            key={i}
            as={Link}
            href={menu.route}
            w="full"
            alignItems="center"
            gap="0.4rem"
            color={`${pathname === menu.route && "#fff"}`}
            transition="all 0.3s ease"
            _hover={{ color: "#fff" }}
          >
            <Icon as={menu.icon} w={6} h={6} />
            <Heading size="xs">{menu.name}</Heading>
          </HStack>
        ))}
      </VStack>

      <VStack
        alignItems="flex-start"
        paddingBlock="1rem"
        gap="0.4rem"
        color="gray.700"
      >
        <HStack
          alignItems="center"
          gap="0.4rem"
          color={`${pathname === "/newPlaylist" && "#fff"}`}
          transition="all 0.3s ease"
          _hover={{ color: "#fff" }}
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
          transition="all 0.3s ease"
          _hover={{ color: "#fff" }}
        >
          <FcLike size={28} />
          <Heading as={Link} href="/likedSongs" size="xs">
            Liked Songs
          </Heading>
        </HStack>
      </VStack>
      <Divider color="gray.800" />
      <VStack
        w="full"
        paddingBlock="1rem"
        alignItems="flex-start"
        overflowY="auto"
      >
        {playlistMenu.map((playlist, i) => (
          <Link key={i} href={playlist.route} style={{ color: "#757575" }}>
            {playlist.name.toLowerCase()}
          </Link>
        ))}
      </VStack>

      <Text paddingBlock="1rem" color="gray.800">
        2022 © Snowin
      </Text>
    </VStack>
  );
};

export default Sidebar;
