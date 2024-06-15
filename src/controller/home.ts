import { Request, Response } from "express";

const root = (req: Request, res: Response) => {
    res.json({ status: "OKE", Message: "THis Is Home" });
};

export default root;