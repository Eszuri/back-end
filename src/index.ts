import "dotenv/config"
import express from 'express';
import middleware from './config/middleware';
import mongoose from 'mongoose';
import { api } from './controller';
import root from "@/controller/home";
const app = express();


middleware(app);

mongoose.connect(String(process.env.MONGO_URI))
    // mongodb://127.0.0.1/ atau 
    // mongodb + srv://username:password@cluster0.gbecgcs.mongodb.net/collection?retryWrites=true&w=majority&appName=Cluster0  (ini api punya gw)
    .then(() => { console.log("MongoDB Connected"); })
    .catch(err => console.log(err))


app.get("/", root);
app.use('/api', api);

app.listen(3000, () => {
    console.log("ExpressJs Running In http://localhost:4000");
})