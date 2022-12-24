import { PropsWithChildren } from "react";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import PlayerBar from "./PlayerBar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex w="100vw" minH="100vh">
      <Box pos="relative" bg="black" w="18rem" h="calc(100vh - 10vh)">
        <Sidebar />
      </Box>
      {children}
      <Box bg="darkGray" position="absolute" bottom="0" w="100vw" h="10vh">
        <PlayerBar />
      </Box>
    </Flex>
  );
};

export default Layout;
