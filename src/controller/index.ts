import express from "express";
import addDb from "./addDB";
import readDB from "./readDB";
const api = express.Router();

api.post("/add-db", addDb);
api.get("/read-db", readDB);

export { api };