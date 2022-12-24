import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import { artistsData, playlistNames } from './songsData';

const prisma = new PrismaClient();

const run = async () => {
	await Promise.all(
		artistsData.map(async (artist) => {
			return prisma.artist.upsert({
				where: { name: artist.name },
				update: {},
				create: {
					name: artist.name,
					songs: {
						create: artist.songs.map((song) => ({
							name: song.name,
							duration: song.duration,
							url: song.url,
							likes: song.likes,
						})),
					},
				},
			});
		})
	);

	const user = await prisma.user.upsert({
		where: { email: 'snowin@gmail.com' },
		update: {},
		create: {
			name: 'Snowin',
			email: 'snowin@gmail.com',
			password: await bcrypt.hash('123', 10),
		},
	});

	const songs = await prisma.song.findMany({});
	await Promise.all(
		playlistNames.map((name, i) => {
			return prisma.playlist.create({
				data: {
					name: name,
					user: {
						connect: { id: user.id },
					},
					songs: {
						connect: songs.map((song) => ({ id: song.id })),
					},
				},
			});
		})
	);
};

run()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(async () => await prisma.$disconnect());
