import { useRouter } from 'next/router';
import Link from 'next/link';
import { VStack, HStack, Heading, Divider, Icon, Text } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiPlayListFill } from 'react-icons/ri';
import { FcLike } from 'react-icons/fc';
import { HiMusicNote } from 'react-icons/hi';

import { usePlaylist } from '../lib/hooks';
import { signout } from '../lib/mutations';
import { colorScheme, generateRandomColor } from '../lib/ui';

const navMenu = [
	{
		name: 'Home',
		icon: AiFillHome,
		route: '/',
	},
	{
		name: 'Search',
		icon: AiOutlineSearch,
		route: '/search',
	},
	{
		name: 'Your Playlist',
		icon: RiPlayListFill,
		route: '/playlist',
	},
];

const Sidebar = () => {
	const router = useRouter();
	const { playlists } = usePlaylist();

	const handleSignout = async () => {
		await signout();
		router.push('/signin');
	};

	return (
		<VStack padding='2rem 1rem 0' alignItems='flex-start' h='full'>
			<HStack paddingBlock='1rem'>
				<HiMusicNote fontSize={38} color='#6b46c1' />
				<Heading as={Link} href='/' size='md'>
					Music App
				</Heading>
			</HStack>

			<VStack
				alignItems='flex-start'
				paddingBlock='1rem'
				gap='0.4rem'
				color='gray.700'
				w='full'
			>
				{navMenu.map((menu, i) => (
					<HStack
						key={i}
						as={Link}
						href={menu.route}
						w='full'
						alignItems='center'
						gap='0.4rem'
						color={`${router.pathname === menu.route && '#fff'}`}
						transition='all 0.3s ease'
						_hover={{ color: '#fff' }}
					>
						<Icon as={menu.icon} w={6} h={6} />
						<Heading size='xs'>{menu.name}</Heading>
					</HStack>
				))}
			</VStack>

			<VStack
				alignItems='flex-start'
				paddingBlock='1rem'
				gap='0.4rem'
				color='gray.700'
			>
				<HStack
					alignItems='center'
					gap='0.4rem'
					color={`${router.pathname === '/newPlaylist' && '#fff'}`}
					transition='all 0.3s ease'
					_hover={{ color: '#fff' }}
				>
					<AiOutlineFolderAdd size={28} />
					<Heading as={Link} href='/newPlaylist' size='xs'>
						Create Playlist
					</Heading>
				</HStack>
				<HStack
					alignItems='center'
					gap='0.5rem'
					color={`${router.pathname === '/likedSongs' && '#fff'}`}
					transition='all 0.3s ease'
					_hover={{ color: '#fff' }}
				>
					<FcLike size={28} />
					<Heading as={Link} href='/likedSongs' size='xs'>
						Liked Songs
					</Heading>
				</HStack>
			</VStack>
			<Divider color='gray.800' />
			<VStack
				w='full'
				paddingBlock='1rem'
				alignItems='flex-start'
				overflowY='auto'
			>
				{playlists.map((playlist) => (
					<Link
						key={playlist.id}
						href={`/playlist/${playlist.id}`}
						style={{ color: '#757575' }}
					>
						{playlist.name.toLowerCase()}
					</Link>
				))}
			</VStack>
			<VStack pos='absolute' bottom='4' gap='0.5rem'>
				<HStack
					alignItems='center'
					gap='0.5rem'
					color={`${router.pathname === '/likedSongs' && '#fff'}`}
					transition='all 0.3s ease'
					_hover={{ color: '#fff' }}
				>
					<AiOutlineLogout size={26} />
					<Heading
						as={Link}
						onClick={handleSignout}
						bg='transparent'
						href='/'
						size='xs'
					>
						Sign Out
					</Heading>
				</HStack>
				<Text color='gray.800'>2022 © Snowin</Text>
			</VStack>
		</VStack>
	);
};

export default Sidebar;
