import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { IoTimeOutline } from "react-icons/io5";
import { formatDate, formatTime } from "../lib/formatters";

const SongsTable = ({ songs }) => {
  return (
    <TableContainer paddingInline="40px">
      <Table variant="unstyled">
        <Thead borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.2)">
          <Tr>
            <Th>#</Th>
            <Th># title</Th>
            <Th>date added</Th>
            <Th>
              <IoTimeOutline fontSize={18} color="#fff" />
            </Th>
          </Tr>
        </Thead>
        <Tbody color="gray.300">
          {songs.map((song, i) => (
            <Tr
              key={song.id}
              sx={{
                transition: "all 0.3s ease",
                ":hover": {
                  bg: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Td>{i + 1}</Td>
              <Td>{song.name}</Td>
              <Td>{formatDate(song.createAt)}</Td>
              <Td>{formatTime(song.duration)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SongsTable;
