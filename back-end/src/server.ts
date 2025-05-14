import express, { urlencoded } from "express";
import cors from "cors";
import { mainRouter } from "./routers/main";

const server = express();
server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json()); // Parse JSON bodies (as sent by API clients)

server.use(mainRouter);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
