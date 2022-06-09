import { sampleData } from "util/data/top";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!Array.isArray(sampleData)) {
      throw new Error("Can't use data");
    }

    res.status(200).json(sampleData);
  } catch (e: any) {
    res.status(500).json({ statusCode: 500, message: e.message });
  }
}
