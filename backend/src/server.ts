import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.NODE_PORT_01 ?? 8901;

app.listen(port, () => console.log(`Server is running on port ${port}! 🔥`));