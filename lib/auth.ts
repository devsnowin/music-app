import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

const SECRET_KEY = process.env.JWT_SECRET || "cookies";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
      const token = req.cookies.MUSIC_ACCESS_TOKEN;

    if (token) {
      try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await prisma.user.findUnique({ where: { id } });

        if (!user) throw new Error("Invalid credentials");
        return handler(req, res, user);
      } catch (e) {
        return res.status(401).json({ message: "Not Authorizied" });
      }
    }

    return res.status(401).json({ message: "Not Authorizied" });
  };
};
