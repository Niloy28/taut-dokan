import type { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../../utils/prismaClient";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const products = await Prisma.product.findMany();

		res.status(200).json(products);
	} else {
		res.status(405).json({ errorMsg: "Method not allowed" });
	}
}
