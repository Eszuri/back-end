import { Request, Response } from "express";
import mongoModel from './../config/Model';

const addDb = (req: Request, res: Response) => {
    const getRequest = req.body;

    mongoModel.create(getRequest)
        .then(() => {
            res.send({ status: "created", message: "Berhasil terkirim ke DB" })
        })
        .catch(err => {
            console.log(err);
        })
};

export default addDb;