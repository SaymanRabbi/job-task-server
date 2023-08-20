import mongoose from "mongoose";
const databaseConnection = async () => {
      const conn = await mongoose.connect(process.env.DATABASE_URL);
      console.log(`Database Connected: ${conn.connection.host}Database Name: ${conn.connection.name}`);
  };

export default databaseConnection;