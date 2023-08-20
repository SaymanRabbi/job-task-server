import DataModel from "../models/DataModel.js";

export const GetDataServices = async (req, res) => {
    try {
         const Data = await DataModel.find();
            res.status(200).json({ message: "Data fetched successfully", data: Data });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}