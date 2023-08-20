import DataModel from "../models/DataModel.js";

export const EditDataServices = async(req,res) => {
    try {
        const { _id, name, subCategory } = req.body.Data;
        const Data = await DataModel.findByIdAndUpdate(_id, { name, subCategory });
        res.status(200).json({ message: "Data updated successfully", data: Data });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

}