import express, { urlencoded } from "express";
import cors from "cors";
import { mainRouter } from "./routers/main";
import http from "http";

import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*" },
});

export { io };

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON bodies (as sent by API clients)

app.use(mainRouter);

io.on("connection", (socket) => {
  console.log("Novo cliente conectao", socket.id);

  socket.on("mensgem", (data) => {
    console.log("Mensagem recebida: ", data);
    io.emit("mensgem", data);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
