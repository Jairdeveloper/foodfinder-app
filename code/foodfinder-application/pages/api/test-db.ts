import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/middleware/db-connect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const conn = await dbConnect();
        res.status(200).json({ ok: true, db: conn.connection.name });
    } catch (error: any) {
        res.status(500).json({ ok: false, error: error.message });
    }
}
