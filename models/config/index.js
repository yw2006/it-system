import mysql2 from "mysql2"
import dotenv from "dotenv";
dotenv.config();

const conn = mysql2.createConnection({
  host: process.env.host,
  database: process.env.database,
  user: process.env.user,
  password: process.env.password,
  port: process.env.database_port,
}).promise();
const connectWithPromise = async () => {
  try {
    await conn.connect(); 
    console.log("Connected to MySQL database successfully!");
    return conn // Return promise-based connection
  } catch (error) {
    console.error("Error connecting to MySQL database:", error.message);
    throw error; // Rethrow the error for handling at a higher level
  }
};

export default await connectWithPromise();