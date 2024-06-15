import mongoose from "mongoose";

const skema = new mongoose.Schema({
    name: String,
    umur: Number,
    gender: String,
});

const mongoModel = mongoose.model("identitas", skema);
export default mongoModel;