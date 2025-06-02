import pool from "../db/pool.js";

export default async function getAllDevelopers() {
  const { rows } = await pool.query("SELECT * FROM developer;");
  return rows;
}
