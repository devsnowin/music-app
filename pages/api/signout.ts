import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("MUSIC_ACCESS_TOKEN", "", {
      maxAge: -1,
      path: "/",
    })
  );

  return res.status(200).json({ message: "logged out" });
}
