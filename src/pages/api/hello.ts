// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;
type Data = {
  name?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = await getToken({ req, secret });
  console.log("JSON Web Token", token);

  console.log(token);

  if (Date.now() >= token.exp * 1000) {
    return res.status(400).json({ message: "Token หมเอายุ" });
  }
  res.status(200).json({ name: "John Doe" });
}
