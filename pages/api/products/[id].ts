import type { NextApiRequest, NextApiResponse } from "next";
import Prisma from "../../../utils/prismaClient";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const id = req.query.id as string;
		const product = await Prisma.product.findUnique({
			where: {
				id: id,
			},
		});

		res.status(200).json(product);
	} else {
		res.status(405).json({ errorMsg: "Method not allowed" });
	}
}
