import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import prisma from '../lib/prisma';
import GradientLayout from '../components/GradientLayout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ArtistCard from '../components/ArtistCard';
import { useMe } from '../lib/hooks';

export default function Home({ data }) {
	const { user, isLoading } = useMe();
	const [artists, setArtists] = useState(JSON.parse(data));

	useEffect(() => {
		setArtists(JSON.parse(data));
	}, [data]);

	return (
		<Fragment>
			<Head>
				<title>Music App | Home</title>
				<link rel='icon' href='/logo.png' />
			</Head>
			<GradientLayout
				color='purple'
				title={user?.name}
				subtitle='profile'
				desc={`${user?.playlistsCount} Public Playlists`}
				image='/profile-pic.jpg'
				roundImage={true}
				isLoading={isLoading}
			>
				<Box padding='20px 80px'>
					<Box>
						<Heading fontWeight='bold'>Top Artist</Heading>
						<Text fontSize='md'>Only visible to you</Text>
					</Box>
					<Flex
						align='center'
						gap='2rem'
						flexWrap='wrap'
						marginBlock='4rem 2rem'
					>
						{artists ? (
							artists.map((artist) => (
								<ArtistCard key={artist.id} artist={artist} />
							))
						) : (
							<Text>Loading.....</Text>
						)}
					</Flex>
				</Box>
			</GradientLayout>
		</Fragment>
	);
}

export const getServerSideProps = async () => {
	const artists = await prisma.artist.findMany({});

	return {
		props: { data: JSON.stringify(artists) },
	};
};
