import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import { connectToDatabase } from "./db";
import swaggerDocument from "./swaggerConfig";
import mainRouter from "./routes";
import bodyParser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || "";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", mainRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express and TypeScript Server Connected");
});

const startServer = async () => {
  try {
    await connectToDatabase(MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  }
};

startServer();
