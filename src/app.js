import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import { connectDB } from "./database.js";
import { initializePassport } from "./config/passport.config.js";

import usersRouter from "./routes/users.router.js";
import sessionsRouter from "./routes/sessions.router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

app.use("/api/users", usersRouter);
app.use("/api/sessions", sessionsRouter);

connectDB();

app.get("/ping", (req, res) => {
  res.send("pong");
});


app.listen(process.env.PORT, () =>
  console.log(`🚀 Servidor en puerto ${process.env.PORT}`)
);

