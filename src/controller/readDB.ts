import { Request, Response } from 'express';
import mongoModel from './../config/Model';

const readDB = (req: Request, res: Response) => {
    mongoModel.find()
        .then((result) => {
            console.log(result);
            res.send(result);
        }).catch((err) => {
            console.log(err);
        });
};

export default readDB;