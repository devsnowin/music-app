import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

import { artistsData } from "./songsData";

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

  const user = prisma.user.upsert({
    where: { email: "user@tem.com" },
    update: {},
    create: {
      name: "test user",
      email: "user@test.com",
      password: await bcrypt.hash("123", 10),
    },
  });
};

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
