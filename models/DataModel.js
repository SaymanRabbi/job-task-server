import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    subCategory:{
        type: String,
        required: true,
    },
    agree:{
        type: String,
        required: true,
    }
})

export default mongoose.model("Data", dataSchema);