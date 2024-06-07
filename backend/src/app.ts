//* Dependencies imports...
import express from "express";
import bodyParser from "body-parser";

//* Prisma type-safe database imports...
import { PrismaClient } from "@prisma/client";

//* Routes imports...
import weatherRouter from "./routes/weather";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use("/api/weather", weatherRouter);

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
    app.listen(port, () => console.log(`Server running on port ${port}!`));
  })
  .catch((error: Error) => console.error("Failed to connect to PostgreSQL", error));

export { app };