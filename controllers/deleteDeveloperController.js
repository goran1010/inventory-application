import deleteDeveloper from "../models/deleteDeveloper.js";
import dotenv from "dotenv";
dotenv.config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export default async function deleteDeveloperController(req, res) {
  const { developer, password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("Wrong password");
  }
  await deleteDeveloper(developer);
  res.redirect("/");
}
