// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sampleData } from "util/data/top";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { top } = req.query;

    const data = sampleData.find((data) => data.id === parseInt(top as string));
    res.status(200).json(data);
  } catch (e: any) {
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
