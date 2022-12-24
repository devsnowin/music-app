import { Box, Flex, Text } from '@chakra-ui/react';
import PlaylistCard from '../../components/PlaylistCard';
import { usePlaylist } from '../../lib/hooks';

const playlist = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { playlists } = usePlaylist();

	return (
		<Box p='40px'>
			<Box paddingBlock='2rem'>
				<Text fontSize='6xl' fontWeight='extrabold' lineHeight='1'>
					Playlists
				</Text>
			</Box>
			<Flex
				w='fit-content'
				h='fit-content'
				align='center'
				gap='1rem'
				flexWrap='wrap'
			>
				{playlists.map((playlist) => (
					<PlaylistCard key={playlist.id} playlist={playlist} />
				))}
			</Flex>
		</Box>
	);
};

export default playlist;
