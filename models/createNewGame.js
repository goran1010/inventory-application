import pool from "../db/pool.js";

export default async function createNewGame(newGame) {
  const { name, genre, price, developer_id } = newGame;
  await pool.query(
    `INSERT INTO game (name, genre, price, developer_id) 
    VALUES
    ($1,$2,$3,$4);`,
    [name, genre, price, developer_id]
  );
}
