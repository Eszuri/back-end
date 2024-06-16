import "dotenv/config"
import cluster from 'cluster';
import { cpus } from 'os';
import express from 'express';
import middleware from './src/config/middleware';
import mongoose from 'mongoose';
import { api } from './src/controller';
import root from "./src/controller/home";
const app = express();
const numCPUs = cpus().length;


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // Optionally restart the worker
        cluster.fork();
    });
} else {

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
}
