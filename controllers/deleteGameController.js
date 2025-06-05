import deleteGame from "../models/deleteGame.js";
import dotenv from "dotenv";
dotenv.config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export default async function deleteGameController(req, res) {
  const { game, password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("Wrong password");
  }
  await deleteGame(game);
  res.redirect("/");
}
