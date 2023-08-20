import DataModel from "../models/DataModel.js";

export const AddDataServices = async (req, res) => {
    try {
        const { name, category, subCategory, agree } = req.body;
        if (!name || !category || !subCategory || !agree) {
            return res.status(422).json({ error: "Plz filled the field properly" });
        }
        const data = new DataModel({ name, category, subCategory, agree });
        await data.save();
        res.status(201).json({ message: "Data saved successfully", data: data });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}