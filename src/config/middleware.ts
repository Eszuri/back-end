import express, { Express } from "express";
import cors from "cors";

const middleware = (app: Express) => {
    app.use(cors({
        origin: ['http://localhost:5173'], // isi dengan url front end
    }))
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

export default middleware;