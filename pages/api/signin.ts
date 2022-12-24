import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";

import prisma from "../../lib/prisma";

const SECRET_KEY = process.env.JWT_SECRET || "cookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    const isValidPassword = user
      ? await bcrypt.compare(password, user?.password)
      : null;
    if (user && isValidPassword) {
      const token = jwt.sign(
        { id: user.id, name: user.name, time: Date.now() },
        SECRET_KEY,
        { expiresIn: "8h" }
      );

      res.setHeader(
        "Set-Cookie",
		cookie.serialize("MUSIC_ACCESS_TOKEN", token, {
          httpOnly: true,
          maxAge: 8 * 60 * 60,
          path: "/",
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
        })
      );

      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "user not found" });
  }
}
